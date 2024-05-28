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
    <input type="text" v-model="searchQuery" />
    <button type="button" @click="goToNewUserForm">Novo Usuário</button>
  </div>
</template>
