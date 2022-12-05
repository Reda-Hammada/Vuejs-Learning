const vm = Vue.createApp({
    data(){
        return{
            firstName:'Reda',
            lastName:'Hammada',
            url:'https://hammada-reda.com',
            raw_url:'<a href="https://hammada-reda.com" target="_blank">Reda Hammada</a>'
        }
    },
    methods:{
        fullName()
        {
            return `${this.firstName} ${this.lastName.toUpperCase()}`;
        }
    }
}).mount('#app')