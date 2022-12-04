Vue.createApp({
    data(){
        return {
            greeting: 'Hello World'

        }
    }
}).mount('#app1')

Vue.createApp({
    data(){
        return {
            greeting:'Hallo welt',
        }
    }
}).mount('#app2')