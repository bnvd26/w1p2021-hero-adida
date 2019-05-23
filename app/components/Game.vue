<template>
  <transition name="tiles" appear tag="div" class="test">
    <div class="big-header" :key="message" v-if="isActive">
     
      <div v-if="character === 'klopp'" class="entraineurs__information">
        <img :src= "characterKlopp.src" style="width: 50px; height: 50px;">
        <p>Reputation : {{points}}</p>
      </div>
      <div v-if="character === 'zidane'" class="entraineurs__information">
        <img :src= "characterZidane.src" style="width: 50px; height: 50px;">
        <p>Reputation : {{points}}</p>
      </div>
      <div v-if="character === 'kombouare'" class="entraineurs__information">
        <img :src= "characterKombouare.src" style="width: 50px; height: 50px;">
        <p>Reputation : {{points}}</p>
      </div>      
        <h1 style="font-size: 40px;">{{ level.question }}</h1>
      <div class="answers">
        <div  v-for="choice in choices" v-bind:key="choice.message" class="card">
          <div v-if="character === 'klopp'">
              <img v-bind:src = "choice.srcKlopp" :alt="choice.altSrc" style="width: 200px;" >
          </div>
          <div v-if="character === 'zidane'">
              <img v-bind:src = "choice.srcZidane" :alt="choice.altSrc" style="width: 200px;" >
          </div>
          <div v-if="character === 'kombouare'" >
              <img v-bind:src = "choice.srcKombouare" :alt="choice.altSrc" style="width: 200px;" >
          </div>
    <!--<audio autoplay loop>
        <source src="../assets/audio/easports.mp3" type="audio/mp3">
    </audio>-->
       <div v-if="ctaKombouare">
              <router-link  :to="choice.link" class="button"  v-on:click.native="decrementSave()" >  {{choice.messageCtaKombouare}}  </router-link>
        </div>
        <router-link  :to="choice.link" class="button"  v-on:click.native="decrementSave()" >  {{choice.message}}  </router-link>
      </div>
    </div>
  </transition>
</template>
<script>

import gameService from '../services/gameService';
import data from '../data.json';
export default {
  data() {
    return {
      character: null,
      points: null,
      isActive: true,
      ctaKombouare: false,
      step: this.getStep(),
      message: 'Everything is okay',
      level: data.game[this.$route.params.id],
      choices: data.game[this.$route.params.id].choices,
      characterKlopp: data.characters[0][1],
      characterZidane: data.characters[0][2],
      characterKombouare: data.characters[0][3],
    
    }
  },
  beforeCreate() {

  },

  mounted()  {
    setTimeout(() => {
    this.character = localStorage.getItem('character');
    this.points = localStorage.getItem('points')    
    this.getStep();
     this.firstStep();

    
    })      
  },

  methods : {
   
    incrementSave() {
      gameService.localStorageAddGet();
    },
    decrementSave() {
      gameService.localStorageRemoveGet();
    },
    getStep() {
      localStorage.setItem('step', this.$route.params.id)
      return this.$route.params.id

    },
    firstStep() {
      if(this.$route.params.id == 1 && this.character == 'kombouare') {
          this.ctaKombouare = true;
      } 
    }
 
  } 
}

</script>

 <style lang="scss" scoped>


.entraineurs__information {
    display: flex;
    align-items: center;
    position:  absolute;
    justify-content: space-around;
    top: 5%;
    right: 5%;
    width: 250px;
}


.answers {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
}

.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}


</style>




















