import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'

import VueRouter from 'vue-router';
Vue.use(VueRouter);

Vue.config.productionTip = false

import HomeComponent from './components/HomeComponent.vue';
import CreateComponent from './components/CreateComponent.vue';
import EditComponent from './components/EditComponent.vue';
import IndexComponent from './components/IndexComponent.vue';


const routes = [
  {
    name: 'home',
    path: '/',
    component: HomeComponent
  },

  {
    name: 'create',
    path: '/create',
    component: CreateComponent
  },

  {
    name: 'edit',
    path: '/edit',
    component: EditComponent
  },

  {
    name: 'post',
    path: '/posts',
    component: IndexComponent
  },

];

const router = new VueRouter({
  mode: 'history',
  router: routes
});

new Vue(Vue.util.extend({router}),App).$mount('#app')
