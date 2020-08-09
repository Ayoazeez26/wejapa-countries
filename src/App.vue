<template>
  <div id="app">
    <Check />
  </div>
</template>

<script>
import Check from './components/Check.vue'

export default {
  name: 'App',
  components: {
    Check
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
