import { http, HttpResponse } from 'msw'

interface LoginRequest {
  id: string
  password: string
}

export const handlers = [
  http.post('/api/login', async ({ request }) => {
    const body = (await request.json()) as LoginRequest

    const { id, password } = body
    if (id === 'admin' && password === 'password') {
      return HttpResponse.json({ token: 'mock-token-abc123' }, { status: 200 })
    } else {
      return HttpResponse.json({ error: '認証失敗' }, { status: 401 })
    }
  }),
]
