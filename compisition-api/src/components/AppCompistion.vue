<script>
import {
  ref,
  reactive,
  toRefs,
  watchEffect,
  watch,
  computed,
  onBeforeMount,
  onBeforeUpdate,
  onBeforeUnmount,
  onUnmounted,
  onActivated,
  onDeactivated,
  onMounted,
} from "vue";
import AppUser from "./AppUser.vue";

export default {
  name: "AppCompistion",
  components: {
    AppUser,
  },
  setup() {
    let num = ref(0);

    const user = reactive({
      name: "Reda",
      age: 22,
    });

    const increment = () => {
      num.value++;
    };

    const emitChangeUserName = () => {
      user.name = "Adam";
    };

    setTimeout(() => {
      user.age = 23;
    }, 3000);

    const renderReversedPhrae = () => {
      reveresedPhrase.value = phrase.value;
    };

    const phrase = ref("");
    const reveresedPhrase = ref("");

    // computed
    const double = computed(() => {
      return num.value * 2;
    });
    // watcher
    watch([phrase], ([newVal, oldVal]) => {
      renderReversedPhrae();
    });

    watchEffect(() => {
      renderReversedPhrae();
    });
    // lifecycle functions
    // onBeforeMount();
    onMounted(() => {
      console.log("mounted");
    });
    // onBeforeUpdate();
    // onUpdate();
    // onBeforeUnmount() = beforeDestory();
    // onUnmounted() = beforeDestory();
    //      // additional ones
    //      onActivated()
    //      onDeactivated()

    // // not supported
    //     beforeCreate();
    //     createImageBitmap();

    return {
      num,
      increment,
      ...toRefs(user),
      phrase,
      reveresedPhrase,
      double,
      user,
      emitChangeUserName,
    };
  },
};
</script>

<template>
  <app-user :user="user" @emitChangeUserName="changeUserName"> </app-user>

  <button @click="increment">click me!</button>
  <button @click="emitChangeUserName">changer username !</button>

  <input type="text" v-model="phrase" />

  {{ reveresedPhrase }}
  {{ double }}
</template>
