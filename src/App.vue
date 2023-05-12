<!-- App.vue -->

<template>
  <div>
    <navbar-collect/>
    <landing-page/>
    <footer-comp/>
  </div>
</template>

<script>
import NavbarCollect from './components/NavbarCollect.vue'
import LandingPage from './components/LandingPage.vue'
import FooterComp from './components/FooterComp.vue'

export default {
  name: 'App',
  components: {
    NavbarCollect,
    LandingPage,
    FooterComp,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  border: none;
  background-color: #f5f6fa;
  
}

body {
    background-color: #f5f6fa;
}
</style>
