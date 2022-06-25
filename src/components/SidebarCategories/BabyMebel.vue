<template>
  <div class="">
      <Header/>
      <HeaderTop/>
      <NavbarComp/>
      <CatalogMenu/>
      <div class="inner px-5 mx-auto">
        <div class="text-center fw-bold fs-4 mt-3">Bolalar Mebellari</div>
        <BabyMebel/>
      </div>
  </div>
</template>

<script>
import Header from '../Header.vue';
import HeaderTop from '../HeaderTop.vue';
import NavbarComp from '../NavbarComp.vue';
import CatalogMenu from '../CatalogMenu.vue';
import BabyMebel from '../BabyMebel/BabyMebel.vue';
export default {
    components: { HeaderTop, Header, NavbarComp, CatalogMenu, BabyMebel },
}
</script>

<style>

</style>