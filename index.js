module.exports = {
  "defaultSeverity": "warning",
  "plugins": [
     "stylelint-scss"
  ],
  "rules": {
     "color-no-invalid-hex": true,
     "font-family-no-duplicate-names": true,
     "font-family-no-missing-generic-family-keyword": true,
     "function-calc-no-invalid": true,
     "function-calc-no-unspaced-operator": true,
     "function-linear-gradient-no-nonstandard-direction": true,
     "string-no-newline": true,
     "unit-no-unknown": true,
     "property-no-unknown": true,
     "keyframe-declaration-no-important": true,
     "declaration-block-no-duplicate-properties": [
        true,
        {
           "ignore": [
              "consecutive-duplicates-with-different-values"
           ]
        }
     ],
     "declaration-block-no-shorthand-property-overrides": true,
     "block-no-empty": true,
     "selector-pseudo-class-no-unknown": true,
     "selector-pseudo-element-no-unknown": true,
     "selector-type-no-unknown": true,
     "media-feature-name-no-unknown": true,
     "comment-no-empty": true,
     "no-duplicate-at-import-rules": true,
     "no-duplicate-selectors": true,
     "no-empty-source": null,
     "no-extra-semicolons": true,
     "no-invalid-double-slash-comments": true,
     "color-named": [
        "never",
        {
           "ignore": [
              "inside-function"
           ]
        }
     ],
     "shorthand-property-no-redundant-values": true,
     "value-no-vendor-prefix": true,
     "property-no-vendor-prefix": true,
     "declaration-no-important": true,
     "declaration-property-value-blacklist": {
        "//bborder\\b/": [
           "none"
        ]
     },
     "selector-max-empty-lines": 0,
     "selector-no-qualifying-type": [
        true,
        {
           "ignore": [
              "attribute"
           ]
        }
     ],
     "indentation": 2,
     "color-hex-case": "lower",
     "function-comma-space-after": "always",
     "function-comma-space-before": "never",
     "function-name-case": "lower",
     "function-parentheses-space-inside": "never",
     "function-url-quotes": "always",
     "function-whitespace-after": "always",
     "number-leading-zero": "always",
     "number-no-trailing-zeros": true,
     "string-quotes": "single",
     "length-zero-no-unit": true,
     "unit-case": "lower",
     "value-keyword-case": "lower",
     "value-list-comma-newline-after": "always-multi-line",
     "value-list-comma-newline-before": "never-multi-line",
     "value-list-comma-space-after": "always-single-line",
     "value-list-comma-space-before": "never",
     "value-list-max-empty-lines": 0,
     "property-case": "lower",
     "declaration-bang-space-after": "never",
     "declaration-bang-space-before": "always",
     "declaration-colon-newline-after": "always-multi-line",
     "declaration-colon-space-after": "always-single-line",
     "declaration-colon-space-before": "never",
     "declaration-empty-line-before": "never",
     "declaration-block-semicolon-newline-after": "always",
     "declaration-block-semicolon-newline-before": "never-multi-line",
     "declaration-block-semicolon-space-after": "never-single-line",
     "declaration-block-semicolon-space-before": "never",
     "declaration-block-trailing-semicolon": "always",
     "block-closing-brace-empty-line-before": "never",
     "block-closing-brace-newline-after": "always",
     "block-closing-brace-newline-before": "always",
     "block-opening-brace-newline-after": "always",
     "selector-attribute-brackets-space-inside": "never",
     "selector-attribute-operator-space-after": "never",
     "selector-attribute-operator-space-before": "never",
     "selector-attribute-quotes": "always",
     "selector-combinator-space-after": "always",
     "selector-combinator-space-before": "always",
     "selector-descendant-combinator-no-non-space": true,
     "selector-pseudo-class-case": "lower",
     "selector-pseudo-class-parentheses-space-inside": "never",
     "selector-pseudo-element-case": "lower",
     "selector-pseudo-element-colon-notation": "double",
     "selector-type-case": "lower",
     "selector-list-comma-newline-after": "always",
     "selector-list-comma-space-before": "never",
     "rule-empty-line-before": [
        "always",
        {
           "ignore": [
              "after-comment"
           ]
        }
     ],
     "no-missing-end-of-source-newline": true,
     "at-rule-no-unknown": null,
     "scss/at-rule-no-unknown": true
  }
}