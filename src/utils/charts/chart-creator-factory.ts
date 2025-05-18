import { type Component } from 'vue'
import { ChartType } from './chart-type.enum.ts'
import { LastRecordChartCreator } from '@/utils/charts/last-record-chart-creator.ts'
import { MultiChartCreator } from '@/utils/charts/multi-chart-creator.ts'

export class ChartCreatorFactory{
  createComponent(chartType: ChartType) : Component{
    switch (chartType) {
      case ChartType.LastRecordChart: {
        return new LastRecordChartCreator().createComponent();
      }
      case ChartType.MultiChart: {
        return new MultiChartCreator().createComponent();
      }
      default:
        throw new Error(`Unknown chartType type: ${chartType}`);
    }
  }
}
