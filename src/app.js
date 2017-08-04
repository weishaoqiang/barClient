import Vue from 'vue';
import App from './app.vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import routes from './router.js';

Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter(routes);
let vm = new Vue({
  router,
  render: h => h(App)
}).$mount("#app")
