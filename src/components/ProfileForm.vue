<script setup>
import { reactive } from 'vue'
const props = defineProps({
  title: String,
  user: Object
})

const userInput = reactive({ ...props.user })
</script>

<template>
  <form>
    <h1>{{ title }}</h1>
    <input v-model="userInput.name" />
  </form>
</template>
