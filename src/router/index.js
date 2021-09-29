import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ProductDetails from '@/components/ProductDetails'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/products',
      name: 'ProductDetails',
      component: ProductDetails
    },
    {
      path: '/products/1',
      name: 'ProductDetails',
      component: ProductDetails
    },
    {
      path: '/categories',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
