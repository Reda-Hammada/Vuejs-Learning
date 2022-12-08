const vm = Vue.createApp({
    data(){
        return{

            isPurple:false,
            selectedColor:'',
            size:100,
        }
    },
    computed:{
        circle_classes() {
            console.log('purple toggled')
            return{ purple: this.isPurple }
        },
        circle_style(){
        console.log(' size changed')
        return `${this.size}px`
        }
    }

}).mount('#app')