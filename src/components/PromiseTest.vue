<template>
  <div>
    
  </div>
</template>
<script>
export default {
  data() {
    return {
      
    }
  },
  created() {
    // this.promiseTest2(); // 5000 -> 2000
    this.promiseTest(5000);
    this.promiseTest(2000);
    // 2000 -> 5000 , 그냥 promise만 사용할 시 수행 순서가 보장되지 않지만 async await를 활용한 promise는 비동기 처리가 가능하다.
  },
  methods: {
    promiseTest( time ) {
      return new Promise((res,rej)=> {
         setTimeout(()=> {
           console.log(time)
           res()
         },time) 
      })
    },
    async promiseTest2() {
      await this.promiseTest(5000);
      await this.promiseTest(2000);
    }
  }
}
</script>
<style lang="">
  
</style>