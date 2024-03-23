<template>

    <button
        class="btn"
        :class="variant"
        :disabled="disabled || loading"
        @click="onClick"
    >
        <Icons v-if="variant === 'icon' && icon" :icon="icon"/>
        <template v-if="text">{{ text }}</template>
    </button>
</template>
<script setup lang="ts">
import Icons from '@/components/Icons.vue';

interface ButtonProps {
    text?: string;
    disabled?: boolean;
    onClick: () => void;
    loading?: boolean;
    variant: 'outlined' | 'primary' | 'text' | 'icon';
    icon?: string;
}

// default values
const { text, disabled, onClick, loading, variant } = withDefaults(defineProps<ButtonProps>(), {
    disabled: false,
    loading: false,
    variant: 'primary',
});

</script>

<style lang="scss">
.btn {
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    font-size: 1rem;

    &.outlined {
        border: 1px solid var(--primary-color);
        color: var(--primary-color);

        &:hover {
            background-color: var(--primary-color-dark);
            border-color: var(--primary-color-dark);
            color: white;
        }
    }

    &.primary {
        background-color: var(--primary-color);
        color: white;

        &:hover {
            background-color: var(--primary-color-dark);
        }
    }

    &.text{
        color: var(--primary-color);

        &:hover {
            background-color: var(--primary-color-light);
        }
    }
}
</style>
