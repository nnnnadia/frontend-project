<script setup>
import bin from '../assets/bin.png'
import profile from '../assets/profile.png'
const props = defineProps({
  userId: String
})
</script>

<template>
  <td>
    <RouterLink :to="`/user/${props.userId}`">
      <img :src="profile" height="32" width="32" />
    </RouterLink>
    <RouterLink :to="`/user/${props.userId}/delete`">
      <img :src="bin" height="32" width="32" />
    </RouterLink>
  </td>
</template>
