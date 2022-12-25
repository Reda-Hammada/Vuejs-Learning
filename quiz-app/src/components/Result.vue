<script>
 export default{
  name:'Result',
  props:{
    results:{
      type:Array,
      required:true,
    }
  },
  returnResult(){
  
  }
 }
</script>

<template>
  <div v-for="result in results" :key="result" class="result">
    <div class="title" >
       {{ result.title }}
    </div>
     <div class="desc">
      {{ result.desc }}
     </div>

  </div>
</template>

<style>

</style>