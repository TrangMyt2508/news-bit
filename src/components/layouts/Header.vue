<template>
  <div class="header">
    <header>
      <div class="bg-191">
        <div class="container">
          <div class="oflow-hidden color-ash font-9 text-sm-center ptb-sm-5">

            <ul class="float-left float-sm-none list-a-plr-10 list-a-plr-sm-5 list-a-ptb-15 list-a-ptb-sm-10">
              <li><a class="pl-0 pl-sm-10" href="#">About</a></li>
              <li><a href="#">Advertise</a></li>
              <li><a href="#">Submit Press Release</a></li>
              <li><router-link to="/Contact">Contact</router-link></li>
            </ul>
            <ul class="float-right float-sm-none list-a-plr-10 list-a-plr-sm-5 list-a-ptb-15 list-a-ptb-sm-5">
              <li><a class="pl-0 pl-sm-10" href="#"><i class="ion-social-facebook"></i></a></li>
              <li><a href="#"><i class="ion-social-twitter"></i></a></li>
              <li><a href="#"><i class="ion-social-google"></i></a></li>
              <li><a href="#"><i class="ion-social-instagram"></i></a></li>
              <li><a href="#"><i class="ion-social-bitcoin"></i></a></li>
            </ul>

          </div><!-- top-menu -->
        </div><!-- container -->
      </div><!-- bg-191 -->

      <div class="container">
        <a class="logo"><router-link to="/Home"><img src="../../assets/images/logo-black.png" alt="Logo"></router-link></a>

        <a class="right-area src-btn" href="#" >
          <i class="active src-icn ion-search"></i>
          <i class="close-icn ion-close"></i>
        </a>
        <div class="src-form">
          <form>
            <input type="text" placeholder="Search here">
            <button type="submit"><i class="ion-search"></i></button>
          </form>
        </div><!-- src-form -->

        <a class="menu-nav-icon" data-menu="#main-menu" href="#"><i class="ion-navicon"></i></a>

        <ul class="main-menu" id="main-menu">
          <li><router-link to="/Archive">TIN TỨC</router-link></li>
      <!--    <li class="drop-down"><router-link to="/SinglePost"> BLOG</router-link>
             &lt;!&ndash; <ul class="drop-down-menu drop-down-inner">
                <li><a href="#">PAGE 1</a></li>
                <li><a href="#">PAGE 2</a></li>
              </ul>&ndash;&gt;
          </li>-->
          <li><router-link to="/FQAs">CÂU HỎI THƯỜNG GẶP</router-link></li>
          <!--<li><router-link to="/SingleFQAs">GỈAI THÍCH</router-link></li>-->
          <li><router-link to="/Contact">LIÊN HỆ</router-link></li>
        </ul>
        <div class="clearfix"></div>
      </div><!-- container -->
    </header>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>

</style>
