<template>
  <div>
    <h2 class="title_2">profile</h2>
    <v-card class="pa-4" max-width="1000">
      <v-row>
        <v-col cols="4">
          <h2>
            <v-icon class="pr-2">mdi-account-circle</v-icon> {{ client.name }}
          </h2>
        </v-col>
        <v-col cols="4"
          ><h2>
            <v-icon class="pr-2">mdi-domain</v-icon>Department:
            {{ client.department }}
          </h2></v-col
        >
        <v-col cols="4"
          ><h2>
            <v-icon class="pr-2">mdi-card-bulleted-outline</v-icon>Card Number:
            {{ client.card_number }}
          </h2></v-col
        >
      </v-row>
    </v-card>
    <br />
    <v-card max-width="1000">
      <v-card-title>Attendance Table</v-card-title>
      <v-card-text>
        <v-col cols="4">
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="search"
            max-width="500"
          ></v-text-field
        ></v-col>
        <v-data-table
          v-model="selected"
          :headers="headers"
          :items="attendance"
          multi-sort
          :search="search"
        >
        </v-data-table>
      </v-card-text>
    </v-card>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "profile_view",
  data() {
    return {
      client: null,
      attendance: null,
      selected: [],
      search: "",
      headers: [
        { text: "", value: "view_profile" },
        { text: "ID", value: "id" },
        { text: "Time In", value: "time_in" },
        { text: "Time Out", value: "time_out" },
        { text: "Regular Hour", value: "regular_hour" },
        { text: "Over Time", value: "over_time" },
        { text: "Sunday", value: "sunday" },
        { text: "Holiday", value: "holiday" },
      ],
      attendance: [],
    };
  },
  created() {
    // get client
    axios.get("/client/" + this.$route.params.id).then((response) => {
      this.client = response.data[0];
    });
    // get attendance
    axios.get("/attendance/" + this.$route.params.id).then((response) => {
      this.attendance = response.data;
    });
  },
};
</script>
