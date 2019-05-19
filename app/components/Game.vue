<template>
<transition name="tiles" appear tag="div" class="test">
  <div class="big-header" :key="message" v-if="okay">
 
    <h1 style="font-size: 40px;">{{ level.question }}</h1>
    <br />
    <div class="answers">
    <div  v-for="choice in choices" 
          v-bind:key="choice.message"
          >   

                             <p>{{points}}</p>
                                 
    <router-link  :to="choice.link" class="button"  v-on:click.native="incrementPoints()" >
                  {{choice.message}}  
 
    </router-link>


     <img v-bind:src = "choice.src" :alt="choice.altSrc" style="width: 200px;" >

  </div>

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

      points : gameService.value(),
      localStorageSet : gameService.localStorageSet(),
  
      okay: true,
      message: 'saloute',
      level: data.game[this.$route.params.id],
      choices: data.game[this.$route.params.id].choices
    }
  },

 mounted() {
    this.localStorageSet;
  },

  methods : {
    saveScore() {
      
    },
   
    

    incrementPoints() {

      gameService.increment();
      gameService.savePoints();

       
    }
  }
}



</script>

















