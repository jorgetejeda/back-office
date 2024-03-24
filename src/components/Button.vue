<template>
    <button :type="type" class="btn rounded" :class="variant" :disabled="disabled || loading" @click="onClick">
        <Icon v-if="variant === 'icon' && icon" :icon="icon" />
        <template v-if="text">{{ text }}</template>
    </button>
</template>
<script setup lang="ts">
import Icon from '@/components/Icon.vue';

interface ButtonProps {
    text?: string;
    disabled?: boolean;
    onClick?: () => void;
    loading?: boolean;
    variant: 'outlined' | 'primary' | 'text' | 'icon';
    icon?: string;
    type?: 'button' | 'submit' | 'reset';
}

const { text, disabled = false, onClick, loading = false, variant = "primary", type = "button" } = defineProps<ButtonProps>();
</script>

<style lang="scss" scoped>
@import 'src/assets/styles/index';

.btn {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    font-family: $font-family;
    font-weight: 400;
    height: 44px;
    letter-spacing: 1.5px;

    &.outlined {
        border: 1px solid $primary-color;
        color: $primary-color;

        &:hover {
            background-color: $primary-color-dark;
            border-color: $primary-color-dark;
            color: $white;
        }
    }

    &.primary {
        background-color: $primary-color;
        color: $white;

        &:hover {
            background-color: $primary-color-dark;
        }
    }

    &.text {
        color: $primary-color;

        &:hover {
            background-color: $primary-color-light;
        }
    }

    &.icon {
        padding: 0.5rem;

        &:hover {
            color: $primary-color-light;
        }
    }
}
</style>
