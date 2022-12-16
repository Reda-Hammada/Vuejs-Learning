<template>
    <div>
        <p v-if="age >= 25">{{msg}}</p>
        <p v-else>You must be 25 years old or older to view this message</p>
    </div>
</template>

<script>
export default {
  name:'Greeting',
  props:['age'],
  data(){
    return {
        msg:'Hello World!',
    }
  }
}
</script>
<style scoped lang="scss">
    p:hover {
        color:darken($color: #000000, $amount: 0)
    }
</style>