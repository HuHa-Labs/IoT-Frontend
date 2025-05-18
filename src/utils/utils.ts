import type { RandomConfig } from './chart-config-type.ts'

export class Utils {
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

  public static getNumbers(data: RandomConfig) : number[]{
    return Array.from({ length: data.count })
      .fill(0)
      .map(() => this.getRandomInRange(data.min, data.max));
  }
}
