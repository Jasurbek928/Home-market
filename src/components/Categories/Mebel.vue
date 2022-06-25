<template>
  <div class="card-item">
     <MebelChild
      v-for="(product,id) in products"
      :key="id"
      :product="product"

     />
  </div>
</template>

<script>
import MebelChild from './MebelChild.vue';

export default {
  components: {
    MebelChild
  },
  data() {
    return {
      
        products:[
            {
            id: 1,
            img: "1.jpg",
            title: "Yotoqxona uchun mebel",
            price: "4 090 000",
            currency: "So'm",
          },
          {
            id: 2,
            img: "2.jpg",
            title: "Yumshoq mebel",
            price: "3 079 000",
            currency: "So'm",
          },
          {
            id: 3,
            img: "3.jpg",
            title: "Mehmonxona uchun mebel",
            price: "5 039 000",
            currency: "So'm",
          },
          {
             id: 4,
            img: "4.jpg",
            title: "Stollar",
            price: "2 049 000",
            currency: "So'm",
          },

           {
             id: 5,
            img: "5.jpg",
            title: "Shkaflar",
            price: "2 899 000",
            currency: "So'm",
          },
           {
            id: 6,
            img: "6.jpg",
            title: "Stenkalar, servantlar va gorkalar",
            price: "5 087 000",
            currency: "So'm",
          },
           {
            id: 7,
            img: "7.jpg",
            title: "Interyer buyumlari",
            price: "2 049 000",
            currency: "So'm",
          },
           {
            id: 8,
            img: "8.jpg",
            title: "Vanna xona uchun mebel",
            price: "3 877 000",
            currency: "So'm",
          },
           {
            id: 9,
            img: "9.png",
            title: "Mehmonxona uchun mebel",
            price: "3 079 000",
            currency: "So'm",
          },
           {
            id: 10,
            img: "11.jpg",
            title: "Mebel uchun qoplamalar",
            price: "2 049 000",
            currency: "So'm",
          },
           {
            id: 11,
            img: "13.jpg",
            title: "Shishali mebel",
            price: "4 090 000",
            currency: "So'm",
          },
          {
            id: 12,
            title: "Kutubxona uchun mebellar",
            img: "12.jpg",
            price: "3 079 000",
            currency: "So'm",
          },
        ]
    };
  },
}
</script>

<style>
.card-item{
 
  justify-content: space-between;
  display: flex;
  flex-wrap: wrap;
  margin: 10px;

}
</style>