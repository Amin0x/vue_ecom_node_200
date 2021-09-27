
<template>
  <div id="app">
    <HeaderComponent></HeaderComponent>
    <HeaderBottom></HeaderBottom>
    
    <router-view/>

    <Footer></Footer>
  </div>
</template>

<script>
import HeaderBottom from './components/HeaderBottom.vue'
import HeaderComponent from './components/HeaderComponent.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    HeaderBottom,
    Footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
