<template>
  <div>
    <h1>Indecsdcdx Page</h1>
    <p>counter : {{ counter.count }}</p>
    <p>
      <button @click="counter.increment">add</button>
    </p>
  </div>
</template>

<script setup>
const counter = useCounter()
useHead({
  title: 'Nuxt3 - Demo App'
})
console.log('Hello world!', counter.count)
</script>
