<template>
  <div class="home">
    <v-row class=" d-flex justify-center text-center">
      <v-col cols="10">
        <Time />

        <!-- DISPLAY MESSAGE -->
        <v-col v-if="info">
          <v-row>
            <v-col cols="5">
              <h2 class="green--text">Name: {{ info.name }}</h2></v-col
            >
            <v-col cols="3">
              <h2 class="green--text">Time In: {{ info.time_in }}</h2></v-col
            >
            <v-col cols="3">
              <h2 class="green--text">Time Out: {{ info.time_out }}</h2></v-col
            >
          </v-row>
        </v-col>
        <v-col cols="5" v-if="message">
          <v-row>
            <v-col>
              <h2 class="red--text">Message: {{ message }}</h2></v-col
            >
          </v-row>
        </v-col>
        <Textfield @db_response="test"
      /></v-col>
    </v-row>
  </div>
</template>

<script>
// import info_display from "@/components/Info_Display.vue";
import Time from "@/components/Time.vue";
import Textfield from "@/components/Textfield.vue";

export default {
  name: "Home",
  data() {
    return {
      info: null,
      message: null,
    };
  },
  components: { Time, Textfield },
  methods: {
    test(value) {
      if (typeof value == "object") {
        this.info = value;
        this.message = null;
      } else {
        this.message = value;
        this.info = null;
      }
    },
  },
};
</script>
