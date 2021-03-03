<template>
  <div>
    <div>
      <h2 class="red--text">{{ error_message }}</h2>
    </div>
    <div>
      <v-row>
        <!-- <v-col>
          <h1 class="green--text">Name:{{ info.name }}</h1></v-col
        >
        <v-col>
          <h1 class="green--text">Time In:{{ info.time_in }}</h1></v-col
        >
        <v-col>
          <h1 class="green--text">Time Out:{{ info.time_out }}</h1></v-col
        > -->
      </v-row>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  props: {
    info,
  },
  name: "info_display",
  data() {
    return {
      err_message: "",
      client_object: null,
    };
  },
  methods: {},
  created() {
    this.err_message = this.error_message;
    this.client_object = this.client;
  },

  computed: {
    ...mapGetters({
      error_message: "client/error_message",
      client: "client/client",
    }),
  },
};
</script>
