<template>
  <div>
    <v-row>
      <v-col>
        <v-text-field
          v-model="text_field_value"
          ref="text_input"
          @keydown="pasted"
        ></v-text-field>
        <p class="overline">CARD NUMBER</p></v-col
      >
    </v-row>
    <v-row class="d-flex justify-center">
      <v-col cols="2">
        <v-hover v-slot="{ hover }">
          <v-card
            :elevation="hover ? 12 : 2"
            @click="clicks('login')"
            :color="color1"
            class="pa-8 "
          >
            <v-card-title
              ><h2>
                Login
              </h2></v-card-title
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
            class="pa-8 "
          >
            <v-card-title> <h2>Logout</h2></v-card-title>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import { mapActions } from "vuex";
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
      response: null,
    };
  },
  methods: {
    changed() {
      // if (this.text_field_value == "activate_admin_sudecor") {
      //   this.text_field_value = "";
      //   // activate admin mode
      //   this.set_is_admin_active(true);
      //   alert("You are now in Admin Mode");
      // } else if (this.text_field_value == "deactivate_admin_sudecor") {
      //   this.text_field_value = "";
      //   // deactivate admin mode
      //   alert("Admin mode is now deactivated");
      //   this.set_is_admin_active(false);
      // }
    },
    reset_field() {
      this.text_field_value = "";
    },
    ...mapActions({
      insert_client: "client/insert_client",
      set_error_message: "client/set_error_message",
      set_is_admin_active: "client/set_is_admin_active",
    }),
    clicks(text) {
      this.$refs.text_input.focus();
      // console.log("text: " + text);
      if (text == "login") {
        this.is_login = true;
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
      // if (response.data == "0") {
      //   return "Card Not Registered";
      // } else {
      //   return response;
      // }
      return response;
    },
    pasted(event) {
      // this.pasted_value = event.clipboardData.getData("text");
      if (this.$refs.text_input.value.length == "10") {
        const request = {
          card_number: this.$refs.text_input.value,
          is_in: this.is_login,
        };

        //   send using axios
        this.send(request).then((response) => {
          if (response.data == "0") {
            this.$emit("db_response", "Card Not Registered");
            location.reload();
          } else {
            console.log("is_in: " + request.is_in);
            console.log("response: " + response.data);
            this.$emit("db_response", response.data);
            this.reset_field();
          }
        });
      } else if (this.$refs.text_input.value == "admin") {
        console.log("admin");
        // activate admin mode
        this.set_is_admin_active(true);
        alert("You are now in Admin Mode");
      }
    },
  },
  mounted() {
    this.$refs.text_input.focus();
    // this.always_focus();
    this.color1 = "green white--text";
    this.color2 = "grey white--text";
  },
  computed: {},
};
</script>
<style scoped></style>
