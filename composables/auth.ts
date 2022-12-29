import { defineStore } from 'pinia'
import { User } from './types/user'
// import { HttpResponse } from './types/http'

export const useAuthStore = defineStore('auth', {
  state: () => {
    return {
      isAuthorize: false,
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
      this.isAuthorize = true
      this.user = data
    },
    async refresh() {
      const { data } = await $fetch('/api/auth', {
        method: 'get'
      })
      this.isAuthorize = true
      this.user = data
    }
  }
})
