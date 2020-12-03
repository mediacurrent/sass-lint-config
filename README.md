# stylelint-config

Adds stylelint configuration for consistent CSS rules.

## Install

`npm install --save-dev @mediacurrent/stylelint-config`

## Extend

In local `stylelintrc.yml`

```yaml
// Get base from node_modules.
extends:
  - "@mediacurrent/stylelint-config"
// Overrides.
rules: 
  indentation: "tab"
```

## Pre-commit hook
For formatting using these rules to take place automatically on commit, follow the steps [outlined here](https://github.com/mediacurrent/prettier-config#pre-commit-hook) in Prettier setup.