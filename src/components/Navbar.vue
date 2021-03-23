<template>
  <v-app-bar app color="success darken-2" dark>
    <v-img src="@/assets/8.jpg" max-width="50" class="mr-5"></v-img>
    <div class="d-flex align-center">
      <span class="font-weight-black">PUYAT SUDECOR </span>
      <span class="pr"> | Attendance System</span>
    </div>
    <v-divider vertical class="pl-10"></v-divider>
    <v-spacer></v-spacer>
    <v-row v-if="is_admin_active">
      <add_client />
      <Modal_Print_Summary />

      <v-btn router-link to="/" class="">Attendance Page</v-btn>
      <v-btn router-link to="/summary" class="ml-4"
        >View Attendance Summary</v-btn
      >

    </v-row>
  </v-app-bar>
</template>
<script>
import { mapGetters } from "vuex";
import add_client from "@/components/Add_Client.vue";
import Modal_Print_Summary from "@/components/Modal_Print_Summary.vue";

export default {
  name: "navbar",
  data() {
    return {};
  },
  components: {
    Modal_Print_Summary,
    add_client,
  },
  computed: {
    ...mapGetters({
      is_admin_active: "client/is_admin_active",
    }),
  },
};
</script>
