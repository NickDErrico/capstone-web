import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css'
import { routes } from './routes';
// import { Line } from 'vue-chartjs';

Vue.use(Vuetify);
Vue.use(VueRouter);


import * as store from "./store/store";

const router = new VueRouter({
  mode: 'history',
  routes,
})

new Vue({
  el: '#app',
  router,
  render: h => h(App),
  store
})
