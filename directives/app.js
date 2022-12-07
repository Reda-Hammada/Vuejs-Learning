const vm = Vue.createApp({
    data(){
        return{
            
            firstName:'Reda',
            lastName:'Hammada',
            age:20,
            url:'https://hammada-reda.com',
            raw_url:'<a href="https://hammada-reda.com" target="_blank">Reda Hammada</a>',
            occupation:'Vue js Developer',

        }
    },
    methods:{

        
        
        updateLastName(msg,event)
        {   
           console.log(msg)
           this.lastName  = event.target.value
        },

        increment()
        {
            this.age++
        },
        decrement()
        {
            this.age--
        },

        setOccupation(event){

            this.occupation = event.target.value
        }
    },
    computed:{
        fullName()
        {   
            console.log('full name method is called in every render');
            return `${this.firstName} ${this.lastName.toUpperCase()}`;
        }
      
    },  
    watch:{
        age(newVal, oldVal){
            setTimeout(() =>{this.age = 75},3000)
        }

    }
 
    
}).mount('#app')