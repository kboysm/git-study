<template >
  <div class="table-container">
    <vue-good-table
      :columns="columns"
      :rows="rows"
      >
    </vue-good-table>
  </div>
</template>
<script>
import 'vue-good-table/dist/vue-good-table.css';
import { VueGoodTable } from 'vue-good-table';

export default {
  // add to component
  components: {
    VueGoodTable,
  },
   data(){
    return {
      columns: [
        {
          label: '상태',
          field: 'state',
        },
        {
          label: '건수',
          field: 'count',
        },
        {
          label: '시작일',
          field: 'projectName',
        },
        {
          label: '클라이언트',
          field: 'client',
        },
        {
          label: '시작일',
          field: 'startDate',
        },
        {
          label: '권한',
          field: 'auth',
        },
        {
          label: '계약금',
          field: 'money',
        },
      ],
      rows: [
        { id:1, state:"진행중", count: 0, projectName: 'test-data', client: '', startDate: '2021-04-01',auth:'auth', money:'2,000,000'},
        { id:2, state:"진행중", count: 0, projectName:'test-data1' , client: 'sam', startDate: '2021-04-01',auth:'unAuth', money:'1,000,000'},
        { id:3, state:"진행중", count: 0, projectName:'test-data2' , client: 'joy', startDate: '2021-04-01',auth:'auth', money:'50,000,000'},
        { id:4, state:"영업중", count: 0, projectName:'test-data3' , client: 'min', startDate: '2021-04-01',auth:'unAuth', money:',40,000,000'},
        { id:5, state:"영업중", count: 0, projectName:'test-data4' , client: 'ryo', startDate: '2021-04-01',auth:'auth', money:'80,000,000'},
        { id:6, state:"완료", count: 0, projectName:'test-data5' , client: 'ya', startDate: '2021-04-01',auth:'unAuth', money:'80,000,000'},
      ],
    };
  },
}
</script>
<style lang="scss" scoped>
  .table-container {
    width:100%;
    max-width: 1200px;
  }
</style>