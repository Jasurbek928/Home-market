<template>
  <div class="footer ">
      <hr style="border-color: #ccc;opacity: 0.3; margin-top: 40px; margin-bottom: 40px;">
      <div class="row">
        <div class="col-3 dflex flex-column gap-2 mx-0">
          <h5 class="text-danger">Biz haqimizda</h5>
          <a  href="#">Kompaniya haqida</a>
          <a  href="#">Sifat</a>
          <a  href="#">Maxfiylik siyosati</a>
          <a  href="#">Kontaktlar</a>
        </div>
        <div class="col-3 dflex flex-column gap-2 mx-0">
          <h5 class="text-danger">Online do'kon</h5>
          <a  href="#">Buyurtmani qanday qilish kerak</a>
          <a  href="#">Yetkazib berish / to'lash</a>
          <a  href="#">Maxsulotni almashtirish</a>
          <a  href="#">Savol va javob</a>
        </div>
        <div class="col-3 dflex flex-column gap-2 mx-0">
          <h5 class="text-danger">Hamkorlik</h5>
          <a href="#">B2B xizmati</a>
        </div>
        <div class="col-3 dflex flex-column gap-2 mx-0">
          <h5 class="text-danger">Aksiyalarga obuna bo'ling</h5>
          <form class="dflex">
            <input class="emailInput" type="email" placeholder="E-mail">
            <button type="button" class="btn btn-danger mx-3">Obuna</button>
          </form>
          <div class="social-links">
            <img src="../assets/red change.png">
            <div class="social-number">+(99890)123-45-67</div>
            <a href="#"><img src="@/assets/icons8-facebook-24.png" alt=""></a>
            <a href="#"><img src="../assets/icons8-instagram (1).svg" alt=""></a>
          </div>
        </div>

    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

.left{
    text-align: left;
}
.emailInput{
  border: 1px solid #272727;
  outline: none;
  padding-left: 15px;
  border-radius:5px;
  
}
.text-danger{
    font-size: 17px;
    line-height: 22px;
    font-weight: 700;
    color: #dc0b0f;
    margin-bottom: 15px;
}
.dflex{
  display: flex;
  margin-bottom: 15px;
}
a{
    font-weight: 500;
    font-size: 15px;
    color: #272727;
    margin: 0;
}
.social-links img{
    width: 30px;
    height: 30px;
    margin-right: 10px;
}
.social-links{
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  margin-top: 30px;

}
.social-number{
  margin-right: 20px;
  font-weight: 500;
  font-size: 17px;
  color: #272727;
}
</style>