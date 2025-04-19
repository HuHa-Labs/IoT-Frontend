<script setup lang="ts">
import { ref, onMounted, provide } from 'vue';
import TheNavBar from './components/TheNavBar.vue';
const count = ref(0);

onMounted(() => {
  console.log('Component mounted');
});

provide("count", count);
</script>

<template>
<div class="min-h-screen flex flex-col">
  <TheNavBar />
  <main class="flex-1 bg-white dark:bg-gray-0">
    <RouterView />
  </main>
</div>
</template>
