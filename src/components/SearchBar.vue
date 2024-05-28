<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const router = useRouter()
const searchInput = ref('')

function goToNewUserForm() {
  router.push({ path: '/user', query: { createUser: searchInput.value } })
}
</script>

<template>
  <div class="search-bar">
    <input type="text" v-model="searchInput" />
    <button type="button" @click="goToNewUserForm">Novo Usuário</button>
  </div>
</template>
