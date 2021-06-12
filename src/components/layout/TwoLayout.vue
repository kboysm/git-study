<template>
<div>
    <div class="bg-dark text-white" style="height:100px;">
        TwoLayout
        <div class="d-flex justify-content-center w-100 bg-white text-dark">
            <router-link to="/testThreePage"  :class="{ 'active': threeActive }">Three</router-link>
             | 
            <router-link to="/testFourPage"  :class="{ 'active': FourActive }">Four</router-link>
        </div>
    </div>
            <router-view/>
</div>
</template>
<script>
export default {
    data() {
        return {
            threeActive: false,
            FourActive: false
        }
    },
    created() {
        this.routeTestMethod()
    },
    beforeUpdate() {
        this.routeTestMethod()
    },
    methods:  {
        routeTestMethod( item ) {
            this.$route.path === '/testThreePage' ? this.threeActive= true : this.threeActive= false
            this.$route.path === '/testFourPage' ? this.FourActive= true : this.FourActive= false
            return this.routeTest
        }
    },
}
</script>

<style lang="scss" scoped>
a {
    text-decoration: none;
    outline: none;
    color: black;
}

.active {
        color: red;
}
</style>