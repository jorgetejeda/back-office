<template>

    <div class="card" :class="variant">
        <h3 :class="variant">{{ title }}</h3>
        <slot></slot>
    </div>

</template>

<script setup lang="ts">

interface InformationCard {
    title: string;
    icon: string;
    variant: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
}

const { title, icon, variant } = withDefaults(
    defineProps<InformationCard>(), {
    title: 'Card Title',
    icon: 'info',
    variant: 'primary'
});
</script>

<style lang="scss" scoped>
.card {
    border-radius: 7px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 1rem;
    text-align: center;

    &.primary {
        background-color: var($primary-color);
        color: var($white);
    }

    &.secondary {
        background-color: var($secondary-color);
        color: var($white);
    }

    &.success {
        background-color: var($success-color);
        color: var($white);
    }

    &.warning {
        background-color: var($warning-color);
        color: var($white);
    }

    &.danger {
        background-color: var($danger-color);
        color: var($white);
    }

    h3 {
        &.primary {
            color: var($primary-color);
        }

        &.secondary {
            color: var($secondary-color);
        }

        &.success {
            color: var($success-color);
        }

        &.warning {
            color: var($warning-color);
        }

        &.danger {
            color: var($danger-color);
        }
    }
}
</style>