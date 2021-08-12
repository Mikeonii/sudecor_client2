<template>
  <div>
    <v-icon class="mr-2" color="warning" @click="show()">
      mdi-pencil
    </v-icon>
    <span class="warning--text">Edit</span>
    <v-dialog v-model="dialog" max-width="500">
      <v-card>
        <v-card-title primary-title>
          Edit Holiday
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
              label=""
            ></v-select>
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
  props: ["item"],

  data() {
    return {
      holiday_date: false,
      dialog: false,
      form: {
        id: this.item.id,
        holiday_name: this.item.holiday_name,
        date: this.item.date,
        type: this.item.type,
      },
      items: ["Regular", "Special"],
    };
  },
  methods: {
    show() {
      this.dialog = true;
    },
    submit() {
      this.$store
        .dispatch("holidays/edit_holiday", this.form, { root: true })
        .then(() => {
          alert("Successfully Edited");
          this.dialog = false;
        });
    },
  },
  created() {
    // console.log(this.item);
  },
};
</script>

<style></style>
