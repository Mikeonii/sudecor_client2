<template>
  <div>
    <v-row>
      <v-col cols="6">
        <h1 class="title_2">Admin Controls</h1>
      </v-col>
      <!-- <v-col>
        <p>Generate Attendance Summary</p>
        <div class="d-flex justify-center">
          <v-select label="Year" :items="Years" v-model="form.year"></v-select>
          <v-select
            label="Months"
            :items="Months"
            v-model="form.month"
          ></v-select>
          <v-select label="Half" :items="Halves" v-model="form.half"></v-select>
          <v-btn color="success">Submit</v-btn>
        </div>
      </v-col> -->
    </v-row>
    <v-row>
      <v-col cols="6">
        <Holiday />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6"><clients_table /></v-col>
      <v-col cols="6"><attendance_table /></v-col>
    </v-row>
  </div>
</template>
<script>
import Holiday from "@/components/Holiday.vue";
import attendance_table from "@/components/Attendance_Table.vue";
import clients_table from "@/components/Clients_Table.vue";
import add_client from "@/components/Add_Client.vue";
import print_summary from "@/components/Modal_Print_Summary.vue";
export default {
  components: {
    attendance_table,
    clients_table,
    add_client,
    print_summary,
    Holiday,
  },
  data() {
    return {
      form: {
        month: "",
        year: "",
        half: "",
      },
      Years: ["2021", "2022", "2023", "2024", "2025"],
      Halves: ["1", "2"],
      Months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
    };
  },
};
</script>
