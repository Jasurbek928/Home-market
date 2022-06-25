<template>
  <div class="card-item">
    <ToysChild
      v-for="(product,id) in products"
      :key="id"
      :product="product"
     />
  </div>
</template>

<script>
import ToysChild from '../Categories/ToysChild.vue';

export default {
  components: {
    ToysChild,
  },
  data() {
    return {
       products:[
          
          {
            id: 1,
            img: "2.jpg",
            title: "Donya idishlarni yuvish uchun jel, limon",
            price: "4 090",
            currency: "So'm",
          },
          {
            id: 2,
            img: "1.webp",
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
            img: "5.webp",
            title: "Chistin universal sanitariya-gigiyena",
            price: "13 500",
            currency: "So'm",
          },
          {
            id: 6,
            img: "6.webp",
            title: "Chistin universal sanitariya-gigiyena",
            price: "13 500",
            currency: "So'm",
          },

          {
            id: 7,
            img: "7.webp",
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
            img: "9.webp",
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
            img: "11.webp",
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