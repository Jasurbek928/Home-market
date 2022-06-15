<template>
  <div>
        <b-button class="btn position-relative" v-b-toggle.sidebar-right style="width: 50px;" variant="white">
         <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
           {{ productLength }}
          </span>
          <img class="w-100" src="../assets/cart.svg" alt="cart">
        </b-button>
        <b-sidebar id="sidebar-right" title="Sidebar" right shadow>
          <div class="px-3 py-2" v-for="(product, id) in products" :key="id">
            <img class="sidebar_img" :src="require(`../assets/img/first-product-page/${product.img}`)" alt="">
          {{ products }}
            <button @click="deleteProductFromPacket(id)">Delete</button>
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
.sidebar_img{
  width: 100px;
  height: 100px;
}
</style>