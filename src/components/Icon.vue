<template>
    <span class="icons material-icons">{{ icon }}</span>
</template>

<script setup lang="ts">

interface IconProps {
    icon: string;
}

const { icon } = defineProps<IconProps>();

</script>

<style lang="scss">
$text-color: var(--text-color);

.material-icons {
    color: $text-color;
    transition: 0.2s ease-out;

    &.icon {
        padding: 0.5rem;
    }
}
</style>
