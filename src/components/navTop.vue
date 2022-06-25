<template>
 <div id="nav" class="px-5">
    <div class="logo">
     <router-link to="/first-product-page">
         <img src="../assets/logo/7.png" class="w-100" alt="">
      </router-link>
    </div>
    <div>
      <b-dropdown id="dropdown-1" variant="danger">
        <template #button-content>
          <div class="d-flex align-items-center px-4">
            <div class="d-flex flex-column drop-arrow">
              <div class="bg-white" style="height: 2px; margin: 2px 0;width:20px;"></div>
              <div class="bg-white" style="height: 2px; margin: 2px 0;width:18px;"></div>
              <div class="bg-white" style="height: 2px; margin: 2px 0;width:15px;"></div>
            </div>
            <div class="ms-2">
              Katalog
            </div>
          </div>
        </template>
         <div class="menu-top">
        <router-link
          v-for="(link , index) in links"
          :key="index"
          :to="link.path"
          :class="[
            {
              'bg-success': link.path == $route.path, 'text-danger': link.path != $route.path ,
            },
            link.icons
          ]"
          class="icon"
          >
         <div class="side-link">{{link.name}}</div>
        </router-link>

        
       
      </div>
      </b-dropdown>
    </div>
    <div class="w-25">
      <input class="search py-1 px-4 text-sm" type="search" name="" placeholder="Qidirmoq">
    </div>
    <div class="phone-section">
      <img src="../assets/phone_1.svg" alt="">
      <div class="block">
         <div class="num"><a href="tel:+99999999999">+998901234567</a></div>
         <span>Telefon orqali buyurtma berish</span>
      </div>
    </div>
   <Sidebar/>
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue';
export default {
  name: "navTop",
  components: {
    Sidebar
  },
   data(){
    return {
       links:[
      {
        name: "Bolalar mebellari",
        path: "/bola-mebel",
        icons: "icon-malish"
      },
      {
        name: "Oshxona mebellari",
        path: "/oshxona",
        icons: "icon-aksesuari"

      },
      {
        name: "Kantselyariya jihozlari",
        path: "/kanstovar",
        icons: "icon-konts"
      },
      {
        name: "Tozalash jihozlari",
        path: "/tozalash",
        icons: "icon-kosmetika"
      },
      {
        name: "Maishiy texnika",
        path: "/texnika",
        icons: "icon-aksesuari"
      },
      {
        name: "Oziq-ovqat",
        path: "/ovqat",
        icons: "icon-frukti"
      }
    ]
    }
   }
};
</script>

<style >
a{
  text-decoration: none;
}
#nav {
  width: 100%;
  justify-content: space-between;
  background: #fff;
  align-items: center;
  display: flex;
  height: 65px;
}
.dropdown-toggle::after {
  display: none !important;
}
.search{
  border: 1px solid #bbb;
  outline: none !important;
  border-radius: 100px;
  font-size: 14px;
  width: 100%;
}
.logo{
  width: 125px;
}
.phone-section{
  display: flex;
  box-sizing: border-box;
}
.phone-section img{
  width: 32px;
  margin-right: 10px;
}
.block{
  display:block;
  line-height: 1.2;
}
.num{
   text-align:left;
}
.num a{
   color: #323C41;
   font-size: 15px;
}
.block span{
  text-align:left;
  font-size: 14px;
  color: #999;
  font-family: SFRegular,sans-serif;
}
.menu-top{
  width: 250px;
}
.menu-top {
  padding: 1rem 0;
  display: grid;
}
.menu-top a{
  grid-template-columns: 1rem auto;
  align-items: center;
  padding: 12px 1rem;
  display: grid;
  gap: 1rem;
}
.menu-top .icon {
  font-size: 1.3rem;
  color: #dc0b0f;
}
.menu-top .side-link{
  color: #313b41;
  font-size: 16px;
  font-family: sans-serif;
  margin-left: 10px;
}
.menu-top a:hover{
  background-color: #FFE8E8;
  transform: scale(1.02);
  transition: all 0.2s;
}

</style>