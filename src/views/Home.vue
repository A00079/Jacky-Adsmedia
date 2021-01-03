<template>
  <div class="home">
    <HomeScreen />
    <AboutScreen />
  </div>
</template>

<script>
import HomeScreen from "../sections/HomeScreen/Homescreen";
import AboutScreen from "../sections/About/About";

export default {
  name: "Home",
  components:{
    HomeScreen,
    AboutScreen
  }
};
</script>
