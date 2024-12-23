import {defineStore} from "pinia";
import type {departmentType, productLineType} from "./types";

export const financeState = defineStore("finance", {
  state: () => ({
    production: {
      total: 0,
      used: 0,
    },
    hr: {
      total: 0,
      used: 0,
    },
    advertisement: {
      total: 0,
      used: 0,
    },
    cash: {
      total: 500000,
      used: 0,
    },
  }),
  actions: {
    /**拨预算 */
    add(department: departmentType, count: number) {
      this.cash.total -= count;
      this.cash.used += count;
      this[department].total += count;
    },
    /**用钱 */
    use(department: departmentType, count: number) {
      const current = this[department];
      current.used += count;
      current.total -= count;
    },
  },
  persist: {
    key: "finance",
  },
});

export const productionState = defineStore("production", {
  state: () => ({
    lines: [] as productLineType[],
  }),
  persist: {
    key: "productLine",
  },
});
