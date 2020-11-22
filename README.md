# gelarin

=========
A package for saving and generate your boilerplate !

# Usage

<!-- usage -->
```sh-session
$ npm install -g gelarin
$ gelarin COMMAND
running command...
$ gelarin (-v|--version|version)
gelarin/0.7.3 linux-x64 node-v14.15.1
$ gelarin --help [COMMAND]
USAGE
  $ gelarin COMMAND
...
```
<!-- usagestop -->

# Commands

<!-- commands -->
* [`gelarin help [COMMAND]`](#gelarin-help-command)
* [`gelarin new [REPOLINK] [DESCRIPTION]`](#gelarin-new-repolink-description)
* [`gelarin rm [NAME]`](#gelarin-rm-name)
* [`gelarin use [NAME] [CLONEPATH]`](#gelarin-use-name-clonepath)

## `gelarin help [COMMAND]`

```
USAGE
  $ gelarin help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.0/src/commands/help.ts)_

## `gelarin new [REPOLINK] [DESCRIPTION]`

```
USAGE
  $ gelarin new [REPOLINK] [DESCRIPTION]

ARGUMENTS
  REPOLINK     Specify boilerplate repo link (optional)

  DESCRIPTION  [default: My awesome quicksaved boilerplate] Specify boilerplate repo brief description, should be in
               double quote("") (Optional)

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/new.ts](https://github.com/RayhanHamada/gelarin/blob/v0.7.3/src/commands/new.ts)_

## `gelarin rm [NAME]`

```
USAGE
  $ gelarin rm [NAME]

ARGUMENTS
  NAME  specify boilerplate name to be removed (optional)

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/rm.ts](https://github.com/RayhanHamada/gelarin/blob/v0.7.3/src/commands/rm.ts)_

## `gelarin use [NAME] [CLONEPATH]`

```
USAGE
  $ gelarin use [NAME] [CLONEPATH]

ARGUMENTS
  NAME       specify boilerplate name to be used (optional)
  CLONEPATH  specify the directory this boilerplate should be cloned (Optional, default to "." or current directory)

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/use.ts](https://github.com/RayhanHamada/gelarin/blob/v0.7.3/src/commands/use.ts)_
<!-- commandsstop -->
