import Vue from 'vue';
import router from './router';
import VueLocalStorage from 'vue-ls';
/*import reactiveStorage from "vue-reactive-storage";   possibilite de solutions pour le localStorage*/ 
import './assets/scss/styles.scss';

 new Vue({ router: router }).$mount('#root');


Vue.component('modal', {
  template: '#modal-template'
})

var body = document.querySelector('.body');


/*          A VALIDER 
var onceTime = true;

var ls = function myFunction() {
  setTimeout(function(){ body.classList.remove('none') }, 3000);
  onceTime = false;
}

ls();*/


Vue.use(VueLocalStorage);




 


