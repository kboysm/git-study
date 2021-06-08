<template>
    <div class="d-flex bg-dark" style="position:relative;">
    <div class="stap-1">
      asd
    </div>
    <div class="stap-2">
      <div class="stap-2-1"></div>
      <div class="stap-2-2"></div>
      <div class="stap-2-3"></div>
      <div class="stap-2-4"></div>
    </div>
    <div class="stap-3">

    </div>
    <div class="stap-4">
      <span style="position:absolute; left:-10px;z-index:10;">
      asdasdasd
      </span>
    </div>
    <div class="stap-5">
      <div class="stap-5-1"></div>
      <div class="stap-5-2"></div>
      <div class="stap-5-3"></div>
      <div class="stap-5-4"></div>
    </div>
    <div class="stap-6"></div>
    <div class="stap-7"></div>
    <div class="stap-8"></div>
  </div>
</template>
<style lang="scss" scoped>
.stap-1 {
    width: 200px;
    height: 100px;
    background-color: green;
  }
  .stap-2 {
    position: relative;
    .stap-2-1 {
      width:50px;
      height: 25px;
      position:relative;
      // left:200px;
      border-left: 25px solid green;
      border-right: 0 solid #fff;
      border-top: 25px solid #fff;
      border-bottom: 0 solid #fff;
      z-index: 8;
    }
    .stap-2-2 {
      width:50px;
      height: 25px;
      position:relative;
      // left:200px;
      // top:25px;
      border-left: 25px solid green;
      border-right: 25px solid #fff;
      // border-top: 0 solid #fff;
      border-bottom: 25px solid green;
      z-index: 10;
    }
    .stap-2-3 {
      width:50px;
      height: 0px;
      position:relative;
      // left:200px;
      // top: 50px;
      border-left: 25px solid green;
      border-right: 25px solid #fff;
      border-top: 25px solid green;
      border-bottom: 0 solid #fff;
      z-index: 10;
    }
    .stap-2-4 {
      width:50px;
      height: 25px;
      position:relative;
      // left:200px;
      // top:75px;
      border-left: 25px solid green;
      border-right: 0 solid #fff;
      border-top: 0 solid #fff;
      border-bottom: 25px solid #fff;
      z-index: 8;
    }
  }
  .stap-3 {
    width:0;
    height: 0;
    position:relative;
    border-top: 50px solid blue;
    border-bottom: 50px solid blue;
    border-left: 50px solid #fff;
    border-right: 50px solid blue;
    left:-25px;
    z-index:9;
  }
  .stap-4 {
    width: 150px;
    height: 100px;
    position: relative;
    background-color: blue;
    left:-25px;
  }
  .stap-5 {
    position:relative;
    .stap-5-1 {
      width:50px;
      height: 25px;
      position:relative;
      left: -25px;
      border-left: 25px solid blue;
      border-right: 0 solid #fff;
      border-top: 25px solid #fff;
      border-bottom: 0 solid #fff;
      z-index: 8;
    }
    .stap-5-2 {
      width:50px;
      height: 25px;
      position:relative;
      left:-25px;
      border-left: 25px solid blue;
      border-right: 25px solid #fff;
      border-top: 0 solid #fff;
      border-bottom: 25px solid blue;
      z-index: 10;
    }
    .stap-5-3 {
      width:50px;
      height: 0px;
      position:relative;
      left:-25px;
      border-left: 25px solid blue;
      border-right: 25px solid #fff;
      border-top: 25px solid blue;
      border-bottom: 0 solid #fff;
      z-index: 10;
    }
    .stap-5-4 {
      width:50px;
      height: 25px;
      position:relative;
      left:-25px;
      border-left: 25px solid blue;
      border-right: 0 solid #fff;
      border-top: 0 solid #fff;
      border-bottom: 25px solid #fff;
      z-index: 8;
    }
  }
  .stap-6 {
    width:0;
    height: 0;
    position:relative;
    border-top: 50px solid red;
    border-bottom: 50px solid red;
    border-left: 50px solid #fff;
    border-right: 50px solid red;
    left:-50px;
    z-index:9;
  }
  .stap-7 {
    width: 100px;
    height: 100px;
    position: relative;
    background-color: red;
    left:-50px;
  }
  .stap-8 {
    width: 220px;
    height: 100px;
    position: relative;
    background-color: black;
    left: -25px;
  }
</style>