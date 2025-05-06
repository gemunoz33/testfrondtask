<script setup>
import Navbar from './components/Navbar.vue'
</script>

<template>
  <header class="container-fluid">    
      <Navbar />    
  </header>
  <div class="container-fluid mt-4">
    <router-view />
  </div>
</template>

<style scoped>
</style>
