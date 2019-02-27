import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import grantapp from './views/Grantapp.vue'
import contact from './views/Contact.vue'
import events from './views/Events.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/events',
      name: 'events',
      component: events
    },
    {
      path: '/grants',
      name: 'grants',
      component: grantapp
    },
    {
      path: '/events',
      name: 'events',
      component: events
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    }

  ]
})
