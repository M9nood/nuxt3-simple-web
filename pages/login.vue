<template>
  <div>
    <p>Can't Access</p>
    <button @click="auth.login">
      Login
    </button>
    <hr>
    <pre>{{ auth.userData }}</pre>
  </div>
</template>

<script setup>
const auth = useAuthStore()
</script>
