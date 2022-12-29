export default defineNuxtPlugin(async():Promise<void> => {
  const { user, refresh } = await useAuthStore()
  await refresh()
  console.log('plugin do user', user)
  console.log('plugin do', process.env.TEXT_VAL)
})
