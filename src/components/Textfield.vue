<template>
  <div>
    <v-row>
      <v-col cols="4">
        <v-text-field
          ref="text_input"
          @paste="pasted"
          :value="text_field_value"
        ></v-text-field>
        <p class="overline">CARD NUMBER</p></v-col
      >
    </v-row>
    <v-row>
      <v-col cols="2">
        <v-hover v-slot="{ hover }">
          <v-card
            :elevation="hover ? 12 : 2"
            @click="clicks('login')"
            :color="color1"
            max-width="300"
            class="pa-8 "
          >
            <v-card-title
              ><h1>
                <v-icon color="white" large class="pr-2"
                  >mdi-login-variant</v-icon
                >Login
              </h1></v-card-title
            >
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
            class="pa-8 "
          >
            <v-card-title
              ><v-icon color="white" large class="pr-2">mdi-door-open</v-icon>
              <h1>Logout</h1></v-card-title
            >
          </v-card>
        </v-hover>
      </v-col>
      <v-col cols="2"> </v-col>
    </v-row>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Textfield",
  data() {
    return {
      is_login: true,
      color1: "grey white--text",
      color2: "grey white--text",
      pasted_value: null,
      text_field_value: "",
    };
  },
  methods: {
    clicks(text) {
      this.$refs.text_input.focus();
      if (text == "login") {
        this.is_login == true;
        this.color1 = "green white--text";
        this.color2 = "grey white--text";
      } else {
        this.is_login = false;
        this.color1 = "grey white--text";
        this.color2 = "green white--text";
      }
    },
    async send(request) {
      let response = await axios.post("/insert_attendance", request);
      return response;
    },
    pasted(event) {
      this.pasted_value = event.clipboardData.getData("text");
      let request = {
        card_number: this.pasted_value,
        is_in: this.is_login,
      };
      //   send using axios
      this.send(request).then((response) => {
        window.alert(response.data);
      });
    },
  },
  mounted() {
    this.$refs.text_input.focus();

    this.color1 = "green white--text";
    this.color2 = "grey white--text";
  },
  computed: {},
};
</script>
