<template>
  <div class="home">
    <h1 class="title">Welcome to the Home Page</h1>
    <Sheet title="My Sheet" subtitle="This is a sheet component">
      <Button text="Click me" variant="primary" :onClick="() => console.log('clicked')" />
    </Sheet>
  </div>
</template>

<script setup lang="ts">
// @components
import Sheet from '@/components/Sheet.vue';
import Button from '@/components/Button.vue';
</script>