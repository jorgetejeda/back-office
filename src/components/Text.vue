<template>
  <p v-if="variant === 'body'">{{ text }}</p>
  <small v-else :class="`${variant} ${customClass}`">{{ text }}</small>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
interface Text {
  text: string;
  variant: 'body' | 'small' | 'caption';
  customClass?: string;
}

const { text, variant, customClass } = defineProps<Text>();

</script>

<style lang="scss">
@import 'src/assets/styles/index';
$text-body-size: var(--text-body-size);
$text-small-size: var(--text-small-size);
$text-caption-size: var(--text-caption-size);
$text-info-color: var(--text-info-color);

p {
  font-size: $text-body-size;
  color: $text-info-color;
}

small.small {
  font-size: $text-small-size;
  color: $text-info-color;
}

small.caption {
  font-size: $text-caption-size;
  color: $text-info-color;
  font-weight: 300;
}
</style>
