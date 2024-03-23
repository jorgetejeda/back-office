<template>
    <header>
      <component :is="headerMap[variant]">{{ title }}</component>
    </header>
  </template>
  
  <script setup lang="ts">
  import { defineProps } from 'vue';
  
  interface HeaderProps {
      title: string;
      variant: 'header' | 'title' | 'subtitle';
  }
  
  const { title, variant } = defineProps<HeaderProps>();
  
  const headerMap: Record<string, string> = {
    header: 'h1',
    title: 'h2',
    subtitle: 'h3',
  };
  </script>

<style lang="scss">
h1 {
    margin-bottom: 0px !important;
}

h1.header {
    font-size: var(--text-header-size);
    color: var(--header-color);
    font-weight: 700;
    text-transform: uppercase;
}

h2.title {
    font-size: var(--text-title-size);
    color: var(--text-value-color);
    font-weight: 700;
    text-transform: uppercase;
}

h3.subtitle {
    font-size: var(--text-subtitle-size);
    color: var(--text-value-color);
    font-weight: 700;
}
</style>
