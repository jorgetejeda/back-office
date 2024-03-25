<template>
    <div class="sheet border rounded w-100" :style="{
        'max-width': maxWidth ? maxWidth + 'px' : '100%',
    }">
        <Header v-if="title" variant="title" :title="title" />
        <Header v-if="subtitle" variant="subtitle" :title="subtitle" />
        <div v-if="title || subtitle" class="border bottom"></div>
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
// @components
import Header from '@/components/Header.vue';

const { title, subtitle } = defineProps({
    title: String,
    subtitle: String,
    maxWidth: String
});

</script>

<style lang="scss">
@import 'src/assets/styles/index';

.sheet {
    /* margin: 1rem 0rem; */
    display: block;
    overflow: hidden;
    overflow-wrap: break-word;
    padding: 1.5rem;
    background: $white;
    color: $text-color;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);

    &.full {
        max-width: 100%;
    }

    &.medium {
        max-width: 576px;
    }
}
</style>