# Vue.js Boilerplate for Single Page Apps

Basic Start Template for Vue.js Single Page Apps with:
- Bootstrap
- jQuery (required by Bootstrap)
- VUEX
- Vue-Router

Tooling is built on [Laravel-Mix](https://github.com/JeffreyWay/laravel-mix) as an easy to use "frontend" for Webpack

## Usage
### Install
```
# Checkout
git clone https://github.com/Schlangguru/Vue-Boilerplate.git
cd Vue-Boilerplate

# Install dependencies
npm install
```

### Build

```
# Development Build with inline source-maps
npm run dev

# Development Build (Watch)
npm run watch

# Start Development Server with hot-module-replacement
npm run hot

# Minified production build
npm run production

```

### Start Electron
```
# Start Electron with the built app
npm run electron
```
The Electron instance has built-in live-relaod enabled via the plugin [electron-reload](https://www.npmjs.com/package/electron-reload). So you can simply use `npm run watch` & `npm run electron` to rebuild the app and reload electron automatically everytime a file changes.
