<template>
<div>
  <h2>{{title}}</h2>
  {{greeting()}}

  <globalComponent></globalComponent>
  <localComponent></localComponent>
</div>
</template>

<script>
import LocalComponent from './LocalComponent.vue'

export default {
  components: {
    localComponent : LocalComponent
  },
  data() {
    return {
      title: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    greeting: function() {
      return "Hello World"
    }
  }
}
</script>

<style>
</style>
