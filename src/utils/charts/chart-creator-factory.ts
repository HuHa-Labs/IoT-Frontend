import { type Component } from 'vue'
import { ChartType } from './chart-type.enum.ts'
import { LastRecordChartCreator } from './last-record-chart-creator.ts'

export class ChartCreatorFactory{
  createComponent(chartType: ChartType) : Component{
    switch (chartType) {
      case ChartType.LastRecordChart: {
        return new LastRecordChartCreator().createComponent();
      }
      default:
        throw new Error(`Unknown chartType type: ${chartType}`);
    }
  }
}
