import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    
    links:[
      {
          path:'/home',
          name:'Kompaniya haqida',
      },
      {
          path:'/buyurtma',
          name:'Buyurtmani qanday qilish kerak',
      },
      {
          path:'/dokon',    
          name:'Bizning dokonlarimiz',
      },
      {
          path:'/qayta-aloqa',
          name:'Qayta aloqa',
      }
  ]
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_path,
  routes
})

export default router
