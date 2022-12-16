<script>
  import Greeting from '@/components/Greeting.vue'
  import User from '@/components/User.vue'

  export default {
    name:'App',
    components:{
      Greeting,
      User,
    },
    data(){
      return{
        age:20
      }
    },
    methods:{
        update(num){
          this.age += num 
        },
        updateAgeCB(num){
           
          this.age += num
        }
    }

  }
</script>

<template>
  <div>
    <h1>Hello</h1>
    <button type="button" @click="update(3)">Update age</button>
    <Greeting v-bind:age="age"/>
    <User :age="age" @age-Change="update"  v-bind:updateAgeFN="updateAgeCB"></User>
  </div>
</template>
