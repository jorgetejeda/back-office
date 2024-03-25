<template>
    <Sidebar :is_expanded="is_expanded" />
    <main>
        <Navbar @toogleSidebar="handleSidebar" />
        <slot />
    </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Navbar from '@/components/Navbar.vue';
import Sidebar from '@/components/Sidebar.vue'

const is_expanded = ref(false);

const handleSidebar = (isExpanded: boolean) => {
    is_expanded.value = isExpanded;
};
</script>