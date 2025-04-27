import type { Component } from 'vue'

export abstract class ChartCreator {
  abstract createComponent() : Component;
  private chartTitle: string = "<Unknown>";
}
