<script>
import { ref, reactive, toRefs, watchEffect,watch, computed } from "vue";

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

     const renderReversedPhrae =  () => {
        reveresedPhrase.value = phrase.value

     }

    const phrase  = ref('')
    const reveresedPhrase  = ref('')
    const double = computed(()=>{
        return num.value * 2
    })
    // watcher 
    watch([phrase], ([newVal,oldVal])=>{
        renderReversedPhrae();
    })

    watchEffect(() => {
         renderReversedPhrae();
    })


    return {
      num,
      increment,
      ...toRefs(user),
      phrase,
      reveresedPhrase,
      double,

    };
  },
};
</script>

<template>
  <p>{{ num }}</p>
  <p>{{ name }}</p>
  <p>{{ age }}</p>

  <button @click="increment">click me!</button>
  
  <input type="text"
         v-model="phrase"

         />

 {{ reveresedPhrase }}
 {{ double }}
</template>
