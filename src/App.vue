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
/* nav {
  padding: 30px;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
}
nav a.router-link-exact-active {
  color: #42b983;
} */
img{
  max-height: 100%;
  max-width: 100%;
}
</style>
