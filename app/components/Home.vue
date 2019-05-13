<template>
  <div class="big-header">
    <h1>{{ message }}</h1>
    <br />
    <router-link class="button" to="/character">Go to Page</router-link>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Bienvenue sur la page principal de ce jeu en construction'
    };
  }
};
</script>
