<template>
      <section id="products">
      <div class="container-product">
          <div class="title">Ommabop tovarlar</div>
          <div class="variants">
              <router-link 
                v-for="(variant, index) in variants"
                :key="index"
                :to="variant.path"
                class="variant"
                :class="{'bg-danger': variant.path == $route.path, 'text-dark': variant.path != $route.path }"
                >
                {{variant.name}}
                </router-link>
          </div>
          <router-view></router-view>
      </div>
  </section>


</template>

<script>
export default {
    name: "OurProduct",
    data(){
      return{
        variants: [
          {
            id: 1,
            name: "Yuvish Vositalari",
            path: "/first-product-page"
          },
          {
            id: 2,
            name: "Mebel",
            path: "/mebel"
          },
          {
            id: 3,
            name: "Maishiy Texnika",
            path: "/maishiy-texnika"
          },
          {
            id: 4,
            name: "PLUM CAKE",
            path: "/cake"
          },
         
        ],
      }
    }
}
</script>

<style>
#products{
  margin-top: 30px;
}

.title{
  font-family: 'SFRegular', sans-serif;
  text-align: center;
  color: #333;
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 20px;
}
#products .variants {
  text-align: center;
  padding: 20px 0;
  
}
#products .variants .variant {
  display: inline-block;
  padding: 5px 20px;
  font-size: 14px;
  cursor: pointer;
  text-decoration: none;
  justify-content: center;
  width: 220px;
  line-height: 40px;
  border-radius: 30px;
  margin: 0 20px;
  align-items: center;
  color: #fff;
  text-align: center;
  border: 1px solid #b2b2b2;
  position: relative;
  text-transform: uppercase;
}
#products .variants .variant.active,
#products .variants .variant:hover {
  color: #fff !important;
  transition: all 0.3s ease-in-out;
  border-color: #dc0b0f;
  background-color: #DC3545;
  box-shadow: 0 5px 10px 0 rgb(0 0 0 / 12%);
}
</style>