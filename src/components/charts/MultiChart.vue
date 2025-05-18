<template>
  <Line id="multi-chart-id" :options="multiDataStore.config.options!"
        :data="multiDataStore.config.data"
  />
</template>

<script setup lang="ts">
import { Line } from 'vue-chartjs';
import {
  Chart as ChartJS, Title, Tooltip, Legend, LineElement, LinearScale,
  CategoryScale, PointElement
} from 'chart.js'
import { useMultiDataStore } from '@/stores/multi-data-store.ts';
ChartJS.register(Title, Tooltip, Legend, LineElement, LinearScale,
  CategoryScale, PointElement);
const multiDataStore = useMultiDataStore();
</script>
