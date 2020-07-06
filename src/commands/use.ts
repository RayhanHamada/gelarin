import { Command, flags } from '@oclif/command';
import fs from 'fs';
import path from 'path';
import os from 'os';
import inquirer from 'inquirer';
import { exec } from 'child_process';

export default class Use extends Command {
  static description = 'Use a boilerplate repo';

  static flags = {
    help: flags.help({ char: 'h' }),
  };

  static args = [{ name: 'name' }];

  async run() {
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
     * see if the args.projectName for use is specified,
     * if not then get list of choices
     */
    if (args.name) {
      if (availableKeys.includes(args.name)) {
        const { repoLink } = parsed[args.name];

        /**
         * exec git clone here
         * TODO: make git clone exec
         */
        exec(`git clone ${repoLink}`, (exc, out, err) => {
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
        ])
        .then(ans => {
          const { repoLink } = parsed[ans.name];
          /**
           * exec git clone here
           * TODO: make git clone exec
           */
          exec(`git clone ${repoLink}`, (exc, out, err) => {
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
