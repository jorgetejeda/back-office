<template>
    <button class="btn" :disabled="disabled || loading" @click="onClick" :class="{ loading }">
        <span v-if="loading" class="loading-icon material-icons">autorenew</span>
        {{ text }}
    </button>
</template>

<script setup lang="ts">
import { defineProps, } from 'vue';

const { onClick, text } = defineProps({
    text: String,
    disabled: Boolean,
    onClick: Function,
    loading: Boolean,
});

</script>

<style lang="scss">
button.btn {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.5rem;
    background-color: var(--primary);
    color: white;
    font-size: 1rem;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    &:hover {
        background-color: var(--primary-dark);
    }
    &:focus {
        outline: none;
    }
    &:disabled {
        background-color: var(--grey);
        cursor: not-allowed;
    }

    &.loading {
        background-color: var(--grey);
        cursor: not-allowed;
    }

    .material-icons {
        font-size: 1.5rem;
        margin-right: 0.5rem;
    }

    .loading-icon {
        animation: spin 1s linear infinite;
    }

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
}
</style>
