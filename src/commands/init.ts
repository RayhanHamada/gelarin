import { Command, flags } from '@oclif/command';
import os from 'os';
import path from 'path';
import fs from 'fs';

/**
 * TODO: and make a util function for checking and creating (if not exists) gelarin.json that triggered on 'new' command
 * TODO: delete this file
 */
export default class Init extends Command {
  static description =
    'Create gelarin.json file in home directory for saving boilerplate';

  static flags = {
    help: flags.help({ char: 'h' }),
  };

  static args = [];

  async run() {
    const filePath = path.join(os.homedir(), 'gelarin.json');

    fs.promises
      .writeFile(filePath, JSON.stringify({}), { encoding: 'utf-8' })
      .then(() => {
        this.log(`gelarin.json successfully created at ${filePath} !`);
      })
      .catch(() => {
        this.error(`failed when creating gelarin.json`);
      });
  }
}
