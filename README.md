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
gelarin/0.6.0 win32-x64 node-v14.3.0
$ gelarin --help [COMMAND]
USAGE
  $ gelarin COMMAND
...
```
<!-- usagestop -->
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
* [`gelarin new [REPOLINK]`](#gelarin-new-repolink)
* [`gelarin rm [NAME]`](#gelarin-rm-name)
* [`gelarin use [NAME] [CLONEPATH]`](#gelarin-use-name-clonepath)

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

## `gelarin new [REPOLINK]`

Add new boilerplate repo to be saved

```
USAGE
  $ gelarin new [REPOLINK]

ARGUMENTS
  REPOLINK  specify boilerplate repo link (optional)

OPTIONS
  -h, --help  show CLI help
```

_See code: [src\commands\new.ts](https://github.com/RayhanHamada/gelarin/blob/v0.6.0/src\commands\new.ts)_

## `gelarin rm [NAME]`

Remove saved boilerplate repo

```
USAGE
  $ gelarin rm [NAME]

ARGUMENTS
  NAME  specify boilerplate name to be removed (optional)

OPTIONS
  -h, --help  show CLI help
```

_See code: [src\commands\rm.ts](https://github.com/RayhanHamada/gelarin/blob/v0.6.0/src\commands\rm.ts)_

## `gelarin use [NAME] [CLONEPATH]`

Use a boilerplate repo

```
USAGE
  $ gelarin use [NAME] [CLONEPATH]

ARGUMENTS
  NAME       specify boilerplate name to be used (optional)
  CLONEPATH  specify the directory this boilerplate should be cloned (Optional, default to "." or current directory)

OPTIONS
  -h, --help  show CLI help
```

_See code: [src\commands\use.ts](https://github.com/RayhanHamada/gelarin/blob/v0.6.0/src\commands\use.ts)_
<!-- commandsstop -->
* [`gelarin help [COMMAND]`](#gelarin-help-command)
* [`gelarin init`](#gelarin-init)
* [`gelarin new`](#gelarin-new)
* [`gelarin rm [NAME]`](#gelarin-rm-name)
* [`gelarin use [NAME]`](#gelarin-use-name)

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

Create gelarin.json file in home directory for saving boilerplate

```
USAGE
  $ gelarin init

OPTIONS
  -h, --help  show CLI help
```

_See code: [src\commands\init.ts](https://github.com/RayhanHamada/gelarin/blob/v0.0.0/src\commands\init.ts)_

## `gelarin new`

Add new boilerplate repo to be saved

```
USAGE
  $ gelarin new

OPTIONS
  -h, --help  show CLI help
```

_See code: [src\commands\new.ts](https://github.com/RayhanHamada/gelarin/blob/v0.0.0/src\commands\new.ts)_

## `gelarin rm [NAME]`

Remove saved boilerplate repo

```
USAGE
  $ gelarin rm [NAME]

OPTIONS
  -h, --help  show CLI help
```

_See code: [src\commands\rm.ts](https://github.com/RayhanHamada/gelarin/blob/v0.0.0/src\commands\rm.ts)_

## `gelarin use [NAME]`

Use a boilerplate repo

```
USAGE
  $ gelarin use [NAME]

OPTIONS
  -h, --help  show CLI help
```

_See code: [src\commands\use.ts](https://github.com/RayhanHamada/gelarin/blob/v0.0.0/src\commands\use.ts)_
<!-- commandsstop -->
