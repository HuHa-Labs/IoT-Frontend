<script setup lang="ts">
import { useLatestRecordStore } from '@/stores/latest-data-store.ts'
const latestRecordStore = useLatestRecordStore();
</script>

<template>
  <div>
    <p>
      🌡 Temperature️: {{ latestRecordStore.temp }}°C
    </p>
    <p>
      💦 Humidity: {{ latestRecordStore.humidity }}%
    </p>
    <p>
      🔌 Electricity usage: {{ latestRecordStore.electricityUsage }}W
    </p>
    <p>
      🐾 Motion detected: {{ latestRecordStore.motionDetected }}
    </p>
  </div>
</template>
