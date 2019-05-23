<template>
  <div class="big-header">
     <img @click="notAudio()" v-if="audio" src="../assets/images/sound.svg" style="width: 50px; position:absolute; left: 3.5%; top: 5%;" >
    <img @click="myAudio()" v-if="!audio" src="../assets/images/noSound.svg" style="width: 50px; position:absolute; left: 3.5%; top: 5%;">
   <h1>{{message}}</h1>
   <p>Malheursement l'aventure s'arrete ici avec {{perso}}</p>
   <div v-if="perso == 'kombouare'">
     <p>Votre equipe est releguee en deuxieme divison vous avez certainement pas fait les bons choix</p>
   </div>
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
        perso: localStorage.getItem('character'),
        message : "VOUS AVEZ PERDU !!!!!!!!"

      }
    },

  beforeCreate() {
  
  localStorage.removeItem('step');
    
},

    
};
</script>