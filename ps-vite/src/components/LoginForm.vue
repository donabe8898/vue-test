<template>
  <el-form @submit.prevent="handleLogin" :model="form">
    <el-form-item label="ID">
      <el-input v-model="form.id" />
    </el-form-item>
    <el-form-item label="Password">
      <el-input type="password" v-model="form.password" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="handleLogin">Login</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { login } from '@/composables/useAuth'

const emit = defineEmits(['success'])

const form = reactive({
  id: '',
  password: '',
})

async function handleLogin() {
  const success = await login(form.id, form.password)
  if (success) {
    emit('success')
  } else {
    alert('IDまたはパスワードが間違っています')
  }
}
</script>
