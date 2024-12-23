import {defineStore} from "pinia";
import type {departmentType} from "./types";

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
    store: {
      total: 400000,
      used: 0,
    },
  }),
  actions: {
    /**拨预算 */
    add(department: departmentType, count: number) {
      this.store.total -= count;
      this.store.used += count;
      this[department].total += count;
    },
    /**用钱 */
    use(department: departmentType, count: number) {
      const current = this[department];
      /**余额 */
      const balance = current.total - current.used;
      current.used += count;
      current.total -= count;
    },
  },
  persist: false,
});
