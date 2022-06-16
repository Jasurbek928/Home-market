<template>
  <div id="app">
    <router-view />
  </div>
</template>


<script>
export default {
  name: "App",
};
</script>
<style>
#app{
  width: 100%;
}
 .inner{
   max-width: 1440px;
 }
img{
  max-height: 100%;
  max-width: 100%;
}
</style>
