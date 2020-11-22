# gelarin ![Node.js Package](https://github.com/RayhanHamada/gelarin/workflows/Node.js%20Package/badge.svg)

========= A package for saving and generate your boilerplate ! ==========

# Usage

<!-- usage -->
```sh-session
$ npm install -g gelarin
$ gelarin COMMAND
running command...
$ gelarin (-v|--version|version)
gelarin/0.9.0 win32-x64 node-v14.3.0
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
gelarin/0.8.0 linux-x64 node-v14.15.1
$ gelarin --help [COMMAND]
USAGE
  $ gelarin COMMAND
...
```
<!-- usagestop -->

# Commands

<!-- commands -->
* [`gelarin autocomplete [SHELL]`](#gelarin-autocomplete-shell)
* [`gelarin help [COMMAND]`](#gelarin-help-command)
* [`gelarin new [REPOLINK] [DESCRIPTION]`](#gelarin-new-repolink-description)
* [`gelarin rm`](#gelarin-rm)
* [`gelarin update [CHANNEL]`](#gelarin-update-channel)
* [`gelarin use`](#gelarin-use)

## `gelarin autocomplete [SHELL]`

```
USAGE
  $ gelarin autocomplete [SHELL]

ARGUMENTS
  SHELL  shell type

OPTIONS
  -r, --refresh-cache  Refresh cache (ignores displaying instructions)

EXAMPLES
  $ gelarin autocomplete
  $ gelarin autocomplete bash
  $ gelarin autocomplete zsh
  $ gelarin autocomplete --refresh-cache
```

_See code: [@oclif/plugin-autocomplete](https://github.com/oclif/plugin-autocomplete/blob/v0.2.0/src/commands/autocomplete/index.ts)_

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
  -h, --help         show CLI help
  -i, --interactive  To launch interactive input mode (You will likely to do this)
```

_See code: [src/commands/new.ts](https://github.com/RayhanHamada/gelarin/blob/v0.9.0/src/commands/new.ts)_

## `gelarin rm`

```
USAGE
  $ gelarin rm

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/rm.ts](https://github.com/RayhanHamada/gelarin/blob/v0.9.0/src/commands/rm.ts)_

## `gelarin update [CHANNEL]`

```
USAGE
  $ gelarin update [CHANNEL]
```

_See code: [@oclif/plugin-update](https://github.com/oclif/plugin-update/blob/v1.3.10/src/commands/update.ts)_

## `gelarin use`

```
USAGE
  $ gelarin use

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/use.ts](https://github.com/RayhanHamada/gelarin/blob/v0.9.0/src/commands/use.ts)_
<!-- commandsstop -->
* [`gelarin help [COMMAND]`](#gelarin-help-command)
* [`gelarin new [REPOLINK] [DESCRIPTION]`](#gelarin-new-repolink-description)
* [`gelarin rm`](#gelarin-rm)
* [`gelarin use`](#gelarin-use)

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
  -h, --help         show CLI help
  -i, --interactive  To launch interactive input mode (You will likely to do this)
```

_See code: [src/commands/new.ts](https://github.com/RayhanHamada/gelarin/blob/v0.8.0/src/commands/new.ts)_

## `gelarin rm`

```
USAGE
  $ gelarin rm

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/rm.ts](https://github.com/RayhanHamada/gelarin/blob/v0.8.0/src/commands/rm.ts)_

## `gelarin use`

```
USAGE
  $ gelarin use

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/use.ts](https://github.com/RayhanHamada/gelarin/blob/v0.8.0/src/commands/use.ts)_
<!-- commandsstop -->
