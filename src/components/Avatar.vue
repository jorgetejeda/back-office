<template>
    <div class="avatar">
        <img :src="image" alt="avatar" />
    </div>
</template>

<script setup lang="ts">
const { image } = withDefaults(
    defineProps<{
        image?: string;
    }>(), {
    image: 'https://picsum.photos/200/200'
});

</script>

<style lang="scss">
@import 'src/assets/styles/index';

.avatar {
    margin: 0.5rem 1rem;
    width: 35px;
    height: 35px;
    overflow: hidden;
    border-radius: 50%;
    border: 2px solid $primary-color;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
</style>
