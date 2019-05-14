

<template>
<transition name="tiles" appear tag="div" class="test">
  <div class="big-header" :key="message" v-if="okay">
    
    <h1 style="font-size: 40px;">{{ level.question }}</h1>
    <br />
    <div class="answers">
    <div v-for="choice in choices" v-bind:key="choice.message">            
    <router-link  :to="choice.link" class="button"   >
                  {{choice.message}}
   
  
    </router-link>
     <img v-bind:src = "choice.src" :alt="choice.altSrc" style="width: 200px;" >
  </div>

</div>
  </div>
</transition>
</template>

<script>

import data from '../data.json';
export default {
  data() {
    return {
      okay: true,
      message: 'saloute',
      level: data[this.$route.params.id],
      choices: data[this.$route.params.id].choices
    }
  
 

  }
};

</script>


<style>

.tiles-enter-active {
  animation: fadeInS 1s;
  
}

.tiles-enter-to {
background: #000;
}



</style>










