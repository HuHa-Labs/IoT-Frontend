import { defineStore } from "pinia";
import { type Ref, ref } from 'vue'
import { Utils } from '@/utils/utils.ts'
import { HexColor } from '@/utils/hex-color.enum.ts'
import type { ChartConfiguration, ChartData } from 'chart.js'
import type { RandomConfig } from '@/utils/chart-config-type.ts'
export const useMultiDataStore = defineStore("multiData", () => {
  const DATA_COUNT : number = 12;
  const data : Ref<ChartData<'line'|'bar'>> = ref({
    labels: Utils.getMonths(DATA_COUNT),
    datasets: [
      {
        label: "Temperature",
        data: Utils.getNumbers({
          count: DATA_COUNT,
          min: -10,
          max: 40,
        } as RandomConfig),
        borderColor: HexColor.Red,
        yAxisID: 'y',
      },
      {
        label: "Electricity Usage",
        data: Utils.getNumbers({
          count: DATA_COUNT,
          min: 0,
          max: 100,
        } as RandomConfig),
        borderColor: HexColor.Blue,
        yAxisID: 'y1',
      },
      {
        label: "Humidity",
        data: Utils.getNumbers({
          count: DATA_COUNT,
          min: 0,
          max: 100,
        } as RandomConfig),
        borderColor: HexColor.Green,
        backgroundColor: HexColor.Purple + "7f",
        type: 'bar',
      }
    ]
  });

  const config : Ref<ChartConfiguration<'line'|'bar'>> = ref({
    type: 'line',
    data: data.value,
    options: {
      responsive: true,
      interaction: {
        mode: 'index',
        intersect: false,
      },
      stacked: false,
      scales: {
        y: {
          type: 'linear',
          display: true,
          position: 'left',
          title: {
            display: true,
            text: '°C', // ← Your unit
            color: 'black',
            font: {
              size: 14,
              weight: 'bold',
            }
          },
        },
        y1: {
          type: 'linear',
          display: true,
          position: 'right',
          grid: {
            drawOnChartArea: false, // only want the grid lines for one axis to show up
          },
          title: {
            display: true,
            text: 'W', // ← Your unit
            color: 'black',
            font: {
              size: 14,
              weight: 'bold',
            }
          }
        },
      }
    },
  });
  return {
    config,
  }
});
