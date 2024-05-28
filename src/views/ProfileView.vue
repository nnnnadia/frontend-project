<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { ProfileForm } from '@/components'

const route = useRoute()

const isNewUser = computed(() => !route.params.id)
</script>

<template>
  <div class="about">
    <ProfileForm :is-new-user="isNewUser" />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
