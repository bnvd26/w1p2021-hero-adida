import Vue from 'vue';
import router from './router';
import reactiveStorage from "vue-reactive-storage";
import './assets/scss/styles.scss';

 new Vue({ router: router }).$mount('#root');


Vue.component('modal', {
  template: '#modal-template'
})



 


