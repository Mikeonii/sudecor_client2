<template>
  <v-card max-width="500" class="pa-10">
    <v-card-title>
      <h1 class="display-4">{{ time_now }}</h1>
    </v-card-title>
    <v-divider></v-divider>
    <v-card-text>
      Today is: <br />
      <h1 class="mt-3">{{ month }}, {{ day }} {{ year }}</h1>
      <v-chip color="green white--text" class="mt-2">{{ full_day }}</v-chip>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  name: "timer",
  data() {
    return {
      year: "",
      month: "",
      day: "",
      full_day: "",
      time_now: "",
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
      days: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
    };
  },
  created() {
    this.timer();
  },
  methods: {
    timer() {
      let date = new Date();
      setTimeout(() => {
        this.time_now =
          date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
        this.year = date.getFullYear();
        this.month = this.months[date.getMonth()];
        this.day = date.getUTCDate();
        this.full_day = this.days[date.getDay()];
        this.timer(date);
      }, 1000);
    },
  },
};
</script>
