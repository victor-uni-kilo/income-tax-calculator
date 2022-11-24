# income-tax-calculator

Technical interview assignment.

**_Disclaimer:_**
_The goal of this exercise is to challenge myself as a developer to reproduce this app. I am NOT claiming ownership for design and/or product. The original design was shared and likely created by Messias Cole._

## 1. Configure project manually

- Initiated project with yarn.
- Added React and ReactDOM.
- Created .gitignore file and added "/node_modules" to it.
- Added Webpack packages: webpack, webpack-cli, webpack-dev-server.
  **_Note:_**  
  _Going forward wepack will be updated with neccessary loaders (babel, html, css, files...)._

- Created directories: "./src", "./public"; Created files: "app.js", "index.jsx". (/w basic imports and jsx);
- Created "./public/index.html" template file and defined the root element.
- Added Babel packages: @babel/core, @babel/preset-react, @babel/preset-env and babel-loader for webpack. Created .babelrc and assigned the presets.
- Added scripts to start webpack-dev-server and to build the app.
- Added tailwind, postcss and related config files and webpack loaders. (Unknown at rule errors need to be disabled in IDE).
- Added eslint and added neccessery plugins and prettier based on Javascipt standard rules with slight tweaks. Created config files.
  **_Note:_**
  _Automatic configuration created total of 7 dependencies, which were manualy reduced to 3._

- Added scripts for linting and formatting.

## 2. Calculation logic

Since our app allows both gross and net inputs as well as options for payment frequency, I decided to calculate the annual tax amount first. For this I created two functions: "deriveTaxFromGross" and "deriveTaxFromNet". From there I get all the other values. Then I shall divide them by specific periods to get other payment frequencies.

_Judging by the output from the provided video result amounts in the tables are not consistent with
simple equasion GROSS - TAX = NET so it seemed to me that there is more complicated math under
the hood. To take care of math for my use case I used US progressive income taxation for 2023 from investopedia:
https://www.investopedia.com/terms/t/taxrate.asp ._

_(I believed that doing this could simulate a real situation without getting sidetracked)._

**_Note:_**
_Not applicable for head of household case, married filling together is multiple by two)_
