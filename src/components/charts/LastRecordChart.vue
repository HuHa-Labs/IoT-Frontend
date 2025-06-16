<script setup lang="ts">
import { useLatestRecordStore } from '@/stores/latest-data-store.ts';
const latestRecordStore = useLatestRecordStore();
</script>

<template>
  <div
    class="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 text-base font-medium">
    <div>🌡 Temperature️:</div>
    <div>
      {{ latestRecordStore.temp }}°C
    </div>
    <div>💦
      Humidity:
    </div>
    <div>
      {{ latestRecordStore.humidity }}%
    </div>
    <div>
      🔌 Electricity usage:
    </div>
    <div>
      {{ latestRecordStore.electricityUsage }}W
    </div>
    <div>
      🐾 Motion detected:
    </div>
    <div>
      {{ latestRecordStore.motionDetected }}
    </div>
  </div>
</template>
