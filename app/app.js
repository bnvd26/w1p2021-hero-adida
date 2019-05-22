import Vue from 'vue';
import router from './router';

/*import reactiveStorage from "vue-reactive-storage";   possibilite de solutions pour le localStorage*/ 
import './assets/scss/styles.scss';


 new Vue({ router: router }).$mount('#root');


Vue.component('modal', {
  template: '#modal-template'
})

var onceTime = true;

var body = document.querySelector('.root');
var entrance = document.querySelector('.entrance');





var ls = function myFunction() {
  
  setTimeout(function(){ body.classList.remove('none'); entrance.style.display="none" }, 3000);
  onceTime = false;
}

ls();







 


