let vm = Vue.createApp({
 
})

vm.component('Hello',{

    template:`<h1>{{message}}</h1>`,

    data(){

        return{

            message:'Hello Component'
            
        }
    }
})

vm.mount("#app")