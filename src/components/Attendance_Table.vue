<template>
  <div>
    <v-card class="pa-4">
      <h2>Attendance Table</h2>

      <v-row>
        <v-col cols="8">
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="search"
            max-width="500"
          ></v-text-field
        ></v-col>
      </v-row>
      <v-row>
        <v-col cols="">
          <v-data-table
            v-model="selected"
            :headers="headers"
            :items="items"
            multi-sort
            :search="search"
          >
            <template v-slot:[`item.actions`]="{}">
              <v-icon small class="mr-2">
                mdi-pencil
              </v-icon>
              <v-icon small>
                mdi-delete
              </v-icon>
            </template>
          </v-data-table></v-col
        >
      </v-row>
    </v-card>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "clients_table",
  data() {
    return {
      selected: [],
      search: "",
      headers: [
        { text: "ID", value: "id" },
        { text: "Name", value: "name" },
        { text: "Time In", value: "time_in" },
        { text: "Time Out", value: "time_out" },
        { text: "Regular Hour", value: "regular_hour" },
        { text: "Over Time", value: "over_time" },
        { text: "Holiday", value: "holiday" },
        { text: "Sunday", value: "sunday" },
      ],
      items: [],
    };
  },
  created() {
    this.get_attendance();
  },
  methods: {
    async get_attendance() {
      await axios.get("/attendances").then((response) => {
        this.items = response.data;
      });
    },
  },
};
</script>
