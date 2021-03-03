<template>
  <v-app>
    <v-main>
      <navbar />
      <router-view class="ml-5 mt-5 pl-15 pr-15"></router-view>
      <Footer />
    </v-main>
  </v-app>
</template>

<script>
import navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "App",

  components: {
    navbar,
    Footer,
  },

  data: () => ({
    //
  }),
};
</script>
<style>
.title_2 {
  font-size: 70px;
}
h1 {
  font-size: 220px;
}
.subtitle {
  font-size: 44px;
}
.subtitle2 {
  font-size: 50px;
}
</style>
