# Javascript Template Repository
- `Node.js` and `npm` are installed globally. Dependencies of projects are managed locally.<br>
  Use the `nvm install --lts` command to install the latest Node.js version, with Node Version Manager (When you use NVM to update Node.js, it also updates npm to the latest version that corresponds to the installed Node.js version.).

- After running the command `npm install` locally to install dependencies, run the command `npm update --save-dev` to update your project's package.json file to include dependency versions.

- Files:

  - `package.json`: Metadata file used by npm to manage project dependencies, scripts, configuration settings, and other metadata.
  - `package-lock.json`: Records the exact version of each installed package and their dependencies.
  - `webpack.common/dev/prod.js`: Config files for webpack.
  - `.eslintrc.json`: Config file for ESLint. Extends eslint-config-airbnb-base. Extends eslint-config-prettier to disable conflicting rules with Prettier.
  - `.prettierrc.json`: Empty config file to let editors and other tools know you are using Prettier.
  - `.gitignore`: Set files for Git to ignore.
  - `.prettierignore`: Set files for Prettier to ignore.
  - `settings.json`: Settings file of VSCode. I created a copy in case i need it later.
  
- Dependencies:

  - eslint-config-airbnb-base: Use airbnb config.
  - eslint-config-prettier: Sets the eslint rules that conflict with prettier to "off".
  - eslint-plugin-import: Focuses on linting and enforcing best practices related to import statements in JavaScript.
  - webpack-dev-server: Serve webpack bundles during the development process. Supports live reloading.
  - webpack-merge: Install the function that lets you merge multiple webpack config files (common/dev/prod).
  - @babel/core, @babel/preset-env, babel-loader: Dependencies for Babel. babel-loader handles the transpilation of .js files when transpiling for production.

- Used VSCod Plugins:
  - ESLint: Integrates ESLint into VS Code. The extension uses the ESLint library installed in the opened workspace folder. If the folder doesn't provide one the extension looks for a global install version. If you haven't installed ESLint either locally or globally, do so by running npm init @eslint/config (this will install eslint locally and let you configure the installation.)
  Setting the following rule on **settings.json** will automatically fix the fixable ESLint errors on `.js` files when you save(ctrl+s) the file:
  ```json
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  ```
  - Prettier-Code Formatter: Integrates Prettier into VS Code. This extension will use prettier from your project's local dependencies.
  Setting the following rule on **settings.json** will automatically format the `.js` and `.css` files when you save(ctrl+s):
  ```json
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true
  }
  "[css]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true
  }
  ```
  - Atom One Dark Theme (font: Fira Mono Medium)
  - Material Icon Theme
  - Live Server

