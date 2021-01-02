<template>
  <div class="grid grid-cols-4 gap-10">
    <div v-for="(item, index) in test" :key="index">
      <Card
        heading="PERFORMANCE PROGRAMMATIC WAY"
        content="With our breakthrough technology we team historical user data and artificial intelligence that achieve performance goals."
      />
    </div>
  </div>
</template>

<script>
import Card from "../../components/Card";
export default {
  name: "Services",
  components: { Card },

  data() {
    return {
      test: [1, 2, 3, 4, 5, 6, 7, 8],
    };
  },
};
</script>