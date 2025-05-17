import { defineStore } from "pinia";
import { ref } from "vue";
import { Utils } from '@/utils/utils.ts'

export const useMultiDataStore = defineStore("multiData", () => {
  const config = ref({
    type: 'line',
    data: data,
    options: {
      responsive: true,
      interaction: {
        mode: 'index',
        intersect: false,
      },
      stacked: false,
      plugins: {
        title: {
          display: true,
          text: 'Chart.js Line Chart - Multi Axis'
        }
      },
      scales: {
        y: {
          type: 'linear',
          display: true,
          position: 'left',
        },
        y1: {
          type: 'linear',
          display: true,
          position: 'right',

          // grid line settings
          grid: {
            drawOnChartArea: false, // only want the grid lines for one axis to show up
          },
        },
      }
    },
  });

  const DATA_COUNT = ref(7);
  const NUMBER_CFG = ref({
    count: DATA_COUNT,
    min: -100,
    max: 100
  });

  const data = {
    labels: Utils.getMonths(9),
    datasets: [
      {
        label: 'Dataset 1',
        data: Utils.numbers(NUMBER_CFG),
        borderColor: Utils.CHART_COLORS.red,
        backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
        yAxisID: 'y',
      },
      {
        label: 'Dataset 2',
        data: Utils.numbers(NUMBER_CFG),
        borderColor: Utils.CHART_COLORS.blue,
        backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
        yAxisID: 'y1',
      }
    ]
  });
  return {
    temp,
    humidity,
    electricityUsage,
    motionDetected,
  };
});
