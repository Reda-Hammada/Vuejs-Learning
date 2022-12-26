<script>
 export default{
  name:'Result',
  props:{
    results:{
      type:Array,
      required:true,
    },
    totalCorrect:{
      type:Number,
      required:true
    }
  },
  
 }
</script>

<template >
  <div  class="result">
    <div v-for="result in results" :key="result">
      <div v-show="totalCorrect == result.min">
          <div class="title" >
            {{ result.title }}
          </div>
          <div class="desc">
            {{ result.desc }}
          </div>
      </div>
    </div>

  </div>
</template>

<style>

</style>