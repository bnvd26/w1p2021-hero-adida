<template>
  <div class="big-header">
     <img @click="notAudio()" v-if="audio" src="../assets/images/sound.svg" style="width: 50px; position:absolute; left: 3.5%; top: 5%;" >
    <img @click="myAudio()" v-if="!audio" src="../assets/images/noSound.svg" style="width: 50px; position:absolute; left: 3.5%; top: 5%;">
    <h1>{{message}}</h1>
    <br />
    <router-link class="button" to="/home">Go to Home</router-link>
  </div>
</template>

<script>
export default {
    data() {
      return {
        message : "WIN",
        audio: false,
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
};
</script>