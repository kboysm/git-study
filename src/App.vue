<template>
  <div id="app">
    <side-navbar></side-navbar>
    <div class="inline">
      <router-view/>
    </div>
  </div>
</template>
<script>
import SideNavbar from '@/components/SideNavbar.vue'
export default {
  components:{
    SideNavbar
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
