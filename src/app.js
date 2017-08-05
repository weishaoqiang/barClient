import Vue from 'vue';
import App from './app.vue';

var vm = new Vue({
  // router,
  render: r => r(App)
}).$mount("#app")
