import Vue from 'vue';
import router from './router';

import './assets/scss/styles.scss';

 new Vue({ router: router }).$mount('#root');

 // register modal component
Vue.component('modal', {
  template: '#modal-template'
})


 


