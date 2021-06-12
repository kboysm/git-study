<template>
    <div class="test-container test2">
        <div :class="{ 'active': routeTestMethod }">
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
    computed: {
        routeTestMethod() {
            this.$route.path === '/testThreePage' ? this.routeTest= true : this.routeTest= false
            return this.routeTest
        }
    },
    methods: {
        
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