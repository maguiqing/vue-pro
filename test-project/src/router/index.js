import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/home.vue'
import Hello from '@/components/HelloWorld.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]
})
