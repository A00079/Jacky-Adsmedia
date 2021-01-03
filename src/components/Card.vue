<template>
  <div
    class="shadow-md space-y-8 content-center hover:shadow-xl cursor-pointer transition duration-500 ease-in-out p-6 rounded-lg"
  >
    <img src="@/assets/hammer.svg" width="50" class="mx-auto" />
    <div class="text-center heading">
      {{ heading }}
    </div>
    <div class="text-center">
      {{ content }}
    </div>
  </div>
</template>
<script>
export default {
  name: "Card",
  props: ["heading", "content"],
};
</script>

<style scoped>
.heading {
  position: relative;
  text-decoration: none;
  display: inline-block;
  color: black;
  padding: 0 2px;
  transition: color ease 0.3s;
}

.heading::after {
  content: "";
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 5%;
  border-radius: 5px;
  left: 0;
  bottom: 0;
  background-color: #e78f3b;
  transition: all ease 0.3s;
}

.heading:hover {
  color: white;
}

.heading:hover::after {
  height: 100%;
}
</style>