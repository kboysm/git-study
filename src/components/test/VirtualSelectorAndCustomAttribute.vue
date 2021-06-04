<template>
    <div>
        <div>
            <div class="test">가상 선택자 before, after test</div>
            <div data-name="limsm" class="virtual-attribute">테스트</div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    // .test::before {
    //     border-top: 1px solid blue;
    //     border-right: 9px solid blue;
    //     border-bottom: 1px solid blue;
    //     border-left: 9px solid blue;
    //     background-color: blue;
    //     border-radius: 50%;
    //     content: '';
    // }
    // .test::after {
    //     content: 'SALE!';
    //     color: #fff;
    //     background-color: red;
    //     border-radius: 10%;
    //     padding: 5px 10px 5px 10px;
    //     margin-left: 5px;
    // }
    .virtual-attribute { //custom attribute를 활용하여 color 바꾸기
        &::after { // & 는 상위 태그를 의미
            content: attr(data-name);
        }
    }
</style>