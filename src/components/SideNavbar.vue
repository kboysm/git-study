<template>
    <b-sidebar text-variant="white" :width="updateWidth" bg-variant="dark" v-model="showSidebar" no-header>
      <div class="side-bar">
        <div class="side-bar-title side-bar-opt">
          <div>
            <b-avatar size="lg"></b-avatar>
          </div>
          <div class="title">테스트스토리</div>
        </div>
        <div class="side-bar-item side-bar-opt">
          <div>
            <b-icon-x class="h2"></b-icon-x>
          </div>
          <div class="title">테스트1</div>
        </div>
        <div class="side-bar-item side-bar-opt">
          <div>
            <b-icon-exclamation-circle-fill class="h2"></b-icon-exclamation-circle-fill> 
          </div>
          <div class="title"> 테스트1 </div>
        </div>
        <div class="side-bar-item side-bar-opt">
          <div>
            <b-icon-x class="h2"></b-icon-x>
          </div>
           <div class="title"> 테스트1 </div>
        </div>
        <div class="side-bar-item side-bar-opt">
          <div>
            <b-icon-x class="h2"></b-icon-x> 
          </div>
          <div class="title"> 테스트1 </div>
        </div>

      </div>
    </b-sidebar>
</template>
<script>
export default {
  data() {
    return {
      showSidebar: true,
      width: 0,
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
  .side-bar {
    padding-left: 25px;
    .side-bar-title {
      height: 90px;
      margin-top:20px;
      margin-bottom:20px;
      padding:10px;
    }
    .title {
      margin-left: 8px;
    }
    .side-bar-item {
      height: 50px;
    }
    .side-bar-opt {
      display: flex;
      justify-content: left;
      align-items: center;
      cursor: pointer;
    }
    .side-bar-opt:hover {
      border: 1px solid red;
      // content: 'asdasdasd'
    }
  }
  @media screen and (max-width: 1280px) {
    .side-bar {
      padding-left: 0;
      .side-bar-title {
        height: 90px;
        display: flex;
        justify-content: center;
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
        border: 1px solid red;
      }
    }
  }
</style>