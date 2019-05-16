<template>
  <div class="big-header "  >  <!--:class="showModal ? 'opacity' : ' '-->
    <h1 >{{message}}</h1>
    <br />
 <transition-group name="bounce" appear tag="div" class="test">
   <div :key="message" v-if="visible" style="display: flex; flex-direction: row; justify-content:space-around; width:100vw;">
    <div v-for="character in characters" v-bind:key="character.message"  style="display: flex; flex-direction: row; justify-content:space-around; width:100vw;">
      <img :src="character.src"  :alt="character.altSrc" class="hover hoverr" @click="showModal = true" style="height: 220px;">
    </div>
  </div>
   </transition-group> 
<transition name="modal">
  <div v-if="showModal" style="position: absolute;" id="modal-template" class="modal" >
    <div v-for="character in characters" v-bind:key="character.message" >
      <div  v-for="stat in character" v-bind:key="stat.title">
      <img :src="stat.closeSvg" style="width: 30px; height:30px; cursor: pointer; position:absolute; right:10px; top:10px;" @click="showModal = false">
      <h1 >{{stat.title}}<h1>
    </div>
  </div>
    <div v-for="charact in charactersss" v-bind:key="charact.title">
      {{charact.title}}
    </div>
    <router-link class="button" to="game/1"> Jouer avec Jurgen Klopp </router-link>
  </div> 
</transition>
  <router-link :key="visible"  class="button" to="/game/1">Go to Game</router-link> 
</template>
<script>

import data from '../data.json';
    export default {
    data () {
        return {
      
            tst: '',
            view: '',
            counter: 0,
            visible: true,
            showModal: false,
            message : "Choisissez votre PERSONNAGE",
            characters: data.characters[0],
            charactersss: data.characters[0].id,
            newNumber: null 
        }
        
    },

     mounted () {
    if (localStorage.tst) {
      this.tst = localStorage.tst;
    }

     if (localStorage.getItem('counter')) {
      try {
        this.cats = JSON.parse(localStorage.getItem('counter'));
      } catch(e) {
        localStorage.removeItem('counter');
      }
    }
  },


   watch: {
    tst(tstT) {
      localStorage.tst = tstT;
    },
     
   
  },

 
   
   methods: {
     click : function () {
       document.querySelector('.loader__title').classList.add('loader--active')
     },

     saveNumber : function () {
           const parsed = JSON.stringify(this.counter);
      localStorage.setItem('counter', parsed);
     },

   
    }
  }

</script>
<style>

.translate-enter, .translate-enter-active {
  transform: translateY(100px);
}

.fade-enter, .fade-leave {
  transition: opacity .9s;
  color: red;

}


.fade-enter, .fade-leave-active {
  opacity: 0;
  transform: translateX(20px);
  color: red;
}

.bounce-enter-active {
  animation: bounceIn 2s;
}

@keyframes bounceIn {
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1);
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    -webkit-transform: scale3d(0.9, 0.9, 0.9);
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(1.03, 1.03, 1.03);
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    -webkit-transform: scale3d(0.97, 0.97, 0.97);
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}


@keyframes bounceOut {
  20% {
    -webkit-transform: scale3d(0.9, 0.9, 0.9);
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    -webkit-transform: scale3d(1.1, 1.1, 1.1);
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }
}

</style>
