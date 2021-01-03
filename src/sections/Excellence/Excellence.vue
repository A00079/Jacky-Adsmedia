<template>
  <div class="grid grid-cols-2 gap-6">
    <div v-for="(item, index) in bars" :key="index">
      <div class="py-2">
        {{ item.name }}aaasdasawfw
      </div>
      <div class="bg-gray-300 rounded-md">
        <div
          class="h-5 bg-indigo-400 rounded-md"
          :ref="item.name"
          style="width: 20px"
        ></div>
      </div>
    </div>
  </div>
</template>
<script>
import { grow } from "./skillbar";

export default {
  name: "skills",
  data() {
    return {
      bars: [
        {
          name: "a",
          percent: "60%",
        },
        {
          name: "b",
          percent: "90%",
        },
        {
          name: "c",
          percent: "85%",
        },
        {
          name: "d",
          percent: "70%",
        },
        {
          name: "e",
          percent: "40%",
        },
        {
          name: "f",
          percent: "99%",
        },
      ],
    };
  },
  mounted() {
    setTimeout(() => {
      this.bars.map((el) => {
        grow(this.$refs[el.name], el.percent);
      });
    }, 1000);
  },
};
</script>