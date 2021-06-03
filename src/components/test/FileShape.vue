<template>
    <div>
        <div class="file-stap-1 d-flex">
            <div class="file-stap-1-1"></div>
            <div class="file-stap-1-2"></div>
            <div class="file-stap-1-3"></div>
            <div>
                <b-badge size="lg" class="bg-dark test">삼다수</b-badge>
            </div>
        </div>
        <div class="file-stap-2">
            f림상민
            <br>
            ㅁㄴㅇㅁㄴㅇ<br>
            ㅁㄴㅇㅁㄴㅇ<br>
            ㅁㄴㅇㅁㄴㅇ<br>
        </div>
        <div></div>
    </div>
</template>
<style lang="scss" scoped>
    .file-stap-1 {
        .test {
            position:absolute;
            left: 10px;
            top:20px;
        }
        .file-stap-1-1 {
            width:100px;
            height: 50px;
            background-color: yellow;
        }
        .file-stap-1-2 {
            width:0;
            height:0;
            background-color: blue;
            border-top: 25px solid #fff;
            border-right: 25px solid #fff;
            border-bottom: 25px solid yellow;
            border-left: 25px solid yellow;
        }
        .file-stap-1-3 {
            width:100px;
            height: 50px;
            background-color: #fff;
        }
    }
    .file-stap-2 {
        width: 300px;
        height: 200px;
        background-color: yellow;
    }
</style>