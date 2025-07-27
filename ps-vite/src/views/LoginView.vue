<template>
  <LoginForm @success="onLoginSuccess" />
</template>

<script setup lang="ts">
import LoginForm from '@/components/LoginForm.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
function onLoginSuccess() {
  router.push('/home')
}
</script>
