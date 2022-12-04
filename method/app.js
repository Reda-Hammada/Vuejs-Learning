Vue.createApp({
    data(){
        return{
            firstName:'Reda',
            lastName:'Hammada'
        }
    },
    methods:{
        fullName()
        {
            return `${this.firstName} ${this.lastName.toUpperCase()}`;
        }
    }
}).mount('#app')