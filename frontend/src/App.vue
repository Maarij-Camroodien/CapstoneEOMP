<template>
  <div>
    <NavbarComp/>
    <router-view/>
    <FooterComp/>
  </div>
</template>

<script>
import NavbarComp from './components/NavbarComp.vue';
import FooterComp from './components/FooterComp.vue';
    export default {
      components: {
        NavbarComp,
        FooterComp
      },
      mounted() {
        this.$store.dispatch("fetchProducts")
      }  
    }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

</style>
