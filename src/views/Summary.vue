<template>
  <div>
    <h1>Print Summary</h1>
    <v-row>
      <v-form>
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
          v-model="day"
          label="Day"
          :items="days"
          placeholder="Please Select Day"
        ></v-select
      ></v-form>
    </v-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      days: [1, 2],
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
    this.items = this.holidays.data;
  },
};
</script>
