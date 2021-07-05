<template>
  
  <div class="container">
    <b-navbar class="notification has-background-grey-lighter">
      <template #brand>
        <b-navbar-item tag="router-link" :to="{path:'/'}">
           <img
                    src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
                    alt="Lightweight UI components for Vue.js based on Bulma"
                >
                
        </b-navbar-item>   
      </template>
      <template #start>
          <router-link class="navbar-item"  to="/">Home</router-link>
          <router-link class="navbar-item"  to="/todonormal">Todo List(Normal)</router-link>
          <!-- <router-link class="navbar-item"  to="/todovuex">Todo List(By Vuex)</router-link> -->
          <router-link class="navbar-item"  to="/userlist">List Of User(Using Given Api)</router-link>
      </template>

            <template #end>
          <router-link class="navbar-item"  to="/signup">Sign Up</router-link>
          <router-link class="navbar-item"  to="/login">Login</router-link>
         </template>
    </b-navbar>
  </div>
    

 
</template>
<script>
export default {
  name:'Head',

    data() {
        return {
            indicator: true,
            indicatorBackground: false,
            indicatorInside: true,
            indicatorMode: 'hover',
            indicatorPosition: 'is-bottom',
            indicatorStyle: 'is-lines',
            carousels: [
                { title: 'Slide 1', color: 'info' },
                { title: 'Slide 2', color: 'success' },
                { title: 'Slide 3', color: 'warning' },
                { title: 'Slide 4', color: 'danger' }
            ]
        }
    }
}
</script>
<style scoped>

.notification a:not(.button):not(.dropdown-item) {
    color: currentColor;
    text-decoration: none;
}
</style>