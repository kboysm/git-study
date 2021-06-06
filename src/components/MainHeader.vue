<template>
    <div class="d-flex justify-content-between border-bottom responsive-header-width">
        <div class="d-flex flex-column h-100">
            <div class="d-flex justify-content-between w-100 pt-1 pb-1">
                <div>용량</div>
                <div>13GB/15GB</div>
            </div>
            <div>
                <b-progress value="75" max="100" class="mb-3" style="width:200px;"></b-progress>
            </div>
        </div>
        <div class="d-flex align-items-center">
            <b-button class="d-flex align-items-center bg-white text-dark border-0 shadow-none">
                알림 <h5><b-badge class="rounded-circle ml-1 mt-2" variant="danger">6</b-badge></h5>
            </b-button>
            <b-button class="bg-white text-dark border-0 shadow-none">
                <b-avatar size="sm"></b-avatar>
                관리자
                <b-icon-chevron-down></b-icon-chevron-down>
                </b-button>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.responsive-header-width {
      padding-left: 260px !important;
      padding-right: 10px !important;
    }
  @media screen and (max-width: 1280px) {
    .responsive-header-width {
      padding-left: 110px !important;
      padding-right: 10px !important;
    }
  }
</style>