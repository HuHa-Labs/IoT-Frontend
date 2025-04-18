<script setup lang="ts">
import { ref, onMounted, provide } from 'vue';
import TheHeader from './components/TheHeader.vue';
const count = ref(0);

function increment(){
  count.value++;
}

onMounted(() => {
  console.log('Component mounted');
});

provide("count", count);
</script>

<template>
<div class="min-h-screen flex flex-col">
  <TheHeader />
  <main class="flex-1 bg-white dark:bg-gray-0">
    <h1 class="text-5xl underline">
    Hello world!
    </h1>
    <button @click="increment">Count is: {{  count  }}</button>
  </main>
</div>
</template>
