<template>
  <div class="big-header">
   <h1>{{message}}</h1>

    <router-link class="button" to="/home">Go to Home</router-link>
    <router-link class="button" @click.prevent="clearScore()" to="/character">PLAY AGAIN</router-link>

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