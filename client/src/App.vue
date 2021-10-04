<template>  

<Nav />
<div class="container">
  <router-view/>
  </div>
</template>

<style lang="scss">


</style>

<script>
import Nav from "./components/Nav.vue";

export default {
  components:{
    Nav
  }
}
</script>

