<template>
  <div class="footer ">
      <hr style="border-color: #ccc;opacity: 0.3; margin-top: 40px; margin-bottom: 40px;">
      <div class="row">
        <div class="col-3 d-flex flex-column gap-2 mx-0">
          <h5 class="text-danger">Biz haqimizda</h5>
          <a class="text-secondary" href="#">Kompaniya haqida</a>
          <a class="text-secondary" href="#">Sifat</a>
          <a class="text-secondary" href="#">Maxfiylik siyosati</a>
          <a class="text-secondary" href="#">Kontaktlar</a>
        </div>
        <div class="col-3 d-flex flex-column gap-2 mx-0">
          <h5 class="text-danger">Online do'kon</h5>
          <a class="text-secondary" href="#">Buyurtmani qanday qilish kerak</a>
          <a class="text-secondary" href="#">Yetkazib berish / to'lash</a>
          <a class="text-secondary" href="#">Maxsulotni almashtirish</a>
          <a class="text-secondary" href="#">Savol va javob</a>
        </div>
        <div class="col-3 d-flex flex-column gap-2 mx-0">
          <h5 class="text-danger">Hamkorlik</h5>
          <a class="text-secondary" href="#">B2B xizmati</a>
        </div>
        <div class="col-3 d-flex flex-column gap-2 mx-0">
          <h5 class="text-danger">Aksiyalarga obuna bo'ling</h5>
          <form class="d-flex">
            <input class="form-control" type="email" placeholder="Elektron pochta">
            <button type="button" class="btn btn-danger mx-3">Obuna</button>
          </form>
        </div>

    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.footer{
  height: 200px;
}
.left{
    text-align: left;
}
.text-danger{
    font-size: 17px;
    line-height: 22px;
    font-weight: 700;
    color: #dc0b0f;
    margin-bottom: 15px;
}
a{
    font-weight: 500;
    font-size: 15px;
    color: #272727;
}
</style>