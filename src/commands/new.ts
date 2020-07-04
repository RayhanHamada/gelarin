import { Command, flags } from '@oclif/command';

export default class New extends Command {
  static description = 'command for saving new boilerplate repo';

  static flags = {
    help: flags.help({ char: 'h' }),
  };

  static args = [];

  async run() {
    return undefined;
  }
}
