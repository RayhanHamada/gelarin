import os from 'os';
import path from 'path';
import fs from 'fs';

import { Command, flags } from '@oclif/command';
import inquirer from 'inquirer';
import prettier from 'prettier';
import { checkForGelarin } from '../util';

/**
 * @description Add new boilerplate repository to be saved
 */
export default class New extends Command {
  static description = 'Add new boilerplate repo to be saved';

  static flags = {
    help: flags.help({ char: 'h' }),
  };

  static args: any = [
    {
      name: 'repoLink',
      required: false,
      description: 'Specify boilerplate repo link (optional)',
    },
    {
      name: 'description',
      required: false,
      description:
        'Specify boilerplate repo brief description, should be in double quote("") (Optional)',
      default: 'My awesome quicksaved boilerplate',
    },
  ];

  async run() {
    /**
     * check for gelarin.json first
     */
    await checkForGelarin(this.log);

    const { args } = this.parse(New);
    const filePath = path.join(os.homedir(), 'gelarin.json');
    const content = await fs.promises
      .readFile(filePath, { encoding: 'utf-8' })
      .catch(() => {
        this.error('failed to reads gelarin.json');
      });

    let parsed: Record<string, any>;
    let boilerplateName: string;
    let repoLink: string;

    try {
      parsed = JSON.parse(content as string);
    } catch (error) {
      this.error(`failed parsing gelarin.json`);
    }

    /**
     * save boilerplate if repoLink args is specified
     */
    if (args.repoLink) {
      /**
       * check if repoLink suffixed with .git.
       * if not, add it to the back of the repoLink
       */
      const gitSuffix = /.+\.git$/;
      const linkToSave = gitSuffix.test(args.repoLink)
        ? args.repoLink
        : `${args.repoLink}.git`;

      parsed[linkToSave] = {
        repoLink: linkToSave,
        description: args.description,
      };

      boilerplateName = args.repoLink;
      repoLink = args.repoLink;
    } else {
      /**
       * if repoLink args not specified, then show quickform
       * to save a boilerplate
       */
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
      parsed[answer.boilerplateName] = {
        repoLink: answer.repoLink,
        description: answer.description,
      };

      boilerplateName = answer.boilerplateName;
      repoLink = answer.repoLink;
    }

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
        this.log(`\n Repo ${boilerplateName} (${repoLink}) is saved !`);
      });
  }
}
