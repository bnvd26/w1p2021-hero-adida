<template>
<transition name="tiles" appear tag="div" class="test">
  <div class="big-header" :key="message" v-if="okay">
   <p>{{points}}</p>
    <h1 style="font-size: 40px;">{{ level.question }}</h1>
    <br />
    <div class="answers">
    <div  v-for="choice in choices" 
          v-bind:key="choice.message"
          >>            
    <router-link  :to="choice.link" class="button"   >
                  {{choice.message}}  
    </router-link>

     <img v-bind:src = "choice.src" :alt="choice.altSrc" style="width: 200px;" >
     <button @click="(points += 20, savePoints() )">Increment</button>
  </div>

</div>
  </div>
</transition>
</template>
<script>

import countService from '../services/countService';
import data from '../data.json';
export default {
  data() {
    return {
      points : countService.value(),
      okay: true,
      message: 'saloute',
      level: data.game[this.$route.params.id],
      choices: data.game[this.$route.params.id].choices
    }
  },

  mounted() {
    if (localStorage.getItem('points')) {
      try {
        this.points = JSON.parse(localStorage.getItem('points'));
      } catch(e) {
        localStorage.removeItem('points');
      }
    }
  },

  methods : {
     savePoints() {
      const parsed = JSON.stringify(this.points);
      localStorage.setItem('points', parsed);     
    }
  }
}

</script>


<style>

.tiles-enter-active {
  animation: fadeInS 1s;
  
}

.tiles-enter-to {
background: #000;
}



</style>










