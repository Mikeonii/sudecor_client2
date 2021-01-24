<template>
  <div>
    <v-row>
      <v-col cols="2">
        <v-hover v-slot="{ hover }">
          <v-card
            :elevation="hover ? 12 : 2"
            @click="clicks('login')"
            :color="color1"
            max-width="300"
            class="pa-10 "
          >
            <v-card-title><h1>Login</h1></v-card-title>
          </v-card>
        </v-hover>
      </v-col>
      <v-col cols="2">
        <v-hover v-slot="{ hover }">
          <v-card
            :elevation="hover ? 12 : 2"
            @click="clicks('logout')"
            :color="color2"
            max-width="300"
            class="pa-10 "
          >
            <v-card-title><h1>Logout</h1></v-card-title>
          </v-card>
        </v-hover>
      </v-col>
      <v-col cols="2">
        <v-text-field></v-text-field>
        <p class="overline">Tap your ID</p>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  name: "Textfield",
  data() {
    return {
      is_login: null,
      color1: "grey white--text",
      color2: "grey white--text",
    };
  },
  methods: {
    clicks(text) {
      if (text == "login") {
        this.is_login == true;
        this.color1 = "green white--text";
        this.color2 = "grey white--text";
      } else {
        this.is_login == false;
        this.color1 = "grey white--text";
        this.color2 = "green white--text";
      }
    },
  },
  computed: {},
};
</script>
