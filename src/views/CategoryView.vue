<template>
    <div class="home">
        <NavbarComp/>
        <Header/>
        <HeaderTop />
        <CatalogMenu/>
        <BabyMebel/>
       
    </div>
    
</template>

<script>
import NavbarComp from "../components/NavbarComp.vue"
import Header from "../components/Header.vue";
import HeaderTop from "../components/HeaderTop.vue";
import CatalogMenu from "../components/CatalogMenu.vue"
import BabyMebel from "../components/Katalog/BabyMebel.vue";





export default {
    name: "HomeView",
    components: {
    NavbarComp,
    Header,
    HeaderTop,
    CatalogMenu,
    BabyMebel
},
    data() {
        return {
           
        };
    },
}
</script>

<style>
.home{
    width: 100%;
}
</style>