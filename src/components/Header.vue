<template>
  <header>
    <component :is="headerMap[variant]" :class="[variant, concatClassName(color), customClass]">{{ title }}</component>
  </header>
</template>

<script setup lang="ts">
// @types
import { Colors } from '@/types';

interface HeaderProps {
  title: string;
  variant: 'header' | 'title' | 'subtitle';
  color?: Colors;
  customClass?: string;
}

const { title, variant, color = '', customClass } = defineProps<HeaderProps>();

const headerMap: Record<string, string> = {
  header: 'h1',
  title: 'h2',
  subtitle: 'h3',
};

const concatClassName = (color: string) => {
  return `font-${color}`;
}
</script>
