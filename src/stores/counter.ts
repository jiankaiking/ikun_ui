import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { state } from "vue-tsc/out/shared";

export const useCounterStore = defineStore("counter", {
  state: () => {
    return {
      name: "小猪课堂",
      age: 25,
      sex: "男",
    };
  },
  getters: {
    getA: (state) => {
      return state.age;
    },
  },
  actions: {
    setAge(age: number) {
      this.age = age;
    },
  },
});
