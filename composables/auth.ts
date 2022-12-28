import { defineStore } from 'pinia'
import { User } from './types/user'

export const useAuthStore = defineStore('auth', {
  state: () => {
    return {
      user: { email: '', name: '' } as User
    }
  },
  getters: {
    userData: (state):User => {
      return state.user
    }
  },
  actions: {
    async login() {
      const res = await $fetch('/api/auth', {
        method: 'get'
      })
      this.user = res
      console.log('login data', this.user)
    }
  }
})
