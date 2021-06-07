<template>
  <div class="d-flex flex-column bg-white text-dark rounded p-3 loding-popup">
    <div class="d-flex justify-content-center loding-animation w-100">
      <div class="line-1">
        <div class="loding-bar index-1"></div>
        <div class="loding-bar index-5"></div>
      </div>
      <div class="line-2">
        <div class="loding-bar index-2"></div>
        <div class="loding-bar index-6"></div>
      </div>
      <div class="line-3">
        <div class="loding-bar index-3"></div>
        <div class="loding-bar index-7"></div>
      </div>
      <div class="line-4">
        <div class="loding-bar index-4"></div>
        <div class="loding-bar index-8"></div>
      </div>
      <div class="line-center-circle"></div>
    </div>
    <div class="content font-weight-bold">
      데이터 처리중입니다.
    </div>
  </div>
</template>
<style lang="scss" scoped>
$modal-width: 450px;
$modal-height: 210px;
$loding-bar-width: 8px;
$loding-bar-height: 80px;
  .loding-popup {
    position: fixed;
    margin: 5% auto; /* Will not center vertically and won't work in IE6/7. */
    left: 0;
    right: 0;
    width: $modal-width;
    height: $modal-height;
    .loding-animation {
      .loding-bar {
        background-color:#9ED2D7; 
        width:100%;
        height:50%;
      }
      .line-1 {
        position:absolute;
        width: $loding-bar-width;
        height: $loding-bar-height;
        
      }
      .line-2 {
        position:absolute;
        width: $loding-bar-width;
        height: $loding-bar-height;
        transform: rotate(45deg);
      }
      .line-3 {
        position:absolute;
        width: $loding-bar-width;
        height: $loding-bar-height;
        transform: rotate(90deg);
      }
      .line-4 {
        position:absolute;
        width: $loding-bar-width;
        height: $loding-bar-height;
        transform: rotate(135deg);
      }
      .line-center-circle {
        position:absolute;
        top:31px;
        border: 25px solid #fff;
        border-radius: 50%;
      }
      .index-1 {
        animation-name: updateColor;
        animation-duration: .8s;
        animation-iteration-count: infinite;
        animation-delay: 0;
      }
      .index-2 {
        animation-name: updateColor;
        animation-duration: .8s;
        animation-iteration-count: infinite;
        animation-delay: .1s
      }
      .index-3 {
        animation-name: updateColor;
        animation-duration: .8s;
        animation-iteration-count: infinite;
        animation-delay: .2s
      }
      .index-4 {
        animation-name: updateColor;
        animation-duration: .8s;
        animation-iteration-count: infinite;
        animation-delay: .3s
      }
      .index-5 {
        animation-name: updateColor;
        animation-duration: .8s;
        animation-iteration-count: infinite;
        animation-delay: .4s
      }
      .index-6 {
        animation-name: updateColor;
        animation-duration: .8s;
        animation-iteration-count: infinite;
        animation-delay: .5s
      }
      .index-7 {
        animation-name: updateColor;
        animation-duration: .8s;
        animation-iteration-count: infinite;
        animation-delay: .6s
      }
      .index-8 {
        animation-name: updateColor;
        animation-duration: .8s;
        animation-iteration-count: infinite;
        animation-delay: .7s
      }
    }
    .content {
      position:absolute;
      bottom:0px;
      right:25%;
      left:50%;
      margin-left:-80px;
      width: 100%;
      height: $loding-bar-height;
    }
  }
  @keyframes updateColor {
      0% {
          background-color:#9ED2D7;  
      }
      80% {
          background-color:#9ED2D7; 
      }
      100% {
          background-color:   #3EA7B1; 
      }
  }
</style>