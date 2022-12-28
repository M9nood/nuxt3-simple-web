import { defineStore } from 'pinia'
import { Option } from './types/option'

export const useOptionStore = defineStore('option', {
  state: (): Option => ({ count: 0 }),
  getters: {
    doubleCount: (state): number => state.count * 2
  },
  actions: {
    increment() {
      this.count++
    }
  }
})
