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


body {
  background-color: aqua;
  border: 5px solid green;
}

</style>
