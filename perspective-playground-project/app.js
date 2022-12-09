let vm = Vue.createApp({
    data(){
        return{

            perspective:0,
            rotateX:0,
            rotateZ:0,
            rotateY:0,
        }
    },
    methods:{
        
        reset(){
            this.perspective=0,
            this.rotateX = 0
            this.rotateZ =0
            this. rotateY =0
        }
    },
    computed:{

        setBox(){
            return { transform:`
                    perspective(${this.perspective}px)
                    rotateX(${this.rotateX}deg)
                    rotateY(${this.rotateY}deg)
                    rotateZ(${this.rotateZ}deg)`

                }
            } 
        }
        
    
}).mount('#app')


