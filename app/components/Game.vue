<template>
<transition name="tiles" appear tag="div" class="test">
  <div class="big-header" :key="message" v-if="isActive">
  <div v-if="character === 'klopp'" class="entraineurs__information">
 <img :src= "characterKlopp.src" style="width: 30px; height: 30px;">
 <p>Reputation : {{points}}</p>
  </div>
    <div v-if="character === 'zidane'" class="entraineurs__information">
 <img :src= "characterZidane.src" style="width: 30px; height: 30px;">
 <p>Reputation : {{points}}</p>
  </div>
    <div v-if="character === 'kombouare'" class="entraineurs__information">
 <img :src= "characterKombouare.src" style="width: 30px; height: 30px;">
 <p>Reputation : {{points}}</p>
  </div>
       
    <h1 style="font-size: 40px;">{{ level.question }}</h1>
    <br />
    <div class="answers">
    <div  v-for="choice in choices" 
          v-bind:key="choice.message"
    >   
<div v-if="character === 'klopp'">
     <img v-bind:src = "choice.srcKlopp" :alt="choice.altSrc" style="width: 200px;" >
</div>
<div v-if="character === 'zidane'">
     <img v-bind:src = "choice.srcZidane" :alt="choice.altSrc" style="width: 200px;" >
</div>
<div v-if="character === 'kombouare'">
     <img v-bind:src = "choice.srcKombouare" :alt="choice.altSrc" style="width: 200px;" >
</div>
<!--<audio autoplay loop>
    <source src="../assets/audio/easports.mp3" type="audio/mp3">
</audio>-->

                                 
    <router-link  :to="choice.link" class="button"  v-on:click.native="incrementeur()" >
                  {{choice.message}}  
 
    </router-link>


  </div>

</div>
  </div>
</transition>
</template>
<script>
  
import characterService from '../services/characterService'
import gameService from '../services/gameService';
import data from '../data.json';
export default {
  data() {
    return {
      character: null,
    
      points: null,
      isActive: true,
      message: 'Everything is okay',
      level: data.game[this.$route.params.id],
      choices: data.game[this.$route.params.id].choices,
      characterKlopp: data.characters[0][1],
      characterZidane: data.characters[0][2],
      characterKombouare: data.characters[0][3],
    
    }
  },

  mounted()  {
    setTimeout(() => {
    this.character = localStorage.getItem('character');
     this.points = localStorage.getItem('points')
 

    })
  
      
  }, 
  methods : {
     
  } 
}

   
  

    

  
        
  
  


  /*CREATION IMPERATIVE DUN SERVICE POUR AFFICHER LES IMAGES CORRESPONDATES AUX QUESTIONS*/ 





 /*mounted() {
    this.localStorageSet;
  },*/





    /*
    saveScore() {
      
    },
    incrementPoints() {
      gameService.increment();
      gameService.savePoints();       
    }*/
 






</script>


<style>


.entraineurs__information {

    display: flex;
    align-items: center;
    position:  absolute;
    justify-content: space-around;
    top: 5%;
    right: 5%;
    width: 250px;
}

</style>














