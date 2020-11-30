# sass-lint-config

Adds sass-lint configuration for consistent CSS rules.

## Install

`npm install --save-dev @mediacurrent/sass-lint-config`

## Extend

In local `sass-lint.yml`

```yaml
options:
  config-file: ./node_modules/@mediacurrent/sass-lint-config/.sass-lint.yml
```

## Pre-commit hook
For formatting using these rules to take place automatically on commit, follow the steps [outlined here](https://github.com/mediacurrent/prettier-config#pre-commit-hook) in Prettier setup.