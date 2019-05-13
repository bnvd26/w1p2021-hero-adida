<template>
  <div class="big-header">
    <h1 style="font-size: 100px; word-spacing: 50px;">{{message}}</h1>
    <br />
    <router-link class="button" to="/character">Go to Page</router-link>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'ULTIMATE CAREER 19'
    };
  }
};
</script>
