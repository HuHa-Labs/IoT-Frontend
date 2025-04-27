<script setup lang="ts">
import { ChartCreatorFactory } from '@/utils/charts/chart-creator-factory.ts'
import { ChartType } from '@/utils/charts/chart-type.enum'
const chartCreatorFactory = new ChartCreatorFactory();
const chartToCreate: ChartType[] = [
  ChartType.LastRecordChart,
]
const chartComponents = chartToCreate.map(ct => chartCreatorFactory.createComponent(ct));

</script>

<template>
  <div>
    <component v-for="(chart, index) in chartComponents"
    :key="index"
    :is="chart"></component>
  </div>
</template>
