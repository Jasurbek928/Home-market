<template>
 <div id="nav" class="px-5">
    <div class="logo">
      <img src="../assets/logo.png" alt="logo" class="w-100">
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
        <a href="#">
          <i class="icon-malish"></i>
          <span>Bolalar mebellari</span>
        </a>
        <a href="#">
          <i class="icon-aksesuari"></i>
          <span>Oshxona mebellari</span>
        </a>
        <a href="#">
          <i class="icon-konts"></i>
          <span>Kantselyariya jihozlari</span>
        </a>
        <a href="#">
          <i class="icon-kosmetika"></i>
          <span>Tozalash jihozlari</span>
        </a>
        <a href="#">
          <i class="icon-aksesuari"></i>
          <span>Maishiy buyumlar va aksessuarlar</span>
        </a>
        <a href="#">
          <i class="icon-frukti"></i>
          <span>Oziq-ovqat</span>
        </a>
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
  height: 80px;
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
</style>