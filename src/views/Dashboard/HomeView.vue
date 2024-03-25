<template>
  <Dashboard>
    <h1 class="title">Welcome to the Home Page</h1>
    <Card :items="[
      { color: 'primary', title: 'Primary', icon: 'info' },
      { color: 'secondary', title: 'Secondary', icon: 'info' },
      { color: 'success', title: 'Success', icon: 'info' },
      { color: 'warning', title: 'Warning', icon: 'info' },
      { color: 'danger', title: 'Danger', icon: 'info' }
    ]" />
    <Sheet title="My Sheet" subtitle="This is a sheet component">
      <Button text="Click me" variant="primary" :onClick="() => console.log('clicked')" />
    </Sheet>
  </Dashboard>
</template>

<script setup lang="ts">
//@layout
import Dashboard from '@/layouts/Dashboard.vue';

//@components
import Sheet from '@/components/Sheet.vue';
import Button from '@/components/Button.vue';
import Card from '@/components/Card.vue';
</script>