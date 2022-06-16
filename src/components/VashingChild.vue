<template>
  <div class="card d-flex flex-column justify-content-between">
    <div>
      <div>
          <img :src="require(`../assets/img/first-product-page/${product.img}`)" alt="">
      </div>
      <div class="text-start" style="padding: 15px 0;">
        <div>{{product.title}}</div>
        <span>
          <b>{{product.price}}</b>
          {{ }}
          <small>{{product.currency}}</small>
        </span>
      </div>
    </div>
    <div class="rounded-pill shadow overflow-hidden d-inline-flex bg-light justify-content-center align-items-center card-top mt-3" style="border-radius: 50px;">
      <div class="card-btn px-5 py-2" v-b-modal="'modal-'+key">
        <div>
          <img style="width: 24px;" src="@/assets/expand.svg" alt="expand">
        </div>
      </div>
      <button type="button" @click="productAddPacket(product)" class="card-btn px-5 py-2 border-0">
        <img style="width: 24px;" src="@/assets/cart.svg" alt="cart">
      </button>

        <b-modal scrollable size="lg" :id="'modal-'+key">
          <div class="d-flex">
            <div class="modal-img w-50 d-flex align-items-center justify-content-center border rounded-3" >
                <img :src="require(`../assets/img/first-product-page/${product.img}`)" alt="" class="w-75">
            </div>
           
            <div class="text-start">
              <div class="product_title">{{product.title}}</div>
              <span>
                <b>{{product.price}}</b>
                {{ }}
                <small>{{product.currency}}</small>
              </span><br>
              <button class="modal_btn_korzina mt-4"><img class="korzina_cart" src="../assets/icons8-basket-24.png" alt=""><p class="cart_title">Savatga qo'shish</p></button>
            </div>
          </div>
        </b-modal>
    </div>
  </div>
</template>

  <script>
    export default {
    name: "Yuvish Vositalari",
    data() {
        return {
           key: Math.floor(Math.random() * 1000)
        };
    },
    props: {
        product: {
            type: Object,
            required: true
        },
    },
    methods: {
        productAddPacket(data) {
            this.$store.dispatch('productAddPacket', data);
        }
    }
}
</script>

<style>
.card {
  padding: 30px;
  width: 300px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  margin-top: 20px;
}
.card-btn {
 cursor: pointer;
}
.card-btn:hover {
  background-color: red;
  
}
img {
  width: 100%;
}
.text-start{
  flex-wrap: nowrap;
}
.product_title{
  font-family: 'SFRegular', sans-serif;
  font-weight: 500;
  font-size: 25px;
  margin-left: 10px;
  color: #333;
}
</style>