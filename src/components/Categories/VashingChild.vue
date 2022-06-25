<template>
  <div class="card d-flex flex-column justify-content-between">
    <div>
      <img
        :src="require(`@/assets/img/first-product-page/${product.img}`)"
        alt=""
      />
    </div>
    <div>
      <div class="text-start">
        <div>{{ product.title }}</div>
        <span>
          <b>{{ product.price }}</b>
         
          <small class="mx-2 fs-5">{{ product.currency }}</small>
        </span>
      </div>
      <div
        class="rounded-pill shadow overflow-hidden d-inline-flex bg-light justify-content-center align-items-center card-top mt-3"
        style="border-radius: 50px"
      >
        <div class="card-btn px-5 py-2" v-b-modal="'modal-' + key">
          <div>
            <img style="width: 24px" src="@/assets/expand.svg" alt="expand" />
          </div>
        </div>
        <button
          @click="addProduct(product)"
          class="card-btn px-5 py-2 border-0"
        >
          <img style="width: 24px" src="@/assets/cart.svg" alt="cart" />
        </button>
        <b-modal scrollable size="lg" :id="'modal-' + key">
          <div class="d-flex">
            <div
              class="modal-img w-50 d-flex align-items-center justify-content-center border rounded-3"
            >
              <img
                :src="require(`@/assets/img/first-product-page/${product.img}`)"
                alt=""
                class="w-75"
              />
            </div>
            <div class="text-start">
              <div class="product_title mx-4">{{ product.title }}</div>
              <span class="mx-4">
                <b>{{ product.price }}</b>
                
                <small>{{ product.currency }}</small>
              </span
              ><br />
              <button class="modal_btn_korzina mt-4">
                <img
                  class="korzina_cart"
                  src="@/assets/icons8-basket-24.png"
                  alt=""
                />
                <p class="cart_title">Savatchaga qo'shish</p>
              </button>
            </div>
          </div>
          <div class="social_item w-25 d-flex">
            <img
              class="share_icon"
              src="@/assets/social_links/share-nodes-solid.svg"
              alt=""
            />
            <div class="share_title">Ulashish:</div>
            <div class="social_l">
              <img
                class="item"
                src="@/assets/social_links/facebook-f-brands.svg"
                alt=""
              />
              <img
                class="item"
                src="@/assets/social_links/odnoklassniki-brands.svg"
                alt=""
              />
              <img
                class="item"
                src="@/assets/social_links/youtube-brands.svg"
                alt=""
              />
              <img
                class="item"
                src="@/assets/social_links/telegram-brands.svg"
                alt=""
              />
            </div>
          </div>
          <a class="batafsil" href="#">Batafsil</a>
        </b-modal>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Yuvish vositalari",
  data() {
    return {
      key: Math.floor(Math.random() * 1000),
      openModal: false,
    };
  },
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  methods: {
    addProduct(product) {
      // console.log(product)
      this.$store.dispatch("productAddPacket", product);
    },
  },
};
</script>

<style>
.modal_btn_korzina {
  border-radius: 30px;
  border: none;
  padding: 5px 30px;
  cursor: pointer;
  margin-left: 20px;
  background-color: #dc0b0f;
  display: flex;
}
img {
  width: 100%;
}
.text-start {
  flex-wrap: nowrap;
}
.product_title {
  font-family: "SFRegular", sans-serif;
  font-weight: 500;
  font-size: 25px;
  margin-left: 10px;
  color: #333;
}
.korzina_cart {
  color: #fff;
  width: 24px;
  display: flex;
  margin-right: 20px;
  margin-top: 5px;
  padding-top: 5px;
}
.cart_title {
  color: #fff;
  font-size: 15px;
  font-family: "SFRegular", sans-serif;
  font-weight: bold;
  padding-top: 12px;
}
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
  /* height: 100%; */
}
.text-start {
  flex-wrap: nowrap;
}
.product_title {
  font-family: "SFRegular", sans-serif;
  font-weight: 500;
  font-size: 25px;
  margin-left: 10px;
  color: #333;
}
.social_item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}
.social_item .item {
  width: 20px;
  height: 20px;
  margin: 20px;
}
.share_title {
  font-size: 16px;
  color: #333;
}
.share_icon {
  width: 20px;
  height: 20px;
  margin-top: 20px;
  margin: 10px;
}
.social_l {
  display: flex;
  margin-left: 20px;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}
.modal-footer {
  display: none;
}
.batafsil{
  position: absolute;
  right: 5px;
  bottom: 5px;
  color:#fff;
  padding: 10px 30px;
  background-color: red;
  border-radius: 40px;

}
.batafsil:hover{
  color: #fff;
}
.modal-body{
  height:450px;
}
</style>
