<template>
  <div class="home">

    <HomeTop/>

    <section>
      <div class="container">
        <div class="row">

          <div class="col-md-12 col-lg-8">
            <Recent/><!-- col-md-9 -->
          </div>

          <div class="d-none d-md-block d-lg-none col-md-3"></div>
          <div class="col-md-6 col-lg-4">
            <SideBar/><!-- col-md-3 -->
          </div>

        </div><!-- row -->
      </div><!-- container -->
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeTop from '../components/homes/HomeTop'
import Recent from '../components/homes/Recent'
import SideBar from '../components/homes/SideBar'

export default {
  name: 'home',
  components: { SideBar, Recent, HomeTop }
}
</script>
