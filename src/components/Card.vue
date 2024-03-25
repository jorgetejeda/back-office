<template>
    <div class="card-contaner d-flex gap-8 my-2">
        <div v-for="item in items" :key="item.title"
            :class="['card flex-1 pa-1 text-center rounded', concatClassName(item.color)]">
            <Icon :icon="item.icon" size="large"/>
            <Header :title="formatAmount(item.value)" variant="title" :color="item.color" customClass="bold-regular" />
            <Header :title="item.title" variant="subtitle" :color="item.color" customClass="bold-regular" />
        </div>
    </div>
</template>

<script setup lang="ts">
// @types
import { Colors } from '@/types';

// @components
import Header from '@/components/Header.vue';
import Icon from '@/components/Icon.vue';

//@utilities
import { formatAmount } from '@/utilities/format-amount.ts';

interface Card {
    items: {
        color: Colors;
        title: string;
        icon: string;
        value: number;
    }[]
}

const { items } = defineProps<Card>();

const concatClassName = (color: string) => {
    return `fade-${color}`
}

</script>

<style scope lang="scss">
@import 'src/assets/styles/index';
</style>
