<template>
  <div>
    <p>The user is {{ age }} years old</p>
  <button type="button" @click="updateAge()">Update age</button>
  <button type="button" @click="updateAgeFN(3)">Update ageFN</button>

  </div>

</template>

<script>
export default {
    name:'User',
    props:{
      age:{
         type:Number,
        //  required:true,
        //  default:23
        /* this run before  the component is created.As a result, 
        we won't have access to the data and methods and methods in computed */
        // validator(value){

        //   return value > 30
        // }
      },
      updateAgeFN:{
        type:Function,
        required:true
      }
    },
    emits:['age-Change'],
    methods:{
        updateAge(){
            this.$emit('age-Change',3)
        }
    }
}
</script>
