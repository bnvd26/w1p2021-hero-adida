<template>
  <div class="big-header">
    <h1 style="font-size: 100px; word-spacing: 50px;" >{{message}}</h1>
    <br />
    <transition name="play" appear :duration="100000" >
    <router-link  class="button" to="/character" > {{rules}} </router-link>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'ULTIMATE CAREER 19',
      rules: 'CLICKER POUR JOUER'
    
    }
  },

  
};
</script>
