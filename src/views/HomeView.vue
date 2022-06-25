<template>
  <div class="home">
    <NavbarComp/>
    <Header/>
    <HeaderTop />
    <CatalogMenu/>
    <div class="inner px-5 mx-auto">
      <OurProduct />
      <Service/>
      <DiscountPage/>
      <Footer/>
      <hr>
      <FooterTop/>
    </div>
  </div>
</template>

<script>
import NavbarComp from "../components/NavbarComp.vue"
import Header from "../components/Header.vue";
import HeaderTop from "../components/HeaderTop.vue";
import CatalogMenu from "../components/CatalogMenu.vue"
import OurProduct from "../components/OurProduct.vue"
import Service from "../components/ServiceControl.vue"
import DiscountPage from "../components/DiscountPage.vue"
import Footer from "../components/Footer.vue"
import FooterTop from "../components/FooterTop.vue"



export default {
  name: "HomeView",
  components: {
    NavbarComp,
    Header,
    HeaderTop,
    OurProduct,
    CatalogMenu,
    Service,
    DiscountPage,
    Footer,
    FooterTop
},
};
</script>
<style>
 .home{
   width: 100%;
 }
</style>