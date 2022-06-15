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
import BabyMebelChild from '../../components/Katalog/BabyMebelChild.vue';

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
            title: "Donya idishlarni yuvish uchun gel",
            price: "1 990",
            currency: "So'm",
          },
          {
            id: 2,
            img: "2.jpg",
            title: "Donya idishlarni yuvish uchun jel, limon",
            price: "4 090",
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
            img: "4.jpg",
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