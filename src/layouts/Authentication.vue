<template>
    <main class="authentication">
        <Sheet maxWidth="564">
            <Header v-if="title" variant="title" :title="title" />
            <Header v-if="subtitle" variant="subtitle" :title="subtitle" />
            <div class="my-1">
                <slot />
            </div>
        </Sheet>
    </main>
</template>

<script setup lang="ts">
// @components
import Header from '@/components/Header.vue';
import Sheet from '@/components/Sheet.vue';

interface Authentication {
    title: string;
    subtitle: string;
}

const { title, subtitle } = defineProps<Authentication>();

</script>

<style lang="scss">
.authentication {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: var(--background-color);
}
</style>
