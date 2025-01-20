import './style.css';
import Vue from 'vue';
import Vueform from '@vueform/vueform';
import vueformConfig from './vueform.config';
import App from './App.vue';
import Teleport from 'vue2-teleport';

Vue.component('Teleport', Teleport);
Vue.use(Vueform, vueformConfig);

const appInstance = new Vue({
  el: '#app',
  render: (createElement) => createElement(App),
});
