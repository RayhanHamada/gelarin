import os from 'os';
import path from 'path';
import fs from 'fs';

import { Command, flags } from '@oclif/command';
import inquirer from 'inquirer';
import prettier from 'prettier';

/**
 * TODO: add args for instant repo add
 */
export default class New extends Command {
  static description = 'Add new boilerplate repo to be saved';

  static flags = {
    help: flags.help({ char: 'h' }),
  };

  static args = [];

  async run() {
    const filePath = path.join(os.homedir(), 'gelarin.json');
    const content = await fs.promises
      .readFile(filePath, { encoding: 'utf-8' })
      .catch(() => {
        this.error('failed to reads gelarin.json');
      });

    let parsed: Record<string, any>;

    try {
      parsed = JSON.parse(content as string);
    } catch (error) {
      this.error(`failed parsing gelarin.json`);
    }

    /**
     * get all answer here
     */
    const answer = await inquirer
      .prompt([
        {
          type: 'input',
          name: 'boilerplateName',
          message: 'Enter boilerplate name :',
          validate: input => {
            const allowed = /^([\w][\w\d]*(-[A-Za-z0-9]+)*)?$/;

            if (input === '') {
              this.log('\nBoilerplate name cannot be empty');
              return false;
            }

            if (!allowed.test(input)) {
              this.log(
                '\nonly support alphanumeric with optional dash (like boil-er-plate2)'
              );
              return false;
            }
            return true;
          },
        },
        {
          type: 'input',
          name: 'description',
          message: 'Enter Description',
          default: 'My Awesome Boilerplate : ',
        },
        {
          type: 'input',
          name: 'repoLink',
          message: 'Enter Repository link : ',
          validate: input => {
            if (input === '') {
              this.log('\nLink cannot be empty');
              return false;
            }

            return true;
          },
          transformer: input => {
            /**
             * check if repoLink suffixed with .git.
             * if not, add it to the back of the repoLink
             */
            const gitSuffix = /.+\.git$/;

            if (!gitSuffix.test(input)) return `${input}.git`;

            return input;
          },
        },
      ])
      .catch(() => {
        this.error('Error when questioning');
      });

    /**
     * update parsed data
     */
    parsed = {
      ...parsed,
      [answer.boilerplateName]: {
        description: answer.description,
        repoLink: answer.repoLink,
      },
    };

    /**
     * prettify and write to gelarin.json
     */
    await fs.promises
      .writeFile(
        filePath,
        prettier.format(JSON.stringify(parsed), { parser: 'json-stringify' }),
        {
          encoding: 'utf-8',
        }
      )
      .then(() => {
        this.log(
          `\n Repo ${answer.boilerplateName} (${answer.repoLink}) is saved !`
        );
      });
  }
}
