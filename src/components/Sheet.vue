<template>
    <div class="sheet border">
        <Header v-if="title" variant="title" :title="title"/>
        <Header v-if="subtitle" variant="subtitle" :title="subtitle"/>
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

// @components
import Header from '@/components/Header.vue';

const { title, subtitle } = defineProps({
    title: String,
    subtitle: String,
});

</script>

<style lang="scss">
.sheet {
    margin: 1rem 0rem;
    padding: 1rem;
    border-radius: 0.5rem;
    background-color: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

</style>