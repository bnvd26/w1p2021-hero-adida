<template>
<transition name="begin" appear>
  <div class="big-header">
    <img @click="notAudio()" v-if="audio" src="../assets/images/sound.svg" style="width: 50px; position:absolute; left: 3.5%; top: 5%;" >
    <img @click="myAudio()" v-if="!audio" src="../assets/images/noSound.svg" style="width: 50px; position:absolute; left: 3.5%; top: 5%;">
    <h1 style="font-size: 100px; word-spacing: 50px;" >{{message}}</h1>
<div style="border: 1px solid white; margin:30px; padding:30px; width: 555px;line-height: 30px;">
  <h2>Bienvenue sur ULTIMATE MANAGEMENT 19'  </h2>
 <p>Votre but est de faire les meilleurs choix possibles afin de gagner le dernier match de la saison qui sera decisif. Durant cette partie et en fonction du coach choisis vous auriez un nombre qui represente votre reptutation et voter mentalite de groupe. Si jamais un des deux tombe en dessous de 40 vous aurez perdu et pas fait le travail ncessaire pour mener a bien votre equipe dans cette quete </p>
</div>
  
    <transition name="play" appear :duration="100000" >
    <router-link  class="button" to="/character" > {{button}} </router-link>
    </transition>
  </div>
  </transition>
</template>
<!-- NE PAS OUBLIER DE FAIRE LANIMATION DE DEBUT DE JEU-->
<script>

export default {
  data() {
    return {
      audio: false,
      message: 'ULTIMATE MATCH 19',
      button: 'CLICKER POUR JOUER'
    }
  },
  methods: {
    myAudio() {
     this.audio = true;
    },
    notAudio() {
      this.audio = false;
    }
  }
}


</script>



<style>

.begin-enter-active {
  animation: fadeIn 10s;
  
  
}

.begin-enter-to {
background: #000;
}




</style>
