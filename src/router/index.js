import Vue from "vue";
import Router from 'vue-router'
Vue.use(Router);


export default new Router({
  routes: [
    // {
    //   name: "login",
    //   path: "/login",
    //   component: () => import("@/views/Login")
    // },
    {
      name:'TodoNormal',
      path:'/todonormal',
      component: () => import("@/views/TodoNormal")
    },    
    {
      name:'TodoVuex',
      path:'/todovuex',
      component: () => import("@/views/TodoVuex")
    },    
    {
      name:'UserList',
      path:'/userlist',
      component: () => import("@/views/UserList")
    },    
            
  ]


})