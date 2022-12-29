export default defineNuxtRouteMiddleware((to) => {
  const auth = useAuthStore()
  if (auth.isAuthorize) {
    if (to.path === '/login') { return navigateTo('/') }
  } else if (to.path !== '/login') { return navigateTo('/login') }
})
