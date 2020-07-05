import { Command, flags } from '@oclif/command';
import os from 'os';
import path from 'path';
import fs from 'fs';

export default class Init extends Command {
  static description = 'describe the command here';

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
