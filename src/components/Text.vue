<template>
     <p v-if="variant === 'body'">{{ text }}</p>
    <small v-else :class="variant">{{ text }}</small>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
interface Text {
  text: string;
  variant: 'body' | 'small' | 'caption';
}

const { text, variant } = defineProps<Text>();

</script>

<style lang="scss">
p {
  font-size: var(--text-body-size);
  color: var(--text-info-color);
}

small.small {
  font-size: var(--text-small-size);
  color: var(--text-info-color);
}

small.caption {
  font-size: var(--text-caption-size);
  color: var(--text-info-color);
  font-weight: 300;
}
</style>
