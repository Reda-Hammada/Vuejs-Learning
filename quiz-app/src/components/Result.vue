<script>
 export default{
  name:'Result',
  props:{
    results:{
      type:Array,
      required:true,
    }
  }

 }
</script>

<template>
  <div v-for="result in results" :key="result" class="result">
    <div class="title" v-if="result.max <=2 ">
       {{ result.title }}
    </div>

    <div v-if="result.max <= 2" :key=" result.desc" class="dec">
      {{ result.desc }}
    </div>
 
  </div>
</template>

<style>

</style>