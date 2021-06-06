<template>
  <div id="app">
      <side-navbar></side-navbar>
      <div class="container-fluid responsive-width">
        <main-header></main-header>
          <router-view/>
      </div>
  </div>
</template>
<script>
import SideNavbar from '@/components/SideNavbar.vue'
import MainHeader from '@/components/MainHeader.vue'
export default {
  components:{
    SideNavbar,
    MainHeader
  }
}
</script>
<style>
.responsive-width {
      padding-left: 250px !important;
    }
  @media screen and (max-width: 1280px) {
    .responsive-width {
      padding-left: 100px !important;
    }
  }
</style>
