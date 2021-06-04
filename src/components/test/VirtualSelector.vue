<template>
    <div>
        <div>
            <div class="test"> 가상 선택자 before, after test</div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .test::before {
        border-top: 1px solid blue;
        border-right: 9px solid blue;
        border-bottom: 1px solid blue;
        border-left: 9px solid blue;
        background-color: blue;
        border-radius: 50%;
        content: '';
    }
</style>