<template>
  <div>
        <b-button class="btn position-relative" v-b-toggle.sidebar-right style="width: 50px;" variant="white">
         <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
           {{ productLength }}
          </span>
          <img class="w-100" src="../assets/cart.svg" alt="cart">
        </b-button>
        <b-sidebar id="sidebar-right" title="Korzina" right shadow>
          <div v-for="(product, id) in products" :key="id">
            <div class="sidebar-card">
              <div class="sidebar_img">
              <img :src="require(`../assets/img/first-product-page/${product.img}`)" alt="">
              </div>
              <div class="fw-700">{{product.title}}</div>
              <div>{{product.price}} <strong>{{product.currency}}</strong></div>
              <button class="card-product-delete" @click="deleteProductFromPacket(id)">Delete</button>
            </div>
          </div>
        </b-sidebar>
      </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      sidebarRight: false
    };
  },
  computed: {
    ...mapGetters({
      productLength: 'getPackets'
    }),
    products() {
      return this.$store.state.packets;
    }
  },
  methods: {
    deleteProductFromPacket(id) {
      this.$store.dispatch('deleteProductFromPacket', id);
    }
  }
  
}
</script>

<style>
.sidebar_img {
  display: block;
  margin: 0 auto;
  width: 200px;
  /* height: 200px; */
}

.sidebar-card{
  margin: 0 auto;
  width: 280px;
  height: 280px;
  box-shadow: 0 0 5px rgba(0,0,0,0.2);
  margin-top: 10px;
}
.b-sidebar-body{
  background-color:white
}
.card-product-delete{
  padding: 8px 15px;
  color: #fff;
  background-color: red;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-size:12px;
  float: right;
  margin-top: -5px;
  
}
strong{
  font-size: 16px;
  color: #333;
}
.b-sidebar button{
  border: none;
  box-shadow: rgba(255,255,255,0.4);
}


</style>