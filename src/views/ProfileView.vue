<script setup>
const searchQuery = defineModel('searchQuery')
</script>

<template>
  <div class="about">
    <input type="text" v-model="searchQuery" />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
