module.exports = {
  root: true,
  parserOptions: {
    "ecmaVersion": 6,
    sourceType: "module"
  },
  extends: "airbnb-base",
  // required to lint *.vue files
  plugins: [
    "html"
  ],
  // add your custom rules here
  "rules": {
    "semi": [2, "never"],
    "import/no-unresolved": 0,
    "func-names": "off",
    "global-require": "off",
    // "comma-dangle": "off",
    "no-new": "off",
    "no-param-reassign": ["error", { "props": false }],
    // allow debugger during development
    "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0,
    "no-console": process.env.NODE_ENV === "production" ? ["error"] : ["error", {"allow": ["warn", "error","log"]}],
  }
}
