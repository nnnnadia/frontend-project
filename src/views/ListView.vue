<script setup>
import UserList from '../components/UserList.vue'
import SearchBar from '@/components/SearchBar.vue'

const searchQuery = defineModel('searchQuery')

const props = defineProps({
  users: Array
})
</script>

<template>
  <main>
    <SearchBar v-model:search-query="searchQuery" />
    <UserList :users="props.users" />
  </main>
</template>
