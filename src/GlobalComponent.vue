<template>
  <ul>
    <li v-for="character in characters">{{character}}
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      characters: ['Ryan', 'Joaquin', 'Alejandro']
    }
  }
}
</script>

<style>
</style>
