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
        path:'maishiy-texnika',
        name:'Maishiy texnika',
        component:()=> import("../components/Categories/MaishiyTexnika.vue")
      },
      {
        path:'oyinchoq',
        name:'Oyinchoqlar',
        component:()=> import("../components/Categories/Toys.vue")
      },
    ],
   
  },
  {
    path: '/bola-mebel',
    name: 'category',
    component: () => import('../components/SidebarCategories/BabyMebel.vue'),
  },
  {
    path: '/oshxona',
    name: 'category',
    component: () => import('../components/SidebarCategories/OshxonaMebel.vue'),
  },
  {
    path: '/kanstovar',
    name: 'category',
    component: () => import('../components/SidebarCategories/KanstovarJihoz.vue'),
  },
  {
    path: '/tozalash',
    name: 'category',
    component: () => import('../components/SidebarCategories/TozalashJihoz.vue'),
  },
  {
    path: '/texnika',
    name: 'category',
    component: () => import('../components/SidebarCategories/MaishiyTexnika.vue'),
  },
  {
    path: '/ovqat',
    name: 'category',
    component: () => import('../components/SidebarCategories/OziqOvqat.vue'),
  },
  
]




const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_path,
  routes
})

export default router
