<template>
  <div>
    <input v-model="search" type="text" @input="handleInput">
    <ul>
      <li v-for="item in searchAndReturn" :key="item.id">
        <!-- <span v-html="item.id"></span>
        <span v-html="item.name"></span>
        <span v-html="item.code"></span> -->
        <text-highlight :queries="search">{{ item.name }}</text-highlight>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          id:1,
          name:'이더리움 비트코인',
          code: "테스트"
        },
        {
          id:2,
          name:'아쿠아랜드파크 우와굿',
          code: "테스트1"
        },
        {
          id:3,
          name:'역삼역 흡연장 너무 좁아',
          code: "테스트 2"
        },
        {
          id:4,
          name:'하지만 25층 밥집은 맛있어',
          code: "테스트 3"
        },
        {
          id:5,
          name:'맛있는 밥은 좋지만 너무 기다려야해',
          code: "테스트 4"
        },
      ],
      search: '',
      searchkeyword: ''
    }
  },
  computed: {
    searchAndReturn() {
      if(!this.search) return this.items
      return this.items.filter( item => item.name.includes(this.search) )
    }
  },
  methods: {
    handleInput( e ) {
      this.search= e.target.value;
    },
  }
}
</script>
<style lang="scss" scoped>
  .highlight {
    background: #f1c40f;
  }
  /deep/ .text__highlight {
    background: red;
    padding:0;
  }
</style>