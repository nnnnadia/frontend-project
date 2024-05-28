<script setup>
import { ref } from 'vue'
import { RouterView } from 'vue-router'

const searchQuery = ref('')
</script>

<template>
  <div class="center">
    <RouterView v-model:searchQuery="searchQuery" />
  </div>
</template>

<style scoped>
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
