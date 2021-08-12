<template>
  <div>
    <v-btn small elevation="2" color="primary" @click="show()"
      >Add Holiday</v-btn
    >
    <v-dialog v-model="dialog" max-width="500">
      <v-card>
        <v-card-title primary-title>
          Add Holiday
        </v-card-title>
        <v-card-text>
          <v-form>
            <v-text-field
              type="text"
              placeholder="Enter Holiday Name"
              label="Holiday Name"
              v-model="form.holiday_name"
              outlined
              color
            ></v-text-field>
            <v-menu
              v-model="holiday_date"
              transition="scale-transition"
              offset-y
              max-width="290px"
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  readonly
                  v-model="form.date"
                  label="Please Select Date"
                  hint="YYYY-MM-DD format"
                  persistent-hint
                  prepend-icon=""
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="form.date"
                no-title
                @input="menu1 = false"
              ></v-date-picker>
            </v-menu>
            <v-select
              color
              v-model="form.type"
              :items="items"
              filled
              label="Holiday Type"
            >
            </v-select>
          </v-form>
        </v-card-text>
        <v-card-actions class="d-flex">
          <v-btn color="primary" class="justify-end" @click="submit()"
            >Submit</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      holiday_date: false,
      dialog: false,
      items: ["Special", "Regular"],
      form: {
        holiday_name: "",
        date: "",
        type: "",
      },
    };
  },
  methods: {
    show() {
      this.dialog = true;
    },
    submit() {
      this.$store
        .dispatch("holidays/add_holiday", this.form, { root: true })
        .then(() => {
          alert("Holiday Added Successfully");
        });
    },
  },
};
</script>

<style></style>
