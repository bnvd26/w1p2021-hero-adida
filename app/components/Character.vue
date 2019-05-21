<template>
  <div class="big-header "  >  <!--:class="showModal ? 'opacity' : ' '-->
    <h1 >{{message}}</h1>
    <br />
    <transition-group name="bounce" appear tag="div" class="test">
        <div :key="message" v-if="visible" style="display: flex; flex-direction: row; justify-content:space-around; width:100vw;">
            <img :src="characterKlopp.src" class="hover hoverr" :alt="characterKlopp.altSrc" @click="showModalsOne()" style="height: 220px;">
            <img :src="characterKombouare.src" class="hover hoverr" :alt="characterKombouare.altSrc" @click="showModalsTwo()" style="height: 220px;">
            <img :src="characterZidane.src" class="hover hoverr" :alt="characterZidane.altSrc" @click="showModalsThree()" style="height: 220px;">
        </div>
     </transition-group> 
<transition name="modal">
  
  
  <div v-if="showModalOne" style="position: absolute;" id="modal-template" class="modal" >
      <img :src="characterKlopp.closeSvg" style="width: 40px; height:40px; cursor: pointer; position:absolute; right:10px; top:10px;" @click="showModalOne = false">
    <router-link class="button" to="game/1" @click.native="saveCharacterKlopp()"> {{characterKlopp.title}} </router-link>
  </div> 


   <div v-if="showModalTwo" style="position: absolute;" id="modal-template" class="modal" >
      <img :src="characterKombouare.closeSvg" style="width: 40px; height:40px; cursor: pointer; position:absolute; right:10px; top:10px;" @click="showModalTwo = false">
    <router-link class="button" to="game/1" @click.native="saveCharacterKombouare()"> {{characterKombouare.title}} </router-link>
  </div> 


   <div v-if="showModalThree" style="position: absolute;" id="modal-template" class="modal" >
      <img :src="characterZidane.closeSvg" style="width: 40px; height:40px; cursor: pointer; position:absolute; right:10px; top:10px;" @click="showModalThree = false">
    <router-link class="button" to="game/1" @click.native="saveCharacterZidane()"> {{characterZidane.title}} </router-link>
  </div> 


</transition>
</template>
<script>

import characterService from '../services/characterService';
import gameService from '../services/gameService';
import data from '../data.json';
    export default {
    data () {
        return {
            visible: true,
            showModalOne: false,
            showModalTwo: false,
            showModalThree: false,
            message : "Choisissez votre Entraineur ",
            characterKlopp: data.characters[0][1],
            characterZidane: data.characters[0][2],
            characterKombouare: data.characters[0][3],            
            newNumber: null,
        }        
    },

  mounted() {
    localStorage.clear();
},
  
  methods : {
  
        showModalsOne() {
          this.showModalOne = true;
        },
         showModalsTwo() {
          this.showModalTwo = true;
        },
        showModalsThree() {
          this.showModalThree = true;
        },
        saveCharacterZidane() {
        localStorage.setItem('character', 'zidane'); 
        localStorage.setItem('points', 82) 
        }, 
        saveCharacterKombouare() {
        localStorage.setItem('character', 'kombouare');  
        localStorage.setItem('points', 87)
        },
        saveCharacterKlopp () {
        localStorage.setItem('character', 'klopp')
         localStorage.setItem('points', 82)
        }

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




