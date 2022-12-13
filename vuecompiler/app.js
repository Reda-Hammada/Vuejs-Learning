
// vue with compiler
let vm = Vue.createApp({
    data(){
        return {

            message:'Reda',
        }
    },
    template: `{{ message }}`



}).mount('#app')

// vue without compiler
let vm2 =  Vue.createApp({
    data(){
        return{
            name:'reda hammada'
        }
    },
    render(){
        return  Vue.h(
        "h2",
         this.name,
        )
    }

}).mount('#app2')