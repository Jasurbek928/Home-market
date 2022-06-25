<template>
  <div class="inner mx-auto card-item">
    <BabyMebelChild
      v-for="(product,id) in products"
      :key="id"
      :product="product"
     />
  </div>
</template>

<script>
import BabyMebelChild from '../BabyMebel/BabyMebelChild.vue';

export default {
  components: {
    BabyMebelChild,
  },
  data() {
    return {
       products:[
          {
            id: 1,
            img: "1.jpg",
            title: "Bolalar krovatlari",
            price: "2 049 000",
            currency: "So'm",
          },
          {
            id: 2,
            img: "2.jpg",
            title: "Bolalar mebellari modul to'plamlari",
            price: "4 090",
            currency: "So'm",
          },
          {
            id: 3,
            img: "3.jpg",
            title: "Yangi tug'ilgan chaqaloqlar uchun komplekt mebellar",
            price: "3 059 000",
            currency: "So'm",
          },
          {
            id: 4,
            img: "4.jpg",
            title: "Beshiklar",
            price: "13 500",
            currency: "So'm",
          },
          {
            id: 5,
            img: "5.jpg",
            title: "Manejlar",
            price: "1 035 000",
            currency: "So'm",
          },
          {
            id: 6,
            img: "6.jpg",
            title: "Bolalar stol va stullari",
            price: "1 075 000",
            currency: "So'm",
          },
          {
            id: 7,
            img: "7.jpg",
            title: "Boshqa bolalar mebeli",
            price: "4 079 000",
            currency: "So'm",
          },
          {
            id: 8,
            img: "8.jpg",
            title: "Bolalar xonasi uchun komodlar",
            price: "3 099 000",
            currency: "So'm",
          },
          {
            id: 9,
            img: "9.jpg",
            title: "Bolalar yurgichlari",
            price: "549 000",
            currency: "So'm",
          },
          {
            id: 10,
            img: "10.jpg",
            title: "Bolalar orom kursilari",
            price: "899 000",
            currency: "So'm",
          },
          {
            id: 11,
            img: "11.jpg",
            title: "Bolalar shezlonglari",
            price: "1 095 000",
            currency: "So'm",
          },
          {
            id: 12,
            img: "12.jpg",
            title: "O'zgaruvchan komodlar",
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
  margin: 10px;

}
</style>