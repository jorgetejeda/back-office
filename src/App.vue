<template>
  <div class="app">
    <Sidebar :is_expanded="is_expanded" />
    <main>
      <Navbar @toogleSidebar="handleSidebar" />
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Navbar from '@/components/Navbar.vue';
import Sidebar from '@/components/Sidebar.vue'

const is_expanded = ref(false);

const handleSidebar = (isExpanded: boolean) => {
  is_expanded.value = isExpanded;
};

</script>

<style lang="scss">
:root {
  // Common
  --white: #fff;
  --black: #000; 
  --surface: #EDF3F8;

  --body-color: #F5F5F5;

  // Primary Colors
  --primary-color: #002D72;
  --primary-color-dark: #001F4C;
  --primary-color-light: #004D8E;

  // Indicators colors
  --success-color: #41c19f;
  --warning-color: #ffc559;
  --danger-color: #ef2b49;

  // Border Colors
  --border-color: #c4cdd5;
  --border-disabled-color: #d8e1e9;
  
  // Text Colors
  --text-color: #282828;
  --text-header-color: #0b1941;
  --text-info-color: #53565A;
  --text-value-color: #727272;

  // Text Disabled
  --text-disabled-color: #e5e6e7;
  --text-value-disabled-color: #c3c5c6;

  // Font Family
  --font-family: 'Lato', sans-serif;

  // Text Header Size
  --text-header-size: 26pt;
  --text-title-size: 24pt;
  --text-subtitle-size: 18pt;
 
  // Text Body Size
  --text-body-size: 1rem;
  --text-small-size: 0.875rem;
  --text-caption-size: 0.75rem;

  // sidebar
  --sidebar-width: 300px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: var(--body-color);
  font-family: var(--font-family);
}

.uppercase {
  text-transform: uppercase;
}

.bold {
  font-weight: 700;
}

.flex-grow {
  flex-grow: 1;
}

div.border {
  border: 1px solid var(--border-color);
}

button {
  cursor: pointer;
  appearance: none;
  border: none;
  outline: none;
  background: none;
}

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