const vm = Vue.createApp({
    data()
    {
        return{
         mode:true,
         number:1,

        }
    },
    methods:
    {
        togglePara(){
            
           this.mode = !this.mode
        }
    },
}).mount('#app')