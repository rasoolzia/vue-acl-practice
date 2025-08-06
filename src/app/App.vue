<template>
  <div id="app">
    <Navigation />
    <router-view />
  </div>
</template>

<script setup>
import Navigation from '@/shared/ui/Navigation.vue';
</script>

<style scoped>
#app {
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}
</style>
