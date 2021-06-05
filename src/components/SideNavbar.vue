<template>
    <b-sidebar text-variant="white" :width="updateWidth" bg-variant="dark" v-model="showSidebar" no-header>
      <div class="side-bar">
        <div class="side-bar-title side-bar-opt">
          <b-avatar size="lg"></b-avatar><span>테스트스토리</span>
        </div>
        <div class="side-bar-item side-bar-opt">
          <b-icon-x class="h1"></b-icon-x> <span> 테스트1 </span>
        </div>
        <div class="side-bar-item side-bar-opt">
          <b-icon-exclamation-circle-fill class="h1"></b-icon-exclamation-circle-fill> <span> 테스트1 </span>
        </div>
        <div class="side-bar-item side-bar-opt">
          <b-icon-x class="h1"></b-icon-x> <span> 테스트1 </span>
        </div>
        <div class="side-bar-item side-bar-opt">
          <b-icon-x class="h1"></b-icon-x> <span> 테스트1 </span>
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
      if( this.width > 1280 ) return '300px'
      
      return '100px'
    }
  }
}
</script>
<style lang="scss" scoped>
  .side-bar {
    padding-left: 25px;
    .side-bar-title {
      height: 100px;
      margin-top:20px;
    }
    .side-bar-opt {
      height: 40px;
      display: flex;
      justify-content: left;
      align-items: center;
      margin-bottom: 15px;
      cursor: pointer;
    }
    .side-bar-opt:hover::after {
      border: 1px solid red;
      content: 'asdasdasd'
    }
  }
</style>