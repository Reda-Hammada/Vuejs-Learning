<template>
    <form v-on:submit.prevent> 
        <slot>No form to render</slot>
    </form>
</template>
<script>
 export default {
    name:"Form",
 }
</script>