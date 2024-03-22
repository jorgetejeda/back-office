<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped lang="scss">
*,
::before,
::after {
  box-sizing: inherit;
  background-repeat: no-repeat;
}

html {
  box-sizing: border-box;
}

html,
body {
  min-block-size: 100%;
}

.layout-page-content {
  flex-grow: 1;
  padding-block: 1.5rem;
}

.layout-footer {
  /* .footer-content-container {
    block-size: variables.$layout-vertical-nav-footer-height;
  } */

  .layout-footer-sticky & {
    position: sticky;
    inset-block-end: 0;
    will-change: transform;
  }

  .layout-footer-hidden & {
    display: none;
  }
}
</style>
