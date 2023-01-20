oclif-hello-world
=================

```shell
./bin/dev settlement ./data/hoge.txt -f moge
```



oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g oclif-test001
$ oclif-test001 COMMAND
running command...
$ oclif-test001 (--version)
oclif-test001/0.0.0 darwin-x64 node-v18.0.0
$ oclif-test001 --help [COMMAND]
USAGE
  $ oclif-test001 COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`oclif-test001 hello PERSON`](#oclif-test001-hello-person)
* [`oclif-test001 hello world`](#oclif-test001-hello-world)
* [`oclif-test001 help [COMMAND]`](#oclif-test001-help-command)
* [`oclif-test001 plugins`](#oclif-test001-plugins)
* [`oclif-test001 plugins:install PLUGIN...`](#oclif-test001-pluginsinstall-plugin)
* [`oclif-test001 plugins:inspect PLUGIN...`](#oclif-test001-pluginsinspect-plugin)
* [`oclif-test001 plugins:install PLUGIN...`](#oclif-test001-pluginsinstall-plugin-1)
* [`oclif-test001 plugins:link PLUGIN`](#oclif-test001-pluginslink-plugin)
* [`oclif-test001 plugins:uninstall PLUGIN...`](#oclif-test001-pluginsuninstall-plugin)
* [`oclif-test001 plugins:uninstall PLUGIN...`](#oclif-test001-pluginsuninstall-plugin-1)
* [`oclif-test001 plugins:uninstall PLUGIN...`](#oclif-test001-pluginsuninstall-plugin-2)
* [`oclif-test001 plugins update`](#oclif-test001-plugins-update)

## `oclif-test001 hello PERSON`

Say hello

```
USAGE
  $ oclif-test001 hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/popopopopopopopopopopopo/hello-world/blob/v0.0.0/dist/commands/hello/index.ts)_

## `oclif-test001 hello world`

Say hello world

```
USAGE
  $ oclif-test001 hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ oclif-test001 hello world
  hello world! (./src/commands/hello/world.ts)
```

## `oclif-test001 help [COMMAND]`

Display help for oclif-test001.

```
USAGE
  $ oclif-test001 help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for oclif-test001.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.22/src/commands/help.ts)_

## `oclif-test001 plugins`

List installed plugins.

```
USAGE
  $ oclif-test001 plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ oclif-test001 plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.1.12/src/commands/plugins/index.ts)_

## `oclif-test001 plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ oclif-test001 plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ oclif-test001 plugins add

EXAMPLES
  $ oclif-test001 plugins:install myplugin 

  $ oclif-test001 plugins:install https://github.com/someuser/someplugin

  $ oclif-test001 plugins:install someuser/someplugin
```

## `oclif-test001 plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ oclif-test001 plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ oclif-test001 plugins:inspect myplugin
```

## `oclif-test001 plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ oclif-test001 plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ oclif-test001 plugins add

EXAMPLES
  $ oclif-test001 plugins:install myplugin 

  $ oclif-test001 plugins:install https://github.com/someuser/someplugin

  $ oclif-test001 plugins:install someuser/someplugin
```

## `oclif-test001 plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ oclif-test001 plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ oclif-test001 plugins:link myplugin
```

## `oclif-test001 plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ oclif-test001 plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ oclif-test001 plugins unlink
  $ oclif-test001 plugins remove
```

## `oclif-test001 plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ oclif-test001 plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ oclif-test001 plugins unlink
  $ oclif-test001 plugins remove
```

## `oclif-test001 plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ oclif-test001 plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ oclif-test001 plugins unlink
  $ oclif-test001 plugins remove
```

## `oclif-test001 plugins update`

Update installed plugins.

```
USAGE
  $ oclif-test001 plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
