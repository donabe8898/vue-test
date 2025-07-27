import axios from 'axios'
import { errorMessages } from 'vue/compiler-sfc'

export async function login(id: string, password: string): Promise<boolean> {
  try {
    const res = await axios.post('/api/login', { id, password })
    localStorage.setItem('token', res.data.token)
    return true
  } catch {
    console.log(errorMessages)
    return false
  }
}

export function logout() {
  localStorage.removeItem('token')
}

export function isLoggedIn(): boolean {
  return !!localStorage.getItem('token')
}
