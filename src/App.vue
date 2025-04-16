<script setup lang="ts">
import { ref, onMounted } from 'vue';
import TheHeader from './components/TheHeader.vue';
const count = ref(0);

function increment(){
  count.value++;
}

onMounted(() => {
  console.log('Component mounted');
});
</script>

<template>
  <TheHeader />
  <h1 class="text-5xl underline">
    Hello world!
  </h1>
  <button @click="increment">Count is: {{  count  }}</button>
</template>
