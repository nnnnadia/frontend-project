<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const searchQuery = defineModel('searchQuery')

function goToNewUserForm() {
  router.push({ path: '/user' })
}
</script>

<template>
  <div class="search-bar">
    <input class="search-bar-input" type="text" v-model="searchQuery" />
    <button type="button" @click="goToNewUserForm">Novo Usuário</button>
  </div>
</template>

<style scoped>
.search-bar {
  display: flex;
  justify-content: stretch;
  gap: 1em;
}

.search-bar input {
  flex-grow: 4;
  font-size: 1.5em;
  padding: 0.5em 2em;
}

.search-bar button {
  flex-grow: 1;
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;
}
</style>
