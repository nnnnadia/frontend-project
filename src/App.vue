<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="center">
    <RouterView />
  </div>
</template>

<style scoped>
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
