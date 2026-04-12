// useApi.js
// Returns an axios instance pre-configured with:
//   - base URL from env
//   - Firebase ID token in Authorization header (auto-refreshed)
// Why axios over fetch? Interceptors make token injection clean and DRY.

import axios from 'axios'
import { auth } from '../firebase'
const BASE_URL = 'https://kp-dev-cell-production.up.railway.app/api'

export function useApi() {
  const instance = axios.create({ baseURL: BASE_URL })

  // Request interceptor: attach fresh token before every call
  instance.interceptors.request.use(async (config) => {
    const currentUser = auth.currentUser
    if (currentUser) {
      // getIdToken(true) forces refresh if token is stale
      const token = await currentUser.getIdToken()
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  })

  return instance
}
