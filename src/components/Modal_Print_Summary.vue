<template>
  <div>
    <v-btn @click.stop="dialog = true" text>
      <span>Print Summary</span>
      <v-icon class="pl-2">mdi-printer</v-icon>
    </v-btn>
    <v-dialog v-model="dialog" class="" max-width="400">
      <v-card>
        <v-card-title class="headline">Export Summary</v-card-title>
        <v-card-subtitle>This form exports excel file</v-card-subtitle>
        <v-form class="pl-10 pr-10 pb-7">
          <v-select
            v-model="month"
            :items="months"
            label="Month"
            placeholder="Please Select Month"
          ></v-select>
          <v-select
            v-model="year"
            :items="years"
            label="year"
            placeholder="Please Select Year"
          ></v-select>
          <v-select
            v-model="half"
            label="Half"
            :items="halves"
            placeholder="Please Select Half"
          ></v-select>
          <v-btn color="success" @click="export_excel()">Export</v-btn>
          <a href=""></a>
        </v-form>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  name: "modal_print_summary",
  data() {
    return {
      month: null,
      year: null,
      half: null,
      dialog: false,
      halves: [1, 2],
      years: [],
      months: [
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
  created() {
    var i;
    for (i = 2020; i <= 2030; i++) {
      this.years.push(i);
    }
  },
  methods: {
    export_excel() {
      const x = {
        month: this.months.indexOf(this.month) + 1,
        year: this.year,
        half: this.half,
      };
      // console.log(x);
      // window.open(
      //   "http://localhost:8000/api/attendance/" +
      //     x.year +
      //     "/" +
      //     x.month +
      //     "/" +
      //     x.half
      // );
      window.open(
        "http://192.168.1.169:8000/api/attendance/" +
          x.year +
          "/" +
          x.month +
          "/" +
          x.half
      );
      // this.$router.push("/attendance/" + x.year + "/" + x.month + "/" + x.half);
    },
  },
};
</script>
