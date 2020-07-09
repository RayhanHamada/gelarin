import { Command, flags } from '@oclif/command';
import { format } from 'prettier';
import path from 'path';
import os from 'os';
import fs from 'fs';
import inquirer from 'inquirer';
import { checkForGelarin } from '../util';

export default class Rm extends Command {
  static description = 'Remove saved boilerplate repo';

  static flags = {
    help: flags.help({ char: 'h' }),
  };

  static args = [{ name: 'name' }];

  async run() {
    /**
     * checking for gelarin.json first
     */
    await checkForGelarin(this.log).then(exists => {
      if (!exists) {
        this.error('no repo found, please add one !');
      }
    });

    const { args } = this.parse(Rm);
    const filePath = path.join(os.homedir(), 'gelarin.json');

    /**
     * reading and parsing gelarin.json
     */
    const content = await fs.promises
      .readFile(filePath, { encoding: 'utf-8' })
      .catch(() => {
        this.error(`failed reading ${filePath}`);
      });

    let parsed: Record<string, any> = {};

    try {
      // eslint-disable-next-line require-atomic-updates
      parsed = JSON.parse(content as string);
    } catch (error) {
      this.error('failed parsing gelarin.json');
    }

    const availableKeys = Object.keys(parsed);

    /**
     * if there is no available boilerplates, just exit
     */
    if (availableKeys.length === 0) {
      this.error('No available boilerplates found, please add some !');
    }

    /**
     * if the name of the boilerplate meant to be removed is specified as inline argument
     */
    const toRemove: string[] = [];
    if (args.name) {
      /**
       * check if args.name is exists
       */
      if (availableKeys.includes(args.name)) {
        toRemove.push(args.name);
      } else {
        this.error(`${args.name} is not exists`);
      }
    } else {
      /**
       * if the name of the boilerplate isn't specified
       */
      await inquirer
        .prompt([
          {
            type: 'checkbox',
            name: 'names',
            message: 'Available boilerplate to be deleted',
            choices: availableKeys.map(key => ({
              name: key,
              value: key,
            })),
          },
        ])
        .then(ans => {
          toRemove.push(...ans.names);
          toRemove.forEach(key => {
            parsed[key] = undefined;
          });
        });

      await fs.promises
        .writeFile(
          filePath,
          format(JSON.stringify(parsed), { parser: 'json-stringify' })
        )
        .then(() => {
          toRemove.forEach(key => {
            this.log(`${key} successfully deleted !`);
          });
        })
        .catch(() => {
          this.error(`failed deleting boilerplate !`);
        });
    }
  }
}
