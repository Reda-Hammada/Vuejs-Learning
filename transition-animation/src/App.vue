<script>

    export default {
        name: "App",
        data(){
            return {
                flag:false,
                numbers:[1,2,3,4,5],
            }
        },
        methods:{
            Toggle(){
                this.flag = !this.flag;
            },
            beforEnter(el)
            {
                console.log('before-enter fired', el)
            },
            enter(el,done)
            {
                console.log('enter fired', el)

                 const animation = el.animate(
                    [{
                      transform:'scale3d(0,0,0)'
                    },
                    {
                        transform:'scale3d(1,2,6)'

                    }],
                    {
                     duration:1000,
                    }
                )

                animation.onfinish = () => {
                    done();
                }

            },
            afterEnter(el)
            {
                console.log('after-enter fired', el)

            },
            beforeLeave(el)
            {

                console.log('before-leave fired', el)

            },
            leave(el,done)
            {

                console.log('leave fired', el)
                const animation = el.animate(
                    [{
                      transform:'scale3d(1,2,6)'
                    },
                    {
                        transform:'scale3d(0,0,0)'

                    }],
                    {
                     duration:1000,
                    }
                )

                animation.onfinish = () => {
                    done();
                }

            },
            afterLeave(el)
            {
                console.log('after-leave fired', el)

            },
            addItem(){

                const number = Math.floor(Math.random() * 100 +1);
                const index = Math.floor(Math.random() * this.numbers.length);
                this.numbers.splice(index, 0,number)
                console.table(this.numbers)
            },
            removeItem(index){
                this.numbers.splice(index,1);
                console.table(this.numbers)
            }

        }
    }
 
</script>

<template>
    <div>
        <!-- <button @click="Toggle" type="button">Toggle</button>

        <button @click="Toggle" type="button">Toggle</button>
        <transition name="fade" mode="out-in">
            <h2 v-if="flag === true">Hello world!</h2>
            <h2 v-else>another hello</h2>
        </transition> -->
        <!-- <transition name="zoom" mode="out-in">
            <h2 v-if="flag == true">Hello browser</h2>
        </transition> -->
<!-- 

        <transition
            @before-enter="beforEnter"
            @enter="enter"
            @after-enter="afterEnter"
            @before-leave="beforeLeave"
            @leave="leave"
            @after-leave="afterLeave"
            :css = 'true'
        >
            <h2 v-if="flag == true">Hey</h2>
        </transition> -->

        <button v-on:click="addItem">Add</button>
        <ul>
           <transition-group name="fade">
                    <li 
                    v-on:click="removeItem(index)" 
                    v-for="(number, index) in numbers" 
                    :key="number">
                        {{ number }}
                    </li>

           </transition-group>
        </ul>
    </div>
</template>

<style>


h2{
   width:400px;
   padding:20px;
   margin:20px;
  }

 .fade-enter-from{

    opacity:0;
 
 }

 .fade-enter-active{

    transition:all 1s linear;
 }

 .fade-leave-to {

    transition:all 1s linear;
    opacity: 0;
 }

 .zoom-enter-active {

    animation: zoom-in 1s ease-in;

 }
 .zoom-leave-active{

    animation:zoom-out 1s ease-out ;

 }

 @keyframes zoom-in{
    from{

       transform: scale(0, 0);
    }

    to{

      transform: scale(1,1);
    }
 }


 @keyframes zoom-out{
    from{
        transform: scale(1,1);

    }

    to{
        transform: scale(0, 0);
    }
 }
</style>