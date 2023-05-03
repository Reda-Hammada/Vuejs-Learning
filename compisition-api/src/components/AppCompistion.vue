<script>
import { ref, reactive } from "vue";

export default {
  name: "AppCompistion",
  setup() {
    let num = ref(0);

    const increment = () => {
      num.value++;
    };

    return {
      num,
      increment,
      
    };
  },
};
</script>

<template>
  <p>{{ num }}</p>
  <!-- <p>{{ user.name }}</p> -->
  <button @click="increment">click me!</button>
</template>
