<template>
  <div class="big-header">
   <h1>{{message}}</h1>
    <br />
    <router-link class="button" to="/home">Go to Home</router-link>
    <router-link class="button" to="/character" @click.native="clearScore()">PLAY AGAIN</router-link>

  </div>
</template>

<script>
import gameService from '../services/gameService'
export default {
    data() {
      return {
        points: gameService.value(),
    clearPoints: gameService.clearLocalStorage(),
        message : "LOSE",

      }
    },

      methods : {
     clearScore () {
       localStorage.clear('points');
     }
      }


      

};
</script>