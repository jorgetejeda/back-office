<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <button class="primary">Hola mundo</button>
  </main>
</template>

<style scoped lang="scss">
button.primary {
  background-color: red;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  transition: background-color 0.3s;

  &:hover {
    background-color: darkred;
  }

  &:active {
    background-color: red;
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    background-color: lightgray;
    color: gray;
    cursor: not-allowed;
  }
}
</style>
