<script setup lang="ts">
import LastRecordChart from '@/components/charts/LastRecordChart.vue';
import ChartTitle from '@/components/ChartTitle.vue';

defineProps<{
  title: string
}>();
</script>

<template>
  <div class="flex flex-col items-center p-4 bg-white rounded-2xl shadow-md h-full">
    <ChartTitle :title="title"></ChartTitle>
    <LastRecordChart/>
  </div>
</template>
