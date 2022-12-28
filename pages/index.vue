<template>
  <div>
    <h1>Indecsdcdx Page</h1>
    <p>counter : {{ counter.count }}</p>
    <p>
      <button @click="counter.increment">
        add
      </button>
      <button @click="counter.$reset">
        reset
      </button>
    </p>
    <hr>
    <h3>Option</h3>
    <p>option : {{ option.count }}</p>
    <p>
      <button @click="option.increment">
        add
      </button>
      <button @click="option.$reset">
        reset
      </button>
    </p>
  </div>
</template>

<script setup>
const counter = useCounterStore()
const option = useOptionStore()
useHead({
  title: 'Nuxt3 - Demo App'
})
console.log('Hello world!', counter.count)
</script>
