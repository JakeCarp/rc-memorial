import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
<<<<<<< HEAD
import sponsor from './views/Sponsor.vue'
=======
>>>>>>> b5365ddd6b428d6bb1f09de50c5d1c207c81fd6a
import grantapp from './views/GrantApp.vue'
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
    },
    {
      path: '/sponsor',
      name: 'sponsor',
      component: sponsor
    }

  ]
})
