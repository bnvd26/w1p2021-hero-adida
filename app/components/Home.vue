<template>
<transition name="begin" appear >
  <div class="big-header">
    <h1 style="font-size: 100px; word-spacing: 50px;" >{{message}}</h1>

    <br />
    <transition name="play" appear :duration="100000" >
    <router-link  class="button" to="/character" > {{rules}} </router-link>
    </transition>
  </div>
  </transition>
</template>
<!-- NE PAS OUBLIER DE FAIRE LANIMATION DE DEBUT DE JEU-->
<script>

export default {
  data() {
    return {
      message: 'ULTIMATE CAREER 19',
      rules: 'CLICKER POUR JOUER'

    }
  }
}


</script>



<style>

.begin-enter-active {
  animation: fadeIn 4s;
  
  
}

.begin-enter-to {
background: #000;
}




</style>
