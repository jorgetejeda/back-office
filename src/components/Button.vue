<template>
    <button v-if="component === 'button'" :type="type" class="btn rounded" :class="`${variant} ${customClass}`"
        :disabled="disabled || loading" @click="onClick">
        <Icon v-if="variant === 'icon' && icon" :icon="icon" />
        <template v-if="text">{{ text }}</template>
    </button>

    <a v-if="component === 'link'" :href="to" class="btn-link">
        <Icon v-if="variant === 'icon' && icon" :icon="icon" />
        <Text variant="caption" v-if="text" :text="text" :customClass="customClass" />
    </a>
</template>
<script setup lang="ts">
import Icon from '@/components/Icon.vue';
import Text from '@/components/Text.vue';

interface ButtonProps {
    text?: string;
    disabled?: boolean;
    onClick?: () => void;
    loading?: boolean;
    variant: 'outlined' | 'primary' | 'text' | 'icon';
    component?: 'button' | 'link'
    icon?: string;
    type?: 'button' | 'submit' | 'reset';
    to?: string;
    customClass?: string;
}

const { text, disabled, onClick, loading, variant, type, component, to, customClass } = withDefaults(defineProps<ButtonProps>(), {
    type: 'button',
    variant: 'primary',
    component: 'button',
    customClass: '',
    to: ''
});
</script>

<style lang="scss" scoped>
@import 'src/assets/styles/index';

.btn-link {
    text-decoration: none;
    color: $primary-color;
    cursor: pointer;

    &:hover {
        color: $primary-color-lighten;
    }
}

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
            background-color: $primay-color-darken;
            border-color: $primay-color-darken;
            color: $white;
        }
    }

    &.primary {
        background-color: $primary-color;
        color: $white;

        &:hover {
            background-color: $primay-color-darken;
        }
    }

    &.text {
        color: $primary-color;

        &:hover {
            background-color: $primary-color-lighten;
        }
    }

    &.icon {
        padding: 0.5rem;

        &:hover {
            color: $primary-color-lighten;
        }
    }
}
</style>
