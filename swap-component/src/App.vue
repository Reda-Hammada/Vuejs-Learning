<template>

  <!--the component gets unmounted when swaped -->

  <div>
    <select v-model="componentName">
      <option value="Home">Home</option>
      <option value="About">About</option>
    </select>
    
    <!--this prevent the component from getting unmounted after being swaped as a result data and methods will be still available-->
  <keep-alive>
    <component :is="componentName"></component>
  </keep-alive>
  </div>
</template>

<script>
 import Home from '@/components/Home.vue'
 import About from '@/components/About.vue'
export default {
  name:"App",
  components:{
    Home,
    About
  },
  data()
  {
    return{
      componentName:'Home',
    }
  }
}
</script>
