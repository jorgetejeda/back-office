<template>
    <div class="card-contaner d-flex gap-8">
        <div v-for="item in items" :key="item.title" :class="['card flex-1 pa-1 text-center', item.color]">
            <Header :title="item.title" variant="subtitle" :color="item.color" />
            <Icon :icon="item.icon" />
        </div>
    </div>
</template>

<script setup lang="ts">

// @types
import { Colors } from '@/types';
// @components
import Header from '@/components/Header.vue';

interface Card {
    items: {
        color: Colors;
        title: string;
        icon: string;
    }[]
}

const { items } = defineProps<Card>();
</script>

<style scope lang="scss">
@import 'src/assets/styles/index';
</style>
