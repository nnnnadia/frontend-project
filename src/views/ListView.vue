<script setup>
import UserList from '../components/UserList.vue'
import SearchBar from '@/components/SearchBar.vue'

const searchQuery = defineModel('searchQuery')
</script>

<template>
  <main>
    <SearchBar v-model:search-query="searchQuery" />
    <UserList />
  </main>
</template>
