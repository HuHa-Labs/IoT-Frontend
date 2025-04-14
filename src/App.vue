<script setup lang="ts">
import { ref, onMounted } from 'vue';

const count = ref(0);

function increment(){
  count.value++;
}

onMounted(() => {
  console.log('Component mounted');
});
</script>

<template>
  <button @click="increment">Count is: {{  count  }}</button>
</template>
