<template>
  <div class="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import './assets/styles/index';


.app {
  display: flex;

  main {
    flex: 1 1 0;
    padding: 1rem 1.75rem;

    @media (max-width: 1024px) {
      padding-left: 6rem;
    }
  }
}
</style>