import { type Component, defineComponent, h } from 'vue'
import { ChartCreator } from '@/utils/charts/chart-creator.abstract.ts'
import ChartPanel from '@/components/ChartPanel.vue'
import ChartTitle from '@/components/ChartTitle.vue'
import LastRecordChart from '@/components/charts/LastRecordChart.vue'

export class LastRecordChartCreator extends ChartCreator {
  private static chartTitle: string = "Last Record";

  createComponent(): Component {
    return defineComponent({
      name: "LastRecordChartPanel",
      setup: () => {
        return () =>
          h(
            ChartPanel,
            {}, // No props needed
            {
              title: () => h(ChartTitle, { title: LastRecordChartCreator.chartTitle }),
              default: () => h(LastRecordChart)
            }
          )
      }
    })
  }
}
