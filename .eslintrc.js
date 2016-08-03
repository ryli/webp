module.exports = {
  root: true,
  parserOptions: {
    "ecmaVersion": 6,
    sourceType: "module"
  },
  extends: "standard",
  // required to lint *.vue files
  plugins: [
    "html"
  ],
  // add your custom rules here
  "rules": {
    // "semi": [2, "never"],
   /* "import/no-unresolved": 0,
    "space-before-function-paren" : ["error", "always"],
    "func-names": "off",
    "global-require": "off",
    "arrow-body-style": "off",
    // "comma-dangle": "off",
    "no-new": "off",
    "no-param-reassign": ["error", { "props": false }],*/
    // allow debugger during development
    "arrow-parens": 0,
    "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0,
    "no-console": process.env.NODE_ENV === "production" ? ["error"] : ["error", {"allow": ["warn", "error","log"]}],
  }
}
