<script setup>
import { reactive } from 'vue'
import { UserRow } from '@/components'

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
      <UserRow v-for="user in userList" :key="user.id" :user="user" />
    </tbody>
  </table>
</template>

<style>
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
