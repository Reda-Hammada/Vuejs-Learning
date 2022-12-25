<script>
 export default{
  name:'Questions',
  props:{
    questions:{
      type:Array,
      required:true,
    },
    questionsAnswered:{
      type:Number,
      required:true,
    }
  },
  methods:{
    getAnswer(is_correct){
        this.$emit('updateQuestionsAnswered');
        if(is_correct){
          this.$emit('updateTotalCorrect')
        }
     }
     
  }
}

</script>

<template>
   <div class="questions-ctr">
     <div class="progress"> 
       <div class="bar" :style="{width: `${(questionsAnswered / questions.length)*100}% ` }"></div>
       <div class="status">{{ questionsAnswered }} out of {{ questions.length }} questions answered</div>
     </div>
    
     <div v-for="(question,index) in questions"  :key="question.q"  class="single-question">
      <div v-show="questionsAnswered == index">
        <div  class="question">{{ question.q }}</div>
          <div class="answers">
            <div  @click="getAnswer(answer.is_correct)" v-for="answer in question.answers" :key="answer.answers" class="answer">
              {{ answer.text }}
            </div>
        
        </div>
      </div>
     </div>
   </div>
</template>

<style>

</style>