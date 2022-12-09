let vm = Vue.createApp({
    data(){
        return{

            rotateX:0,
            rotateZ:0,
            rotateY:0,
        }
      
    },
    methods:{
        reset(){
            this.rotateX = 0
            this.rotateZ =0
            this. rotateY =0
        }
    },
    computed:{
        
        setRotate(){
            
            return `rotateX(${this.rotateX}deg)`
            
        }
    }
}).mount('#app')


