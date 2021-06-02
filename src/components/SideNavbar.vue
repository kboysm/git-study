<template>
    <div class="col-lg-2 col-1 navBg pl-0 pr-0">
        <nav class="nav  navbar-toggleable-sm border-0">
            <div class="navbar  flex-column mt-md-0  pt-md-0  p-0 w-100" id="navbarWEX">
                <h1>Logo</h1>
                <a href="" class="nav-link"><b-icon-reception3></b-icon-reception3><span>Dashboard </span></a>
                <a href="" class="nav-link"><b-icon-folder2></b-icon-folder2><span>Media</span></a>
                <a href="" class="nav-link"><b-icon-people-fill></b-icon-people-fill><span>Pages</span></a>
                <a href="" class="nav-link"><b-icon-volume-up-fill></b-icon-volume-up-fill><span>Comments</span></a>

                <small>Taha Cankurt</small>
            </div>
        </nav>
    </div>
</template>
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