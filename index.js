"use strict";

// @TODO: Need to convert the .yml file to JSON format so it can be
// published and then extended.
module.exports = {
  extends: "stylelint-config-recommended",
  rules: {
    "at-rule-empty-line-before": [
      "always",
      {
        except: ["blockless-after-same-name-blockless", "first-nested"],
        ignore: ["after-comment"],
      },
    ],
    "at-rule-name-case": "lower"
  }
}