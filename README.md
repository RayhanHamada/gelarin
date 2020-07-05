gelarin
=======

A package for saving boilerplates repo

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/gelarin.svg)](https://npmjs.org/package/gelarin)
[![Downloads/week](https://img.shields.io/npm/dw/gelarin.svg)](https://npmjs.org/package/gelarin)
[![License](https://img.shields.io/npm/l/gelarin.svg)](https://github.com/RayhanHamada/gelarin/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g gelarin
$ gelarin COMMAND
running command...
$ gelarin (-v|--version|version)
gelarin/0.0.0 win32-x64 node-v14.3.0
$ gelarin --help [COMMAND]
USAGE
  $ gelarin COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`gelarin help [COMMAND]`](#gelarin-help-command)
* [`gelarin init`](#gelarin-init)
* [`gelarin new`](#gelarin-new)
* [`gelarin use [PROJECTNAME]`](#gelarin-use-projectname)

## `gelarin help [COMMAND]`

display help for gelarin

```
USAGE
  $ gelarin help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.1.0/src\commands\help.ts)_

## `gelarin init`

for initiating gelarin.json in home directory

```
USAGE
  $ gelarin init

OPTIONS
  -h, --help  show CLI help
```

_See code: [src\commands\init.ts](https://github.com/RayhanHamada/gelarin/blob/v0.0.0/src\commands\init.ts)_

## `gelarin new`

command for saving new boilerplate repo

```
USAGE
  $ gelarin new

OPTIONS
  -h, --help  show CLI help
```

_See code: [src\commands\new.ts](https://github.com/RayhanHamada/gelarin/blob/v0.0.0/src\commands\new.ts)_

## `gelarin use [PROJECTNAME]`

Use a

```
USAGE
  $ gelarin use [PROJECTNAME]

OPTIONS
  -h, --help  show CLI help
```

_See code: [src\commands\use.ts](https://github.com/RayhanHamada/gelarin/blob/v0.0.0/src\commands\use.ts)_
<!-- commandsstop -->
