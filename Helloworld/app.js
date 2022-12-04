
// Hello world 
const vm = Vue.createApp({
    data(){
        return {
            greeting: 'Hello World'

        }
    }
}).mount('#app1')

// multiple view instances
Vue.createApp({
    data(){
        return {
            greeting:'Hallo Welt',
        }
    }
}).mount('#app2')

setTimeout(()=>{
    // accessing vue data 
    vm.greeting = 'Bonjour';
},2000);