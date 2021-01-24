<template>
  <v-app>
    <v-main>
      <navbar />
      <router-view class="ml-5 mt-5"></router-view>
    </v-main>
  </v-app>
</template>

<script>
import navbar from "@/components/Navbar.vue";
export default {
  name: "App",

  components: {
    navbar,
  },

  data: () => ({
    //
  }),
};
</script>
