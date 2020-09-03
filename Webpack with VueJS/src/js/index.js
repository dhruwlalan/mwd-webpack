// ASSETS
import './assets.js';

// MAIN
import Vue from 'vue';
import App from './Vue/App.vue';

console.log(Vue);

new Vue({
  el: '#app',
  render: h => h(App)
})