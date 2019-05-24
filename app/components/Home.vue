<template>
  <div class="big-header abs">
    <h1 style="font-size: 100px; word-spacing: 50px;" >{{message}}</h1>
<div style="border: 1px solid white; margin:30px; padding:30px; width: 555px;line-height: 30px;">
  <h2>Bienvenue sur ULTIMATE MANAGEMENT 19'  </h2>
 <p>Votre but est de faire les meilleurs choix possibles afin de gagner le dernier match de la saison qui sera decisif. Durant cette partie et en fonction du coach choisis vous auriez un nombre qui represente votre reptutation et voter mentalite de groupe. Si jamais un des deux tombe en dessous de 40 vous aurez perdu et pas fait le travail ncessaire pour mener a bien votre equipe dans cette quete </p>
</div>
    <video autoplay muted class="video" src="../assets/videos/trailer.mp4" type="video/mp4">
   </video>
  
    <transition name="play" appear :duration="100000" >
    <router-link  class="button" to="/character" > {{button}} </router-link>
    </transition>
  </div>

</template>

<script>

export default {
  data() {
    return {
      audio: false,
      message: 'ULTIMATE MATCH 19',
      button: 'CLICKER POUR JOUER'
    }
  }
}


</script>
<style>


.video {
  position: fixed;
  z-index: -1;
  bottom:0;
  right:0;
  width: 100%;
  height: 100vh;
}








</style>
