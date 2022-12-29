<template>
  <div>
    <p>Can't Access</p>
    <button @click="login">
      Login
    </button>
    <hr>
  </div>
</template>

<script setup>
const auth = useAuthStore()
const router = useRouter()

async function login() {
  await auth.login()
  router.push({ path: '/' })
}
</script>
