const vm = Vue.createApp({
    data()
    {
        return{
         mode:true,
        }
    },
    methods:
    {
        togglePara(){
            
           this.mode = !this.mode
        }
    },
}).mount('#app')