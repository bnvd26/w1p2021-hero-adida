<template>
<transition name="rotate" appear>
  <div class="big-header "  > 
      <img @click="notAudio()" v-if="audio" src="../assets/images/sound.svg" style="width: 50px; position:absolute; left: 3.5%; top: 5%;" >
    <img @click="myAudio()" v-if="!audio" src="../assets/images/noSound.svg" style="width: 50px; position:absolute; left: 3.5%; top: 5%;">
    <h1 style="font-size: 40px; padding: 14px; border: 3px white solid; margin-top: 50px;">{{message}}</h1>
    <div style="display: flex; flex-direction: row; justify-content:space-around; width:100vw; margin:auto;">  
           <transition-group name="fadeInLeftBig" appear>
          <div v-if="transition" :key="visible" class="flex-center" @click="showModalsTwo()">
              <img :src="characterKombouare.src"  :alt="characterKombouare.altSrc"  style="height: 220px;">
              <p style="font-size: 30px;">{{characterKombouare.title}} 🇫🇷</p>
        </div>
          </transition-group>
             <transition-group name="fadeInUp" appear>
          <div v-if="transition" :key="visible" class="flex-center" @click="showModalsOne()">
              <img  :src="characterKlopp.src"  :alt="characterKlopp.altSrc"  style="height: 220px;">
                <p style="font-size: 30px;">{{characterKlopp.title}} 🇩🇪</p>
        </div>
          </transition-group>
           <transition-group name="fadeInRightBig" appear >
          <div v-if="transition" :key="visible" class="flex-center" @click="showModalsThree()">
            <img :src="characterZidane.src"  :alt="characterZidane.altSrc"  style="height: 220px;">
              <p style="font-size: 30px;">{{characterZidane.title}} 🇫🇷</p>
        </div>
          </transition-group>
</div>  
<transition name="modal">
  <div v-if="showModalOne" style="position: absolute;" id="modal-template" class="modal" >
      <img :src="characterKlopp.closeSvg" style="width: 40px; height:40px; cursor: pointer; position:absolute; right:10px; top:10px;" @click="showModalOne = false">
    <router-link class="button" to="game/1" @click.native="saveCharacterKlopp()"> {{characterKlopp.cta}} </router-link>
  </div> 
   <div v-if="showModalTwo" style="position: absolute;" id="modal-template" class="modal" >
     <p>{{characterKombouare.description}}</p>
      <img :src="characterKombouare.closeSvg" style="width: 40px; height:40px; cursor: pointer; position:absolute; right:10px; top:10px;" @click="showModalTwo = false">
    <router-link class="button" to="game/1" @click.native="saveCharacterKombouare()"> {{characterKombouare.cta}} </router-link>
  </div> 
   <div v-if="showModalThree" style="position: absolute;" id="modal-template" class="modal" >
      <img :src="characterZidane.closeSvg" style="width: 40px; height:40px; cursor: pointer; position:absolute; right:10px; top:10px;" @click="showModalThree = false">
    <router-link class="button" to="game/1" @click.native="saveCharacterZidane()"> {{characterZidane.cta}} </router-link>
  </div> 
</transition>
<transition>
</template>
<script>


import gameService from '../services/gameService';
import data from '../data.json';
    export default {
    data () {
        return {
            visible: true,
            audio: false,
            transition: true,
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
        myAudio() {
          this.audio = true;
        },
        notAudio() {
          this.audio = false;
        },
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
        localStorage.setItem('points', 110);
        localStorage.setItem('Mentalite', 75)
        }, 
        saveCharacterKombouare() {
        localStorage.setItem('character', 'kombouare');  
        localStorage.setItem('points', 87)
        localStorage.setItem('Mentalite', 62)
        },
        saveCharacterKlopp () {
        localStorage.setItem('character', 'klopp')
        localStorage.setItem('points', 102)
        localStorage.setItem('Mentalite', 83)
        }

  }
    }

</script>
<style <style lang="scss" scoped>


.rotate-enter-active {
  animation: rotateIn 1s;
}


.modal-leave-active {
  animation: fadeOut 1s;
}


@keyframes rotateIn {
  from {
    -webkit-transform-origin: center;
    transform-origin: center;
    -webkit-transform: rotate3d(0, 0, 1, -200deg);
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    -webkit-transform-origin: center;
    transform-origin: center;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

.fadeInUp-enter-active, .fadeInUp-enter {
animation: fadeInUpBig 1.3s;
}

.fadeInLeftBig-enter-active, .fadeInLeftBig-enter {
  animation: fadeInLeftBig 1.3s;
}

.fadeInRightBig-enter-active, .fadeInRightBig-enter {
  animation: fadeInRightBig 1.3s;
}

@keyframes fadeInUpBig {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 2000px, 0);
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes fadeInLeftBig {
  from {
    opacity: 0;
    -webkit-transform: translate3d(-2000px, 0, 0);
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes fadeInRightBig {
  from {
    opacity: 0;
    -webkit-transform: translate3d(2000px, 0, 0);
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}


</style>




