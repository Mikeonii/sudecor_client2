<template>
  <div class="home">
    <Time />
    <Textfield />
  </div>
</template>

<script>
import Time from "@/components/Time.vue";
import Textfield from "@/components/Textfield.vue";

export default {
  name: "Home",
  components: { Time, Textfield },
};
</script>
