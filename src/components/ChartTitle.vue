<script setup lang="ts">
defineProps<{
  title: string
}>();
</script>

<template>
  <h2 class="text-2xl font-semibold text-center mb-4">
    {{ title }}
  </h2>
</template>
