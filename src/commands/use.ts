import { Command, flags } from '@oclif/command';
import fs from 'fs';
import path from 'path';
import os from 'os';
import inquirer from 'inquirer';
import { exec } from 'child_process';
import { checkForGelarin } from '../util';

export default class Use extends Command {
  static description = 'Use a boilerplate repo';

  static flags = {
    help: flags.help({ char: 'h' }),
  };

  static args = [
    {
      name: 'name',
      required: false,
      description: 'specify boilerplate name to be used (optional)',
    },
    {
      name: 'clonePath',
      required: false,
      description: 'specify the directory this boilerplate should be cloned (Optional, default to ".")',
    },
  ];

  async run() {
    /**
     * checking for gelarin.json first
     */
    await checkForGelarin(this.log).then(exists => {
      if (!exists) {
        this.error('no repo found, please add one !');
      }
    });

    const { args } = this.parse(Use);
    const filePath = path.join(os.homedir(), 'gelarin.json');

    /**
     * reading and parsing gelarin.json
     */
    const content = await fs.promises
      .readFile(filePath, { encoding: 'utf-8' })
      .catch(() => {
        this.error(`failed reading ${filePath}`);
      });

    const parsed: Record<string, any> = JSON.parse(content as string);

    const availableKeys = Object.keys(parsed);

    /**
     * if there is no available boilerplates, just exit
     */
    if (availableKeys.length === 0) {
      this.error('No available boilerplates found, please add some !');
    }

    /**
     * see if the args.projectName for use is specified,
     * if not then get list of choices
     */
    if (args.name) {
      if (availableKeys.includes(args.name)) {
        const { repoLink } = parsed[args.name];
        let clonePath = '';

        if (args.clonePath) clonePath = args.clonePath;

        /**
         * exec git clone here
         */
        exec(`git clone ${repoLink} ${clonePath}`, (exc, out, err) => {
          if (exc) {
            this.error(err);
          }

          this.log(out);
          this.log(`finish cloning ${repoLink} !`);
        });
      } else {
        this.error(`Key ${args.name} not found`);
      }
    } else {
      /**
       * list all available boilerplates here
       * TODO: also add repo description to the list.
       */
      await inquirer
        .prompt([
          {
            type: 'list',
            name: 'name',
            message: 'Available boilerplate',
            choices: availableKeys.map(key => ({
              name: key,
              value: key,
            })),
          },
          {
            type: 'input',
            name: 'where',
            default: '.',
            message: 'Where to put this boilerplate ?',

          }
        ])
        .then(ans => {
          const { repoLink } = parsed[ans.name];
          /**
           * exec git clone here
           */
          exec(`git clone ${repoLink} ${ans.where}`, (exc, out, err) => {
            if (exc) {
              this.error(err);
            }
            this.log(out);
            this.log(`finish cloning ${repoLink} !`);
          });
        });
    }
  }
}
