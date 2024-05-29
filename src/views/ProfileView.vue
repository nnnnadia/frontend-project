<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { ProfileForm } from '@/components'

const route = useRoute()

const searchQuery = defineModel('searchQuery')

const props = defineProps({
  users: Array
})

const userId = computed(() => (route.params.id ? route.params.id : false))
const isNewUser = computed(() => !userId.value)
const user = computed(() =>
  isNewUser.value
    ? {
        id: null,
        name: searchQuery.value,
        birthDate: null,
        phone: {
          areaCode: null,
          number: null
        },
        address: ''
      }
    : props.users.find((user) => user.id == userId.value)
)
</script>

<template>
  <div class="about">
    <ProfileForm :is-new-user="isNewUser" :search-query="searchQuery" :user="user" />
  </div>
</template>
