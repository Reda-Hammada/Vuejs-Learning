<script>
  import {ref,reactive} from 'vue';

    export default{
        name:'AppCompistion',
        setup() {
            let num = ref(0);
            const user =  reactive({
                name: 'John',
                age: 20,
            })

            const increment =  () =>{
                num.value++;
            }
             setTimeout(()=>{
                user.name = 'Reda'
             },3000)

           return{
            num,
            increment,
            user
           };
        }
    
    }
</script>

<template>
    <p>{{ num }}</p>
    <p>{{user.name}}</p>
    <button @click="increment">click me!</button>
</template>