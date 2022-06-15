<template>
 
    <div id="navbar" class="shadow"> 
      <navTop/>
    </div>

</template>
<script>
import navTop from "../components/navTop.vue"
export default {
  components: {
    navTop
  },
  data() {
    return {
      active: false,
      
    };
  },
    methods: {
    toggleNavClass(){
        if(this.active == false){
          return 'navb'
        } else {
          return 'sticky-nav'
        }
    }
  },
  mounted(){
    const navbar = document.getElementById("navbar").style;
    const html = document.documentElement;
    const body = document.body;
    const hook = 300;

    const navigationAnime = () => {
        if (body.scrollTop > hook || html.scrollTop > hook) {
            navbar.top = "0";
        } else {
            navbar.top = "";
        }
    };

    window.addEventListener("scroll", navigationAnime);
    navigationAnime();
  }
}
</script>

<style>
a {
  font-weight: bold;
  color: white;
  text-decoration: none;
  margin: 0 1vw;
}

a:hover {
  transition: linear 0.5s;
  color: red;
}

/* two classes, decided on scroll */
.navb {
  transition: 0.5s;
  padding: 25px;
}
.sticky-nav{
  transition: 0.5s;
  padding: 20px;
}
#navbar {
  justify-content: space-between;
  transition: 0.5s;
  position: fixed;
  display: flex;
  z-index: 100;
  top: -5rem;
  background-color: #ff0;
  right: 0;
  left: 0;
}
#navb.sticky{
  z-index: 10;
  transition: 0.5s;
  box-shadow: 0px 15px 10px -15px #111;
  background-color:  #ccd6dd;
  }
</style>