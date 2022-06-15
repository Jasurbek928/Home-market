<template>
  <div class="card d-flex flex-column justify-content-between inner ">
    <div>
      <div>
          <img :src="require(`../../assets//img/Maishiy-Texnika/${product.img}`)" alt="">
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
      <div class="card-btn px-5 py-2">
        <img style="width: 24px;" src="@/assets/cart.svg" alt="cart">
      </div>

        <b-modal scrollable size="lg" :id="'modal-'+key">
          <div class="d-flex">
            <div class="modal-img w-50 d-flex align-items-center justify-content-center border rounded-3" >
                <img :src="require(`../../assets//img/Maishiy-Texnika/${product.img}`)" alt="" class="w-75">
            </div>
            <div class="text-start">
              <div class="product_title">{{product.title}}</div>
              <span>
                <b>{{product.price}}</b>
                {{ }}
                <small>{{product.currency}}</small>
              </span>
            </div>
          </div>
        </b-modal>
    </div>
  </div>
</template>

  <script>
    export default {
    name: "Bolalar mebellari",
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
.modal-img{

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