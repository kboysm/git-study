<template>
    <div class="d-flex justify-content-between border-bottom">
        <div class="d-flex flex-column h-100">
            <div class="d-flex justify-content-between w-100">
                <div>용량</div>
                <div>13GB/15GB</div>
            </div>
            <div>
                <b-progress value="75" max="100" class="mb-3" style="width:200px;"></b-progress>
            </div>
        </div>
        <div class="d-flex align-items-center">
            <b-button class="bg-white text-dark border-0 shadow-none">알림</b-button>
            <b-button class="bg-white text-dark border-0 shadow-none"> <b-avatar size="sm"></b-avatar> 관리자</b-button>
        </div>
    </div>
</template>