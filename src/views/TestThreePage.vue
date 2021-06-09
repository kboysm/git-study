<template>
    <div class="test-container test2">
        <div class="test-child">
            <span>A</span> <span>B</span>
        </div>
        <div class="test-container-main">
            <span>C</span><span>D</span>
        </div>
        <div class="test-child">
            <span>C</span><span>D</span>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.test-container {
    & > .test-child {
        color: red;
    }
    &-main {
        color: blue;
    }
    &.test2 {
        background-color:black;
    }
}
</style>