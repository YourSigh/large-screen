<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="container">
    <RouterView />
  </div>
</template>

<style scoped>
  .container {
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url('@/assets/layout/container_bg.png');
    background-size: 100% 100%;
  }
</style>
