<template>
  <div class="card">
    <div>
        <img :src="require(`../assets/img/first-product-page/${product.img}`)" alt="">
    </div>
    <div class="text-start">
      <div>{{product.title}}</div>
      <span>
        <b>{{product.price}}</b>
        {{ }}
        <small>{{product.currency}}</small>
      </span>
    </div>
     <div class="d-inline-flex bg-light justify-content-center align-items-center card-top mt-3" style="border-radius: 100px;">
        <div class="card-btn px-5 py-2">
        <b-button btn btn-secondary  v-b-modal="'modal-'+key">
          <img style="width: 24px;" src="@/assets/expand.svg" alt="expand">
        </b-button>

        </div>
        <div class="card-btn px-5 py-2">
          <img style="width: 24px;" src="@/assets/cart.svg" alt="cart">
        </div>

  <b-modal :id="'modal-'+key" title="BootstrapVue">
    <div>
        <img :src="require(`../assets/img/first-product-page/${product.img}`)" alt="">
    </div>
    <div class="text-start">
      <div>{{product.title}}</div>
      <span>
        <b>{{product.price}}</b>
        {{ }}
        <small>{{product.currency}}</small>
      </span>
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
}
</script>

<style>
.card {
  width: 300px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  margin-top: 20px;
}
.card-btn {
 cursor: pointer;
}
img {
  width: 100%;
  
}
.text-start{
  flex-wrap: nowrap;
}
</style>