<template>
  <div>
    {{ file }}
    <input @change="handleFileUpload" type="file" ref="file" accept="image/*" id="company-config-file" v-show="false" />
    <div @click="inputFocus"><b-avatar class="pointer" size="8rem"></b-avatar></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      file: ''
    }
  },
  watch: {
    file( newValue, oldValue) {
      console.log(newValue, oldValue);
      if(this.file) {
        const test = this.step2()
        .then( r=> {
          if( r ) return this.step3();
          return false;
        })
        .then( r => {
          console.log( r )
        })
        .catch( e => {
          console.log(e)
        })
        .finally(
          this.file= ''
        )
      }
    }
  },
  mounted() {
    // this.promiseTest2(); // 5000 -> 2000
    // this.promiseTest(5000);
    // this.promiseTest(2000);
    // 2000 -> 5000 , 그냥 promise만 사용할 시 수행 순서가 보장되지 않지만 async await를 활용한 promise는 비동기 처리가 가능하다.
  // this.step3();
  },
  methods: {
    // promiseTest( time ) {
    //   return new Promise((res,rej)=> {
    //      setTimeout(()=> {
    //        console.log(time)
    //        res()
    //      },time) 
    //   })
    // },
    // async promiseTest2() {
    //   await this.promiseTest(5000);
    //   await this.promiseTest(2000);
    // },
    handleFileUpload(){
        this.file = this.$refs.file.files[0];
    },
    inputFocus() { 
      return new Promise((resolve,reject) => {
        document.getElementById('company-config-file').click();
        resolve();
      })
    },
    step2( fileItem ) {
      return new Promise((resolve,reject) => {
        if( !this.file && !fileItem ) reject(new Error('파일이 없습니다.'))
        resolve( true )
      })
    },
    async step3() {
      return new Promise((resolve, reject)=> {
        setTimeout(()=> {
          console.log('hihi')
          resolve( true )
        },3000)
      })
    }
    
  }
}
</script>
<style lang="scss" scoped>
  .pointer {
    cursor: pointer;
  }
</style>