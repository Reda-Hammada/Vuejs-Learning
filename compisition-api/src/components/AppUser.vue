<script>
import { defineProps } from "vue";

export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
  },

  setup(props, context) {
    context.emit("changeUserName");
    const user = props.user;

    return {
      user,
    };
  },
};
</script>
<template>
  <p>
    {{ user.name }}
  </p>
  <p>
    {{ user.age }}
  </p>
</template>
