<template>
  <div>
    <HomeScreen />
    <ServicesScreen />
    <ContactUs />
  </div>
</template>

<script>
import HomeScreen from "../sections/HomeScreen/Homescreen";
import ServicesScreen from "../sections/Services/Services";
import ContactUs from "../sections/ContactUs/ContactUs";

export default {
  name: "Home",
  components: {
    HomeScreen,
    ServicesScreen,
    ContactUs,
  },
};
</script>
