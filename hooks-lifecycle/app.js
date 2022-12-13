let vm = Vue.createApp({
    data()
    {
        return{

            message:'hello world',
        }

    },
    beforeCreate(){
        console.log('beforeCreate() function called',  this.message)
    },
    created(){
        console.log('create() function called',  this.message)

    },
    beforeMount(){
        console.log('beforeMount() function called',  this.$el)
    },

    mounted(){
        console.log('beforeMount() function called',  this.$el)

    },
    beforeUpdate(){
        console.log('beforeUpdate was called')
    },
    updated(){
        console.log('updated method was called')
    },
    beforeUnmount(){
        console.log('beforeUnmount function called')
    },
    unmounted(){
        console.log('unmounted function called')
    }
})

vm.mount('#app');