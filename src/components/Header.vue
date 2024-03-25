<template>
  <header>
    <component :is="headerMap[variant]" :class="[color, variant]">{{ title }}</component>
  </header>
</template>

<script setup lang="ts">
// @types
import { Colors } from '@/types';

interface HeaderProps {
  title: string;
  variant: 'header' | 'title' | 'subtitle';
  color?: Colors
}

const { title, variant, color = '' } = defineProps<HeaderProps>();

const headerMap: Record<string, string> = {
  header: 'h1',
  title: 'h2',
  subtitle: 'h3',
};
</script>

<style lang="scss" scoped>
@import 'src/assets/styles/index';

h1,
h2,
h3 {
  line-height: 1.3;
}

h1.header {
  font-size: $text-header-size;
  color: $text-header-color;
  text-transform: uppercase;
  font-weight: $font-weight-bold;
}

h2.title {
  font-size: $text-title-size;
  color: $text-header-color;
  font-weight: $font-weight-bold;
}

h3.subtitle {
  font-size: $text-subtitle-size;
  color: $text-value-color;
  font-weight: $font-weight-light;
}
</style>
