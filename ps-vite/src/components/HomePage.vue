<template>
  <div>
    <h2>Home</h2>
    <el-button @click="handleLogout">ログアウト</el-button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { logout } from '@/composables/useAuth'

const router = useRouter()

function handleLogout() {
  logout()
  router.push('/login')
}
</script>
