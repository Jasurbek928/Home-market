<template>
   <div class="home">
    <Header/>
    <HeaderTop/>
    <NavbarComp/>
    <CatalogMenu/>
      <div class="inner px-5 mx-auto">
        <div class="text-center fw-bold fs-4 mt-3">Oshxona Mebellari</div>
        <Oshxona/>
      </div>
   </div>
</template>

<script>
import Header from '../Header.vue';
import HeaderTop from '../HeaderTop.vue';
import NavbarComp from '../NavbarComp.vue';
import CatalogMenu from '../CatalogMenu.vue';
import Oshxona from '../Oshxona/Oshxona.vue';
export default {
    components: { HeaderTop, Header, NavbarComp, CatalogMenu,Oshxona },
}
</script>

<style>

</style>