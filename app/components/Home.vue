<template>
<transition name="begin" appear>
  <div class="big-header">
    <h1 style="font-size: 100px; word-spacing: 50px;" >{{message}}</h1>
<div style="border: 1px solid white; margin:30px; padding:30px">
  <h2>Bienvenue sur ULTIMATE MANAGEMENT 19'  </h2>
 <p>Votre but est de faire les meilleurs choix possibles afin de gagner le dernier match de la saison qui sera decisif. </p>
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
      message: 'ULTIMATE MATCH 19',
      button: 'CLICKER POUR JOUER'
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
