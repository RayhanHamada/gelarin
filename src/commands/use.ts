import { Command, flags } from '@oclif/command';
import fs from 'fs';
import path from 'path';
import os from 'os';
import inquirer from 'inquirer';
import { exec } from 'child_process';
import { checkForGelarin, properSpace } from '../util';

/**
 * @description Use a boilerplate repo saved on your gelarin.json
 */
export default class Use extends Command {
  static description = 'Use a boilerplate repo';

  static flags = {
    help: flags.help({ char: 'h' }),
  };

  static args = [];

  async run() {
    /**
     * checking for gelarin.json first
     */
    await checkForGelarin(this.log).then(exists => {
      if (!exists) {
        this.error('no repo found, please add one !');
      }
    });

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
     * list all available boilerplates here
     */

    /**
     * for proper spacing between boilerplate name and description
     */
    const longest = availableKeys.reduce(
      (acc, curr) => (curr.length > acc ? curr.length : acc),
      availableKeys[0].length
    );

    await inquirer
      .prompt([
        {
          type: 'list',
          name: 'name',
          message: 'Available boilerplate',
          choices: availableKeys.map(key => ({
            name: properSpace(key, parsed[key].description, longest),
            value: key,
          })),
        },
        {
          type: 'input',
          name: 'where',
          default: '.',
          message: 'Where to put this boilerplate ?',
        },
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
