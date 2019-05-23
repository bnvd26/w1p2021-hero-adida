import Vue from 'vue';
import router from './router';

/*import reactiveStorage from "vue-reactive-storage";   possibilite de solutions pour le localStorage*/ 
import './assets/scss/styles.scss';



 new Vue({ router: router }).$mount('#root');


Vue.component('modal', {
  template: '#modal-template'
  
})
var audio = document.getElementById('audio')
console.log(audio)
audio.volume = 1;























 


