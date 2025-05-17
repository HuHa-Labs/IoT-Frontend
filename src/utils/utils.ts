import type { RandomConfig } from './chart-config-type.ts'

export class Utils {
  public static getRandomData(stats: RandomConfig){
    const { count, min, max } = stats;

    if (count <= 1) {
      return [min];
    }

    return Array.from(
      { length: count },
      () => this.getRandomInRange(min, max)
    );
  }

  public static getMonths(countOrFrom: number, to?: number): string[] {
    const months = ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    if (to === undefined) {
      return months.slice(1, countOrFrom + 1); // from 1 to count
    } else {
      return months.slice(countOrFrom, to + 1);
    }
  }

  static getRandomInRange(min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }
}
