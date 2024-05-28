<script setup>
import UserListButtons from './UserListButtons.vue'

const props = defineProps({
  user: Object
})
</script>

<template>
  <tr>
    <th scope="row">{{ props.user.name }}</th>
    <td>{{ `(${props.user.phone.areaCode}) ${props.user.phone.number}` }}</td>
    <UserListButtons :userId="props.user.id" />
  </tr>
</template>
