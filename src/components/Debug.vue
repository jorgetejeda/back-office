<template>
    <div class="border rounded pa-1 my-1 debug-color">
        <pre>{{ data }}</pre>
    </div>
</template>

<script setup lang="ts">
const { data } = defineProps<{ data: any }>();
</script>

<style scoped lang="scss">
@import 'src/assets/styles/index';

pre {
    white-space: pre-wrap;
    word-wrap: break-word;
}

.debug-color {
    background: $body-color;
}
</style>