<template>
  <div>
    <v-card>
      <v-card-text>
        <v-row>
          <v-col cols="6">
            <h2>Holidays</h2>
            <v-text-field
              name="search"
              label="Search"
              id="id"
              v-model="search"
            ></v-text-field>
          </v-col>
          <v-col> <Holiday_Modal /></v-col
        ></v-row>

        <v-data-table :headers="headers" :items="holidays" :search="search">
          <template v-slot:[`item.actions1`]="{ item }">
            <Edit_Holiday_Modal :item="item" />
          </template>
          <template v-slot:[`item.actions`]="{ item }">
            <v-icon color="error" class="mr-2" @click="del(item)">
              mdi-delete
            </v-icon>
            <span class="error--text">Delete</span>
          </template>
        </v-data-table>
      </v-card-text>
    </v-card>

    <table></table>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Edit_Holiday_Modal from "@/components/Edit_Holiday.vue";
import Holiday_Modal from "@/components/Add_Holiday_Modal.vue";
export default {
  components: {
    Holiday_Modal,
    Edit_Holiday_Modal,
  },
  data() {
    return {
      search: "",
      headers: [
        { text: "", value: "actions1", width: "90" },
        { text: "", value: "actions", width: "120" },
        { text: "ID", value: "id" },
        { text: "Holiday Name", value: "holiday_name" },
        { text: "Date", value: "date" },
      ],
      items: [],
    };
  },
  created() {
    this.get_holidays();
  },
  methods: {
    get_holidays() {
      this.$store.dispatch("holidays/set_holidays", { root: true });
    },
    del(item) {
      confirm("Are you sure you want to delete " + item.holiday_name + "?")
        ? this.$store
            .dispatch("holidays/del_holiday", item, { root: true })
            .then(() => {
              alert("successfully deleted");
            })
        : "";
    },
  },
  computed: {
    ...mapState("holidays", ["holidays"]),
  },
};
</script>

<style></style>
