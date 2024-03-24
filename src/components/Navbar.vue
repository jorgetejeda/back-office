<template>
    <header class="navbar">
        <div class="menu-toggle-wrap">
            <Button variant="icon" :icon="is_expanded ? 'keyboard_double_arrow_left' : 'keyboard_double_arrow_right'"
                :onClick="handleToogleSidebar" />
        </div>

        <div class="flex-grow"></div>

        <Button variant="icon" icon="notifications" :onClick="() => console.log('icon')" />
        <Button variant="icon" icon="mail" :onClick="() => console.log('icon')" />
        <Avatar />
    </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// @component
import Button from '@/components/Button.vue';
import Avatar from '@/components/Avatar.vue';


const is_expanded = ref(true);
const emit = defineEmits(['toogleSidebar'])

const handleToogleSidebar = () => {
    emit('toogleSidebar', is_expanded.value)
    is_expanded.value = !is_expanded.value
}

</script>

<style lang="scss" scoped>
header.navbar {
    display: flex;
}

.menu-toggle-wrap {
    display: flex;
    position: relative;
    top: 0;
    transition: 0.2s ease-in-out;

    .icon {
        padding-left: 0;
    }
}
</style>