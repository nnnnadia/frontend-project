<script setup>
import { ref, reactive } from 'vue'
import { RouterView } from 'vue-router'

const searchQuery = ref('')

const userList = reactive([
  {
    id: '1',
    name: 'Ana Abobrinha',
    birthDate: new Date('April 28, 1993'),
    phone: {
      areaCode: 27,
      number: 993489502
    },
    address: 'Rua dos Abobrinhas'
  },
  {
    id: '2',
    name: 'Bruno Banana',
    birthDate: new Date('August 6, 1985'),
    phone: {
      areaCode: 27,
      number: 999473948
    },
    address: 'Rua dos Bananas - Bananeiras, ES'
  }
])
</script>

<template>
  <div class="center">
    <RouterView v-model:searchQuery="searchQuery" :users="userList" />
  </div>
</template>

<style scoped>
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
