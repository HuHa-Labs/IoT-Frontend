import { defineStore } from "pinia";
import { ref } from "vue";

export const useLatestRecordStore = defineStore("latestRecord", () => {
  const temp = ref(0);
  const humidity = ref(0);
  const electricityUsage = ref(0);
  const motionDetected = ref(false);

  return {
    temp,
    humidity,
    electricityUsage,
    motionDetected,
  };
});
