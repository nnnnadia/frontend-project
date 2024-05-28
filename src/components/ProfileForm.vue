<script setup>
import { computed } from 'vue'
const props = defineProps({
  isNewUser: {
    type: Boolean,
    default: true
  }
})

const formTitle = computed(() => (props.isNewUser ? 'Cadastro' : 'Edição'))
</script>

<template>
  <form>
    <h1>{{ formTitle }}</h1>
  </form>
</template>
