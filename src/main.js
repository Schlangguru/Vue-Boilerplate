import Vue from 'vue';

//////////////////////////////////////////////////////
// Bootstrap components integration (JQuery needed) //
//////////////////////////////////////////////////////
window.$ = window.jQuery = require('jquery');
require('bootstrap-sass');

////////////////////////
// Main App Component //
////////////////////////
import store from './Store';
import router from './Router';
import App from './App';

new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
});
