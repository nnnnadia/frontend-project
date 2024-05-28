<script setup>
import router from '@/router'
import { ref } from 'vue'

const searchInput = ref('')

function goToNewUserForm() {
  router.push({ path: '/user', query: { createUser: true } })
}
</script>

<template>
  <div class="search-bar">
    <input type="text" v-model="searchInput" />
    <button type="button" @click="goToNewUserForm">Novo Usuário</button>
  </div>
</template>
