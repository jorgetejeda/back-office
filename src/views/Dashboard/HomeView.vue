<template>
  <Dashboard>
    <Header title="Dashboard" variant="header" />
    <Card :items="[
      { color: 'primary', title: 'Ventas', icon: 'sell', value: 1000},
      { color: 'success', title: 'Reseñas', icon: 'chat_bubble', value: 1000},
      { color: 'warning', title: 'Productos', icon: 'shopping_basket', value: 1000},
      { color: 'danger', title: 'Usuarios', icon: 'person', value: 1000}
    ]" />
    <div class="d-flex gap-8">
      <Sheet title="Ventas" subtitle="Visualiza las ventas del mes">
        <Button text="Click me" variant="primary" :onClick="() => console.log('clicked')" />
      </Sheet>
      <Sheet title="Reseñas" subtitle="Comentarios de los compradores">
        <Button text="Click me" variant="primary" :onClick="() => console.log('clicked')" />
      </Sheet>
    </div>
  </Dashboard>
</template>

<script setup lang="ts">
//@layout
import Dashboard from '@/layouts/Dashboard.vue';

//@components
import Header from '@/components/Header.vue';
import Sheet from '@/components/Sheet.vue';
import Button from '@/components/Button.vue';
import Card from '@/components/Card.vue';
</script>