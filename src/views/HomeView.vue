<template>
  <div class="home">
    <Navbar/>
    <Header/>
    <HeaderTop />
    <CatalogMenu/>
    <!-- <Carousel/> -->
    <div class="inner px-5 mx-auto">
      <OurProduct />
      <Service/>
      <DiscountPage/>
      <Footer/>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue"
import Header from "../components/Header.vue";
import HeaderTop from "../components/HeaderTop.vue";
import CatalogMenu from "../components/CatalogMenu.vue"
import OurProduct from "../components/OurProduct.vue"
import Service from "../components/ServiceControl.vue"
import DiscountPage from "../components/DiscountPage.vue"
import Footer from "../components/Footer.vue"



export default {
  name: "HomeView",
  Navbar,
  components: {
    Header,
    HeaderTop,
    OurProduct,
    CatalogMenu,
    Service,
    DiscountPage,
    Footer,
},
};
</script>
<style>
 .home{
   width: 100%;
 }
</style>