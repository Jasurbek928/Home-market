<template>
    <div class="inner m-auto">
        <div class="d-flex justify-content-between py-1 pe-5" style="border-bottom: 1px solid #ccc">
        <div class="d-flex align-items-center">
            <router-link class="mx-3" to="/home">Kompaniya haqida</router-link>
            <router-link class="mx-3" to="/buyurtma">Buyurtma</router-link>
            <router-link class="mx-3" to="/dokon">Bizning do'konlarimiz</router-link>
            <router-link class="mx-3" to="/qayta-aloqa">Aloqa</router-link>
        </div>
        <div class="d-flex align-items-center">
            <b-dropdown id="dropdown-1" variant="0" text="Русский" class="shadow-none">
                <b-dropdown-item>
                    English
                </b-dropdown-item>
            </b-dropdown>
            <a class="mx-3" href="#">
                <i class="icon-profile"><span>Shaxsiy kabinet</span></i>
            </a>
        </div>
    </div>
    </div>
   
</template>

<script>
export default {
    
}
</script>

<style>
ul{
    list-style: none;
}
a span{
    color: #313b41;
    margin-left: 10px;
    font-size: 14px;
}

</style>