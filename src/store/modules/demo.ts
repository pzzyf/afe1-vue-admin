import { defineStore } from "pinia";

export const useCountStore = defineStore("counter", {
  state() {
    return { count: 0 };
  },
  actions: {
    inc() {
      this.count += 1;
    },
    dec() {
      this.count -= 1;
    },
  },
});
