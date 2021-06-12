<template>
    <div class="test-container test2">
        <div :class="{ 'active': routeTest }">
            route 테스트 진행 , route경로가 /testThreePage라면 css 효과 부여
        </div>
        
    </div>
</template>
<script>
export default {
    data() {
        return {
            routeTest: false
        }
    },
    created() {
        this.routeTestMethod()
    },
    methods: {
        routeTestMethod() {
            this.$route.path === '/testThreePage' ? this.routeTest= true : this.routeTest= false
        }
    }
}
</script>
<style lang="scss" scoped>
.test-container {
    & > .active {
        color: red;
    }
}
</style>