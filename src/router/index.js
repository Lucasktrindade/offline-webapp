import Vue from 'vue'
import Router from 'vue-router'
import Showcase from '@/pages/Showcase'
import Cart from '@/pages/Cart'
import {firebaseInstance, db} from '@/services/FirebaseService'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Showcase',
      component: Showcase,
      beforeEnter: (to, from, next) => {
        db().collection('products').get()
          .then((querySnapshot) => {
            querySnapshot.forEach((value) => {
              console.log(value)
            })
          })
        next()
      }
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart,
      beforeEnter: (to, from, next) => {
        db().collection('cart').get()
          .then((querySnapshot) => {
            querySnapshot.forEach((value) => {
              console.log(value)
            })
          })
        next()
      }
    }
  ]
})
