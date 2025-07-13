<template>
  <div id="app">
    <Navigation />
    <router-view />
  </div>
</template>

<script>
import Navigation from '@/shared/ui/Navigation.vue';

export default {
  name: 'App',
  components: {
    Navigation,
  },
};
</script>

<style scoped>
#app {
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}
</style>
