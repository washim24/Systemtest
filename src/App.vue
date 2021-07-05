<template>
  <div  id="app">
    <Head/> 
      <div class="container">
       <router-view/>
      </div>
    <Footer/>
  </div>
      
</template>

<script>

import Head from './components/Practice/Head.vue'
import Footer from './components/Footer.vue'
export default {

  components:{ 
      Head,
      Footer

  },
  name: 'App',
}
</script>


