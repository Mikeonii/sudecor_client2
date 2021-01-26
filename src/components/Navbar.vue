<template>
  <v-app-bar app color="success darken-2" dark>
    <div class="d-flex align-center">
      <span class="font-weight-black">SUDECOR </span> | Attendance System
    </div>

    <v-spacer></v-spacer>
    <Modal_Print_Summary />
  </v-app-bar>
</template>
<script>
import Modal_Print_Summary from "@/components/Modal_Print_Summary.vue";
export default {
  name: "navbar",
  data() {
    return {};
  },
  components: {
    Modal_Print_Summary,
  },
};
</script>
