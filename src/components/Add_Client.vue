<template>
  <div>
    <v-btn @click.stop="dialog = true" text>
      <span class="mr-2">Add Client</span>
      <v-icon>mdi-account</v-icon>
    </v-btn>
    <v-dialog v-model="dialog" class="" max-width="400">
      <v-card>
        <v-card-title class="headline">Add Client</v-card-title>
        <v-card-subtitle
          >This form adds new user to the database</v-card-subtitle
        >
        <v-card-text>
          <v-text-field
            v-model="form.name"
            label="Name"
            placeholder="Please Enter Name"
          ></v-text-field>
          <v-text-field
            v-model="form.card_number"
            label="Card Number"
            placeholder="Please Tap your Card"
          ></v-text-field>
          <!-- <v-select
            v-model="form.department"
            :items="departments"
            label="Department"
            placeholder="Please Select Department"
          ></v-select> -->
          <v-btn color="success" @click="add_user()">Add</v-btn>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      dialog: false,
      form: {
        name: "",
        department: "",
        card_number: "",
      },
      // departments: ["Accounting", "Canteen", "HR", "Admin"],
    };
  },
  methods: {
    async add_user() {
      if (this.form.name == "" || this.form.card_number == "") {
        alert("Please fill up all the fields");
      } else {
        await axios.post("/insert_client", this.form).then((response) => {
          alert(response.data);
          this.form.name = "";
          this.form.department = "";
          this.form.card_number = "";
        });
      }
    },
  },
};
</script>
