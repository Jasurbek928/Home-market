<template>
<div class="inner mx-auto">
  <div id="nav" class="px-5 " style="padding:15px ;">
      <div class="logo">
        <router-link to="/first-product-page">
         <img src="../assets/logo/7.png" class="w-100" alt="">
        </router-link>
      </div>
      <div class="phone-section">
        <img src="../assets/phone_1.svg" alt="" style="width:45px ;">
        <div class="block">
          <div class="num"><a href="tel:+99999999999">+998 90<b>123-45-67</b></a></div>
          <span>Telefon orqali buyurtma berish</span>
        </div>
      </div>
      <div style="width:300px;">
        <input  @change="inputSearch()" style="height:40px" class="search py-1 px-4 text-sm" type="search" name="" placeholder="Qidirmoq">
      </div>
      <Sidebar/>
  </div>
</div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue';
export default {
  name: "HeaderTop",
  components: {
    Sidebar
  },
  methods:{
    inputSearch(e){
      console.log(e)
    }
  }
};

</script>

<style >
a{
  text-decoration: none;
}
#nav {
  justify-content: space-between;
  background: #fff;
  align-items: center;
  /* position: absolute; */
  /* position: fixed; */
  z-index: 10;
  display: flex;
  right: 0;
  left: 0;
  top: 0;
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
b{
  font-size: 24px;
  color: #323c41;
}
</style>