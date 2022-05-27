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
import MebelChild from '../../components/MebelChild.vue';

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
            title: "Donya idishlarni yuvish uchun gel",
            price: "1 990",
            currency: "So'm",
          },
          {
            id: 2,
            img: "2.jpg",
            title: "Donya idishlarni yuvish uchun gel",
            price: "1 990",
            currency: "So'm",
          },
          {
            id: 3,
            img: "3.jpg",
            title: "Donya idishlarni yuvish uchun gel",
            price: "1 990",
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