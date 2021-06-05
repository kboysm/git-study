<template>
    <b-sidebar text-variant="white" bg-variant="dark" class="bg-dark text-white" v-model="showSidebar" no-header>
      <b-row>
        <b-col>
          title
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          section-1
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          section-2
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          section-3
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          section-4
        </b-col>
      </b-row>
    </b-sidebar>
</template>
<script>
export default {
  data() {
    return {
      showSidebar: true,
    }
  }
}
</script>
<style lang="scss" scoped>
h1,
a {
  width: 100%;
}
h1 {
  border-right: 1px solid #34495e;
}
body {
  height: 100%;
}
.navBg {
  background-color: gray;
  max-width: 196px;
  height: 100vh;
  nav {
    h1 {
      color: #34495e;
      font-size: 24px;
      font-weight: 300;
      padding: 25px 12px;
      background-color: white;
    }
    a {
      transition: 0.6s;
      padding-bottom: 15px;
      padding-top: 15px;
      color: white;
      font-weight: 300;
      &:hover {
        color: green;
        border-right: 3px solid green;
        i {
          color: #34495e;
        }
      }
    }
    i {
      padding-right: 10px;
    }
    small {
      color: white;
      text-align: center;
      margin-top: 15px;
    }
  }
}
@media (max-width: 767px) {
  .navBg {
    height: 100%;
    nav {
      padding-top: 0px;
    }
  }
}
@media (max-width: 576px) {
  .navBg {
    height: 100vh;
    max-width: 55px;
    nav {
      padding-top: 0px;
      h1 {
        display: none;
      }
      a {
        text-align: center;
      }
      i {
        padding-right: 0px;
      }
      span {
        display: none;
      }
    }
  }
}
@media screen and (max-height: 600px) {
  .navBg {
    height: 100%;
    nav {
      padding-top: 0px;
    }
  }
}

</style>