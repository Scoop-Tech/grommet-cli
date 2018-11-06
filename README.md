# grommet-cli
Command Line interface for grommet

:warning: This project has been deprecated in favor of create-react-app. This project will only support Grommet v1. For Grommet v2 use [this](https://facebook.github.io/create-react-app/).

![](http://i.imgur.com/LER7lCH.gif)

## Install

```command
npm install grommet-cli -g
```

## Access CLI

```command
grommet
```

## Commands

* `new [app-name]`: generates a new application based on a given type
* `version`: checks the current version of the CLI

## Help

Run `--help` after the command to see the documentation. For example:

```command
new --help
```

## Inline mode

This CLI allows inline mode execution

`grommet version` or `grommet new app-name --type app --theme hpe`

## Credits

Behind grommet-cli is the awesome [vorpal](http://vorpal.js.org) framework.

Made with :heart: by the Grommet team
