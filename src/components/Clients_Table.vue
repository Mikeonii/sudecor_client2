<template>
  <div>
    <v-card class="pa-5">
      <h2>Clients Table</h2>
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
            <template v-slot:[`item.view_profile`]="{ item }">
              <v-icon class="mr-2" @click="view_profile(item)">
                mdi-account
              </v-icon>
              <span>Profile</span>
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
        { text: "", value: "view_profile" },
        { text: "ID", value: "id" },
        { text: "Name", value: "name" },
        { text: "Card Number", value: "card_number" },
        { text: "Department", value: "department" },
        { text: "Created at", value: "created_at" },
        { text: "Updated at", value: "updated_at" },
      ],
      items: [],
    };
  },
  created() {
    this.get_attendance();
  },
  methods: {
    view_profile(item) {
      this.$router.push("/profile/" + item.id);
    },
    async get_attendance() {
      await axios.get("/clients").then((response) => {
        this.items = response.data;
        console.log(response.data);
      });
    },
  },
};
</script>
