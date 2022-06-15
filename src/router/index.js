import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: 'first-product-page',
    component: HomeView,
    children:[
      {
        path:'first-product-page',
        name:'Yuvish vositalari',
        component:()=>import("../components/Categories/YuvishVosita.vue")
      },
      {

        path:'mebel',
        name:'Mebellar',
        component:()=> import("../components/Categories/Mebel.vue")
      },
      {
        path:'story',
        name:'FarmStory',
        component:()=> import("../components/Categories/FarmStory.vue")
      },
      {
        path:'cake',
        name:'PlumCake',
        component:()=> import("../components/Categories/PlumCake.vue")
      },
    ],
   
  },
  {
    path: '/category/:id',
    name: 'category',
    component: () => import('../views/CategoryView.vue'),
   
   
  }
]




const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_path,
  routes
})

export default router
