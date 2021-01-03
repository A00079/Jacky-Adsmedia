<template>
  <div class="space-y-8">
    <HomeScreen />
    <AboutScreen />
    <ServicesScreen />
    <Skills />
    <ContactUs />
  </div>
</template>

<script>
import HomeScreen from "../sections/HomeScreen/Homescreen";
<<<<<<< HEAD
import AboutScreen from "../sections/About/About";

export default {
  name: "Home",
  components:{
    HomeScreen,
    AboutScreen
  }
=======
import ServicesScreen from "../sections/Services/Services";
import ContactUs from "../sections/ContactUs/ContactUs";
import Skills from "../sections/Excellence/Excellence";

export default {
  name: "Home",
  components: {
    HomeScreen,
    ServicesScreen,
    ContactUs,
    Skills,
  },
>>>>>>> aeee2170e4c77fcad79f64d43b0cf2380bc76c72
};
</script>
