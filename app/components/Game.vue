

<template>
  <div class="big-header" >
    <h1 style="font-size: 40px;">{{ level.question }}</h1>
    <br />
    <div class="answers">
    <div >
                  
    <router-link v-for="choice in choices" :to="choice.link" class="button"   v-bind:key="choice.message" >
                  {{choice.message}}
   
   <img v-bind:src = "choice.src" :alt="choice.altSrc" style="width: 200px;" >
    </router-link>
  </div>

</div>
  </div>
</template>

<script>

import data from '../data.json';
export default {
  data() {
    return {
      level: data[this.$route.params.id],
      choices: data[this.$route.params.id].choices
    }
  
 

  }
};










</script>