<template>
    <div class="sheet">
        <h1>{{ title }}</h1>
        <p>{{ subtitle }}</p>

        <slot></slot>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const { title, subtitle } = defineProps({
    title: String,
    subtitle: String,
});

</script>

<style lang="scss">
.sheet {
    padding: 1rem;
    border-radius: 0.5rem;
    background-color: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
}

p {
    font-size: 1rem;
    color: var(--grey);
}
</style>