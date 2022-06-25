<template>
  <div class="card-item">
    <VashingChild
      v-for="(product,id) in products"
      :key="id"
      :product="product"
     />
  </div>
</template>

<script>
import VashingChild from './VashingChild.vue';

export default {
  components: {
    VashingChild,
  },
  data() {
    return {
       products:[
          {
            id: 1,
            img: "1.jpg",
            title: "Pollarni artish uchun",
            price: "1 990",
            currency: "So'm",
          },
          {
            id: 2,
            img: "2.jpg",
            title: "Donya idishlarni yuvish uchun gel",
            price: "4 790",
            currency: "So'm",
          },
          {
            id: 3,
            img: "3.jpg",
            title: "Sanfor Whiteness gel 3da 1 ko'p funksiyali mahsulot",
            price: "4 290",
            currency: "So'm",
          },
          {
            id: 4,
            img: "4.jpg",
            title: "Stendli 91*87mm deli qog'ozi",
            price: "19 990",
            currency: "So'm",
          },
          {
            id: 5,
            img: "5.jpg",
            title: "Pollarni yuvish uchun RAG 65",
            price: "1 990",
            currency: "So'm",
          },
          {
            id: 6,
            img: "6.jpg",
            title: "Kometa 2x effektli qarag'ay universal 475gr",
            price: "8 890 ",
            currency: "So'm",
          },
           {
            id: 7,
            img: "7.jpg",
            title: "Olma ta'mi bilan yashil choy geli",
            price: "3951",
            currency: "So'm",
          },
           {
            id: 8,
            img: "8.jpg",
            title: "Yashil choy chistol universal",
            price: "5 490",
            currency: "So'm",
          },
           {
            id: 9,
            img: "9.jpg",
            title: "Yashil choy chistol universal",
            price: "5 490",
            currency: "So'm",
          },
           {
            id: 10,
            img: "10.jpg",
            title: "FAIRY idishlarni yuvish vositasi",
            price: "13 290",
            currency: "So'm",
          },
           {
            id: 11,
            img: "11.jpg",
            title: "Idish yuvish uchun suyuqlik tomchisi, limon ",
            price: "8 890 ",
            currency: "So'm",
          },
           {
            id: 12,
            img: "12.jpg",
            title: "Alfa idishlarni yuvish uchun gel,apelsin",
            price: "5 180",
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