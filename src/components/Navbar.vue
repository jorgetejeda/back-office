<template>
    <header>
        <div class="menu-toggle-wrap">
            <button class="menu-toggle" @click="handleToogleSidebar">
                <span class="material-icons"
                    :class="`${is_expanded ? 'is-expanded' : ''}`">keyboard_double_arrow_right</span>
            </button>
        </div>
    </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const is_expanded = ref(true);
const emit = defineEmits(['toogleSidebar'])

const handleToogleSidebar = () => {
    emit('toogleSidebar', is_expanded.value)
    is_expanded.value = !is_expanded.value
}

</script>

<style lang="scss" scoped>
.menu-toggle-wrap {
    display: flex;
    margin-bottom: 1rem;

    position: relative;
    top: 0;
    transition: 0.2s ease-in-out;

    .menu-toggle {
        transition: 0.2s ease-in-out;

        .material-icons {
            font-size: 2rem;
            color: var(--dark);
            transition: 0.2s ease-out;
        }

        .is-expanded {
            transform: rotate(-180deg);
        }

        &:hover {
            .material-icons {
                color: var(--primary);
                /* transform: translateX(0.5rem); */
            }
        }

    }
}
</style>