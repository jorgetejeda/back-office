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
.material-icons {
    font-size: 1.5rem;
    margin-right: 0.5rem;

    &.icon {
        padding: 0.5rem;
    }
}
</style>
