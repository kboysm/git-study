<template>
  <div id="app">
    <!-- <side-navbar></side-navbar>
      <main-header></main-header>
      <div class="responsive-width">
        <div class="responsive-container">
        </div>
      </div> -->

    <router-view />
  </div>
</template>
<script>
import SideNavbar from "@/components/SideNavbar.vue";
import MainHeader from "@/components/MainHeader.vue";
export default {
  components: {
    SideNavbar,
    MainHeader,
  },
};
</script>
<style lang="scss">
.responsive-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
@media screen and (min-width: 1920px) {
  .responsive-container {
    justify-content: left;
    padding-left: 15% !important;
    padding-right: 25% !important;
  }
}

.responsive-width {
  padding-left: 240px !important;
}
@media screen and (max-width: 1280px) {
  .responsive-width {
    padding-left: 80px !important;
  }
}

$main-header-height: 64px;

.responsive-header {
  height: $main-header-height;
  padding-left: 265px !important;
  padding-right: 25px !important;
}
@media screen and (max-width: 1280px) {
  .responsive-header {
    padding-left: 105px !important;
    padding-right: 25px !important;
  }
}
</style>
