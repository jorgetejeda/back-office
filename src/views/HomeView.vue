<template>
  <div class="home">
    <h1>Welcome to the Home Page</h1>
    <p>This is the home page of our single page application.</p>
    <Sheet
      title="My Sheet"
      subtitle="This is a sheet component"
    >
      <Button text="Click me" :loading="true"/>
    </Sheet>
  </div>
</template>

<script setup lang="ts">
  import Sheet from '@/components/Sheet.vue';
  import Button from '@/components/Button.vue';
</script>