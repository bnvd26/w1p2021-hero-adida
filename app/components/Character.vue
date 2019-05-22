<template>
  <div class="big-header "  > 
     <!--:class="showModal ? 'opacity' : ' '-->
    <h1 >{{message}}</h1>

    <div style="display: flex; flex-direction: row; justify-content:space-around; width:100vw;">
   
           <transition-group name="fadeInLeftBig" appear>
          <div v-if="testy" :key="visible">
              <img :src="characterKombouare.src" class="hover hoverr" :alt="characterKombouare.altSrc" @click="showModalsTwo()" style="height: 220px;">

        </div>
          </transition-group>
             <transition-group name="fadeInUp" appear>
          <div v-if="testy" :key="visible">
              <img  :src="characterKlopp.src" class="hover hoverr" :alt="characterKlopp.altSrc" @click="showModalsOne()" style="height: 220px;">
        </div>
          </transition-group>
           <transition-group name="fadeInRightBig" appear>
          <div v-if="testy" :key="visible">
            <img :src="characterZidane.src" class="hover hoverr" :alt="characterZidane.altSrc" @click="showModalsThree()" style="height: 220px;">

        </div>
          </transition-group>
</div>
          
         
       
  
<transition name="modal">
  
  
  <div v-if="showModalOne" style="position: absolute;" id="modal-template" class="modal" >
      <img :src="characterKlopp.closeSvg" style="width: 40px; height:40px; cursor: pointer; position:absolute; right:10px; top:10px;" @click="showModalOne = false">
    <router-link class="button" to="game/1" @click.native="saveCharacterKlopp()"> {{characterKlopp.title}} </router-link>
  </div> 


   <div v-if="showModalTwo" style="position: absolute;" id="modal-template" class="modal" >
     <p>{{characterKombouare.description}}</p>
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
            testy: true,
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
        localStorage.setItem('points', 110) 
        }, 
        saveCharacterKombouare() {
        localStorage.setItem('character', 'kombouare');  
        localStorage.setItem('points', 87)
        },
        saveCharacterKlopp () {
        localStorage.setItem('character', 'klopp')
         localStorage.setItem('points', 102)
        }

  }
    }

</script>
<style>



.fade-enter, .fade-leave {
  transition: opacity .9s;
  color: red;

}


.fade-enter, .fade-leave-active {
  opacity: 0;
  transform: translateX(20px);
  color: red;
}



.fadeInUp-enter-active, .fadeInUp-enter {
animation: fadeInUpBig 1s;
}

.fadeInLeftBig-enter-active, .fadeInLeftBig-enter {
  animation: fadeInLeftBig 1s;
}

.fadeInRightBig-enter-active, .fadeInRightBig-enter {
  animation: fadeInRightBig 1s;
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




