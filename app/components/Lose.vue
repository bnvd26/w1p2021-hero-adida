<template>
  <div class="big-header">
   <h1>{{message}}</h1>
    <br />
    <router-link class="button" to="/home">Go to Home</router-link>
    <a class="button" @click.prevent="clearScore()">PLAY AGAIN</a>

  </div>
</template>

<script>
import gameService from '../services/gameService'
export default {
    data() {
      return {
        points: gameService.value(),
        message : "VOUS AVEZ PERDU !!!!!!!!",

      }
    },

  mounted() {
    localStorage.clear();
    
}
    
};
</script>