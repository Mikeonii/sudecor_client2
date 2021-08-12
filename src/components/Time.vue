<template>
  <v-card class="pa-10 mt-15 text-center">
    <v-card-text class="mt-15 text-center">
      <h1>{{ time_now }}</h1>
      <br />
      <p class="mt-15">Today is:</p>

      <h2 class=" subtitle">
        {{ month }}, {{ day }} {{ year }}
        <v-chip color="green white--text" x-large class="mt-2 subtitle2">{{
          full_day
        }}</v-chip>
      </h2>
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
        this.day = date.getDate();
        this.full_day = this.days[date.getDay()];
        this.timer(date);
      }, 1000);
    },
  },
};
</script>
