# income-tax-calculator

Technical interview assignment.

**_Disclaimer:_**
_The goal of this exercise is to challenge myself as a developer to reproduce this app. I am NOT claiming ownership for design and/or product. The original design was shared and likely created by Messias Cole._

## 1. Configure project manually

- Initiated project with yarn.
- Added React and ReactDOM.
- Created .gitignore file and added "/node_modules" to it.
- Added Webpack packages: webpack, webpack-cli, webpack-dev-server.

  _Note: Going forward wepack will be updated with neccessary loaders (babel, html, css, files...)._

- Created directories: "./src", "./public"; Created files: "app.js", "index.jsx". (/w basic imports and jsx);
- Created "./public/index.html" template file and defined the root element.
- Added Babel packages: @babel/core, @babel/preset-react, @babel/preset-env and babel-loader for webpack. Created .babelrc and assigned the presets.
- Added scripts to start webpack-dev-server and to build the app.
- Added tailwind, postcss and related config files and webpack loaders. (Unknown at rule errors need to be disabled in IDE).
- Initiated eslint automatically and added neccessery plugins and prettier based on Javascipt standard rules with slight tweaks. Created config files.
- Added scripts for linting and formatting.

_Have I overused dependencies? Perhaps there are too many ES-lint dependencies since I used automatic configuration.There are also more css dependencies then I would like to have, hovewer Tailwind suggests using Postcss when using bundlers._
