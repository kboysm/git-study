<template>
    <div class="test-container test2">
        <div>
            route 테스트 진행 , route경로가 /testThreePage라면 css 효과 부여
        </div>
        
    </div>
</template>

<style lang="scss" scoped>
.test-container {
    & > .active {
        color: red;
    }
}
</style>