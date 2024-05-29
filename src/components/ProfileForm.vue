<script setup>
import { computed, reactive } from 'vue'
const props = defineProps({
  isNewUser: {
    type: Boolean,
    default: true
  },
  searchQuery: {
    type: String,
    default: ''
  },
  user: {
    type: Object
  }
})

const formTitle = computed(() => (props.isNewUser ? 'Cadastro' : 'Edição'))

const userInput = reactive({ ...props.user })
</script>

<template>
  <form>
    <h1>{{ formTitle }}</h1>
    <input v-model="userInput.name" />
  </form>
</template>
