<template>
<transition name="begin" appear >
  <div class="big-header">
    <h1 style="font-size: 100px; word-spacing: 50px;" >{{message}}</h1>
<div style="border: 1px solid white; margin:30px; padding:30px">
  <p>{{rules}}</p>
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
      button: 'CLICKER POUR JOUER',
      rules: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque illum illo perspiciatis! Similique eius accusamus adipisci vero totam? Accusamus, sint fuga. Quaerat dicta dolorem tempore cum? Veniam molestias officiis neque'

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
