<template>
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
    <p class="my-4">{{ key }}</p>
  </b-modal>

      </div>
</template>

  <script>
    export default {
  data(){
    return{
      key: Math.floor(Math.random() * 1000)
      
    }
  }
}
</script>

<style>
.card-top{
    text-align: center !important;
    box-shadow: 0 5px 10px 0 rgb(0 0 0 / 12%) !important;
    border-radius: 20px !important;
}
.btn-secondary,.btn-secondary:hover,
.btn-secondary:focus {
  background-color: #fff;
  border-color: #fff !important;
}
</style>