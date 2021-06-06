<template>
    <b-sidebar fixed="top" :no-close-on-route-change="showSidebar" text-variant="white" :width="updateWidth" v-model="showSidebar" bg-variant="dark" no-header>
      <div class="side-bar">
        <b-nav class="side-bar-item side-bar-opt">
          <b-nav-item class="side-bar-title side-bar-opt">
            <div class="side-bar-icon">
            <b-avatar size="lg"></b-avatar>
          </div>
          <div class="title">테스트스토리</div>
          </b-nav-item>
          <b-nav-item class="side-bar-item side-bar-opt" to="/testOnePage" exact exact-active-class="active">
            <div class="side-bar-icon">
              <b-icon-x class="h2"></b-icon-x>
            </div>
            <div class="title">테스트1</div>
          </b-nav-item>
          <b-nav-item class="side-bar-item side-bar-opt" to="/testTwoPage"  exact-active-class="active">
            <div class="side-bar-icon">
              <b-icon-exclamation-circle-fill class="h2"></b-icon-exclamation-circle-fill> 
            </div>
            <div class="title"> 테스트2 </div>
          </b-nav-item>
          <b-nav-item class="side-bar-item side-bar-opt" to="/testThreePage"  exact-active-class="active">
            <div class="side-bar-icon">
              <b-icon-x class="h2"></b-icon-x>
            </div>
            <div class="title"> 테스트3 </div>
          </b-nav-item>
          <b-nav-item class="side-bar-item side-bar-opt" to="/testFourPage"  exact-active-class="active">
            <div class="side-bar-icon">
              <b-icon-x class="h2"></b-icon-x> 
            </div>
            <div class="title"> 테스트4 </div>
          </b-nav-item>
        </b-nav>
      </div>
    </b-sidebar>
</template>
<script>
export default {
  data() {
    return {
      showSidebar: true,
      width: '250px',
    }
  },
  created() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    },
  destroyed() {
      window.removeEventListener('resize', this.handleResize);
  },
  methods: {
      handleResize() {
          this.width = window.innerWidth;
      }
  },
  computed: {
    updateWidth() {
      if( this.width > 1280 ) return '250px'
      
      return '100px'
    }
  }
}
</script>
<style lang="scss" scoped>
$sidebar-default-padding-left: 25px;
$sidebar-active-default-color: #5EBDC5;
  .side-bar {
    .side-bar-title {
      height: 90px;
      margin-top:20px;
      margin-bottom:20px;
      padding:10px;
    }
    .title {
      margin-left: 8px;
    }
    .side-bar-icon {
      display: flex;
      align-items: center;
    }
    .side-bar-item {
      height: 50px;
    }
    .side-bar-opt {
      display: flex;
      justify-content: left;
      align-items: center;
      cursor: pointer;
      padding-left: 25px;
    }
    // .side-bar-opt:hover {
    //   border: 1px solid $sidebar-active-default-color;
    // }
    .active {
      color: $sidebar-active-default-color;
    }
    .active::after {
      position:absolute;
      right: 0;
      width:2px;
      height: 50px;
      content:'';
      border: 2px solid $sidebar-active-default-color;
      background-color:$sidebar-active-default-color;
    }
  }
  @media screen and (max-width: 1280px) {
    .side-bar {
      padding-left: 0;
      .side-bar-title {
        height: 90px;
        display: flex;
        justify-content: center;
        padding: 0;
        .title {
          display: none;
        }
      }
      .title {
        margin-left: 0;
      }
      .side-bar-opt {
        height: 100px;
        justify-content: center;
        flex-direction: column;
        margin-bottom: 0;
        padding-left: 0;
      }
      .active::after {
        display: none;
      }
    }
  }
</style>