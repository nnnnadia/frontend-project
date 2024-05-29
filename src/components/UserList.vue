<script setup>
import { UserRow } from '@/components'

const props = defineProps({
  users: Array
})
</script>
<template>
  <section class="user-table-section">
    <h2>Usuários</h2>
    <table class="user-table">
      <thead>
        <tr>
          <th scope="col">Nome</th>
          <th scope="col">Telefone</th>
          <th scope="col" class="center">Ações</th>
        </tr>
      </thead>
      <tbody>
        <UserRow v-for="user in props.users" :key="user.id" :user="user" />
      </tbody>
    </table>
  </section>
</template>

<style>
.user-table-section {
  display: flex;
  flex-direction: column;
  gap: 1em;
}

.user-table {
  min-width: 1280px;
  border-collapse: collapse;
  border: 2px solid rgb(140 140 140);
}

.user-table th,
.user-table td {
  border: 1px solid rgb(160 160 160);
  padding: 0.5em 0.2em;
}

.user-table th {
  text-align: left;
}

.user-table thead th:last-of-type {
  text-align: center;
}

.user-table tbody td:last-of-type {
  text-align: center;
}
</style>
