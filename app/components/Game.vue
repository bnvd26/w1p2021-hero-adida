

<template>
  <div class="big-header" >
    <h1 style="font-size: 40px;">{{ level.question }}</h1>
    <br />
    <div class="answers">
    <div v-for="choice in choices" v-bind:key="choice.message">
                  <img v-bind:src = "choice.src" :alt="choice.altSrc" style="width: 200px;" >
    <router-link :to="choice.link" class="button"  >
                  {{choice.message}}
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
      level: data.game[this.$route.params.id],
      choices: data.game[this.$route.params.id].choices
    }
  }
};










</script>