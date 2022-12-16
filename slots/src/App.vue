<template>
 <div>
  <Form>
    <div class="help">
      <p>This is a register form.</p>
    </div>
    <div class="fields">
      <input type="text"
             placeholder="email"       
      >
      <input type="text"
             placeholder="username"       
      >
      <input type="password"
             placeholder="password"       
      >
    </div>
    <div class="buttons">
      <button  type="submit">Submit</button>
    </div>
  </Form>
  <Form>
    <div class="help">
      <p>This is a contact form.</p>
    </div>
    <div class="fields">
      <input type="text"
             placeholder="email"       
      >
      <input type="text"
             placeholder="username"       
      >
    </div>
    <div class="buttons">
      <button  type="submit">Submit</button>
    </div>
  </Form>
 </div>
</template

<script>
import Form from '@/components/Form.vue' 
  export default {
    name:"App",
    components:{
      Form,
    }
 
  }
</script>