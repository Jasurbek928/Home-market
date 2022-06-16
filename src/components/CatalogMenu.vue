<template>
   <div class="inner mx-auto">
     <div class="showCase">
      <div class="menu">
        <div class=" text-white d-flex align-items-center" style="background-color:#dc0b0f;padding: 14px;">
          <div class="d-flex flex-column drop-arrow mx-2" style="width:20px;">
            <div class="bg-white" style="height: 2px; margin: 2px 0;"></div>
            <div class="bg-white" style="height: 2px; margin: 2px 0;"></div>
            <div class="bg-white" style="height: 2px; margin: 2px 0;"></div>
          </div>
          <div class="ms-2">
            KATALOG
          </div>
        </div>
      <div class="menu-top">
        <router-link to="/category/1">
          <i class="icon-malish"></i>
          <span>Bolalar mebellari</span>
        </router-link>
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
        <router-link to="/category/5">
          <i class="icon-aksesuari"></i>
          <span>Maishiy texnika</span>
        </router-link>
        <a href="#">
          <i class="icon-frukti"></i>
          <span>Oziq-ovqat</span>
        </a>
      </div>
      </div>
      <div class="carousel-box pe-3">
        <VueSlickCarousel class="carousel-item"
          :arrows="false"
          :dots="true"
          autoplay="true"
          auto-play-speed="1000"
         
        >
        <div class="a123">
          <img class="w-100" src="../assets/img/carousel-img/1.jpg" alt="">
        </div>
        <div>
          <img class="w-100" src="../assets/img/carousel-img/2.jpg" alt="">
        </div>
        <div>
          <img class="w-100" src="../assets/img/carousel-img/4.jpg" alt="">
        </div>
         <div>
          <img class="w-100" src="../assets/img/carousel-img/6.jpg" alt="">
        </div>
         <div>
          <img class="w-100" src="../assets/img/carousel-img/5.jpg" alt="">
        </div>
         <div>
          <img class="w-100" src="../assets/img/carousel-img/3.jpg" alt="">
        </div>
        </VueSlickCarousel>
      </div>
     </div>
   </div>

</template>

<script>
 import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  name: 'MyComponent',
    components: { VueSlickCarousel },
}
</script>

<style>
:root {
  --width: 300px;
  --gap: 1rem;
}
.showCase{
    display: flex;
    gap: var(--gap);
    margin-top: 20px;
}
.menu {
  width: var(--width);
  margin-left: 30px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  box-shadow: 0 5px 1rem #0003;
  background: #fff;
  text-align: left;
}
.carousel-box {
  width: calc(100% - var(--width));
  
}
.carousel-box div, .carousel-box img {
  height: 100%;
}
.carousel-box .slick-dots {
  bottom: 10px;
}
.carousel-box .slick-dots li button::before {
  color: #fff;
  font-size: 15px;
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
.menu-top i {
  font-size: 1.3rem;
  color: #dc0b0f;
}
.menu-top a span{
  color: #313b41;
  font-size: 16px;
  font-family: sans-serif;
}
.menu-top a:hover{
  background-color: #FFE8E8;
  transform: scale(1.1);
  transition: all 0.4s ease-in-out;
}
.carousel-box .slick-dots li button::before {
    color: #fff;
    font-size: 15px;
}


</style>