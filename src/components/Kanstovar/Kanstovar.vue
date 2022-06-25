<template>
  <div class="card-item">
    <KanstovarChild
      v-for="(product,id) in products"
      :key="id"
      :product="product"
     />
  </div>
</template>

<script>
import KanstovarChild from '../Kanstovar/KanstovarChild.vue';

export default {
  components: {
    KanstovarChild,
  },
  data() {
    return {
       products:[
          
          {
            id: 1,
            img: "1.jpeg",
            title: "Donya idishlarni yuvish uchun jel, limon",
            price: "4 090",
            currency: "So'm",
          },
          {
            id: 2,
            img: "2.jpg",
            title: "Chistin universal sanitariya-gigiyena",
            price: "13 500",
            currency: "So'm",
          },
          {
            id: 3,
            img: "3.jpg",
            title: "Chistin universal sanitariya-gigiyena",
            price: "13 500",
            currency: "So'm",
          },
          {
            id: 4,
            img: "4.webp",
            title: "Chistin universal sanitariya-gigiyena",
            price: "13 500",
            currency: "So'm",
          },
          {
            id: 5,
            img: "5.jpg",
            title: "Chistin universal sanitariya-gigiyena",
            price: "13 500",
            currency: "So'm",
          },
          {
            id: 6,
            img: "6.jpg",
            title: "Chistin universal sanitariya-gigiyena",
            price: "13 500",
            currency: "So'm",
          },

          {
            id: 7,
            img: "7.jpg",
            title: "Chistin universal sanitariya-gigiyena",
            price: "13 500",
            currency: "So'm",
          },
           {
            id: 8,
            img: "8.jpg",
            title: "Chistin universal sanitariya-gigiyena",
            price: "13 500",
            currency: "So'm",
          },
           {
            id: 9,
            img: "9.jpg",
            title: "Chistin universal sanitariya-gigiyena",
            price: "13 500",
            currency: "So'm",
          },
           {
            id: 10,
            img: "10.webp",
            title: "Chistin universal sanitariya-gigiyena",
            price: "13 500",
            currency: "So'm",
          },
           {
            id: 11,
            img: "11.jpg",
            title: "Chistin universal sanitariya-gigiyena",
            price: "13 500",
            currency: "So'm",
          },
          {
            id: 12,
            img: "12.jpg",
            title: "Chistin universal sanitariya-gigiyena",
            price: "13 500",
            currency: "So'm",
          },
        ],
    };
  },
}
</script>

<style>
.card-item{
  justify-content: space-between;
  display: flex;
  flex-wrap: wrap;
  /* margin: 10px; */

}
</style>