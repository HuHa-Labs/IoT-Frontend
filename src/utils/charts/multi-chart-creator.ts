import { type Component, defineComponent, h } from 'vue'
import { ChartCreator } from '@/utils/charts/chart-creator.abstract.ts'
import ChartPanel from '@/components/ChartPanel.vue'
import ChartTitle from '@/components/ChartTitle.vue'
import MultiChart from '@/components/charts/MultiChart.vue'

export class MultiChartCreator extends ChartCreator {
  private static chartTitle: string = "Multi Chart";

  createComponent(): Component {
    return defineComponent({
      name: "MultiChartPanel",
      setup: () => {
        return () =>
          h(
            ChartPanel,
            {}, // No props needed
            {
              title: () => h(ChartTitle, { title: MultiChartCreator.chartTitle }),
              default: () => h(MultiChart)
            }
          )
      }
    })
  }
}
