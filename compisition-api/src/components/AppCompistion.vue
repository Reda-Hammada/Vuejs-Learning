<script>
import { ref, reactive, toRefs } from "vue";

export default {
  name: "AppCompistion",
  setup() {
    
    let num = ref(0);

    const user = reactive({
      name: "Reda",
      age: 22,
    });
    const increment = () => {
      num.value++;
    };

    setTimeout(() => {
      user.age = 23;
    }, 3000);

    return {
      num,
      increment,
      ...toRefs(user),
    };
  },
};
</script>

<template>
  <p>{{ num }}</p>
  <p>{{ name }}</p>
  <p>{{ age }}</p>

  <button @click="increment">click me!</button>
</template>
