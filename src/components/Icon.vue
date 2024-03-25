<template>
    <span :class="['icons material-icons', size]">{{ icon }}</span>
</template>

<script setup lang="ts">

interface IconProps {
    icon: string;
    size?: 'small' | 'medium' | 'large';
}

const { icon, size = 'small' } = defineProps<IconProps>();

</script>

<style lang="scss">
$text-color: var(--text-color);

.material-icons {
    color: $text-color;
    transition: 0.2s ease-out;

    &.small {
        font-size: 1rem;
    }

    &.medium {
        font-size: 1.5rem;
    }

    &.large {
        font-size: 2rem;
    }

    &.icon {
        padding: 0.5rem;
    }
}
</style>
