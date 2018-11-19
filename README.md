# GIFME Frontend

##  Compiling
You can run `npm run watch` to begin a watch mode which will auto-compile any HTML and SCSS file you edit under the `src` directory.

##  File structure
Keep any components under the `src/components` directory, as the `src/public` directory should only contain one directory per page with an `index.html` and `styles.scss` each. Each component should have their own directory under `src/components`, with related HTML/SCSS/JS under the same directory: e.g. consider `src/components/header` having `header/index.html`, `header/styles.scss` and if requires JS, `header/main.js`. A component can later be included in any page.