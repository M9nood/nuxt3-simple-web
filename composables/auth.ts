import { defineStore } from 'pinia'
import { User } from './types/user'
// import { HttpResponse } from './types/http'

export const useAuthStore = defineStore('auth', {
  state: () => {
    return {
      user: {} as User
    }
  },
  getters: {
    userData: (state):User => {
      return state.user
    }
  },
  actions: {
    async login() {
      const { data } = await $fetch('/api/auth', {
        method: 'get'
      })
      this.user = data
      console.log('login data', this.user)
    }
  }
})
