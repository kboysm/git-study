<template >
  <div class="table-container">
    <vue-good-table
      :columns="columns"
      :rows="rows"
      :select-options="{
        enabled: true,
        selectOnCheckboxOnly: true, // only select when checkbox is clicked instead of the row
        selectionInfoClass: 'custom-class',
        selectionText: 'rows selected',
        clearSelectionText: 'clear',
        disableSelectInfo: true, // disable the select info panel on top
        selectAllByGroup: true, // when used in combination with a grouped table, add a checkbox in the header row to check/uncheck the entire group
    }"
    styleClass="vgt-table"
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
          sortable: false,
          width: '117px',
          thClass: 'custom-th-class',
          tdClass: 'custom-td-class'
        },
        {
          label: '건수',
          field: 'count',
          sortable: false,
          width: '86px',
          thClass: 'custom-th-class',
          tdClass: 'custom-td-class'
        },
        {
          label: '프로젝트 이름',
          field: 'projectName',
          sortable: false,
          width: '277px',
          thClass: 'custom-th-class',
          tdClass: 'custom-td-class'
        },
        {
          label: '클라이언트',
          field: 'client',
          sortable: false,
          width: '100px',
          thClass: 'custom-th-class',
          tdClass: 'custom-td-class'
        },
        {
          label: '시작일',
          field: 'startDate',
          sortable: false,
          width: '99px',
          thClass: 'custom-th-class',
          tdClass: 'custom-td-class'
        },
        {
          label: '권한',
          field: 'auth',
          sortable: false,
          width: '100px',
          thClass: 'custom-th-class',
          tdClass: 'custom-td-class'
        },
        {
          label: '계약금',
          field: 'money',
          sortable: false,
          width: '117px',
          thClass: 'custom-th-class',
          tdClass: 'custom-td-class'
        },
        {
          label: '',
          field: 'blank',
          sortable: false,
          width: '20px',
          thClass: 'custom-th-class',
          tdClass: 'custom-td-class'
        },
      ],
      rows: [
        { id:1, state:"진행중", count: 0, projectName: 'test-data', client: '', startDate: '2021-04-01',auth:'auth', money:'2,000,000',blank: '...'},
        { id:2, state:"진행중", count: 0, projectName:'test-data1' , client: 'sam', startDate: '2021-04-01',auth:'unAuth', money:'1,000,000',blank: '...'},
        { id:3, state:"진행중", count: 0, projectName:'test-data2' , client: 'joy', startDate: '2021-04-01',auth:'auth', money:'50,000,000',blank: '...'},
        { id:4, state:"영업중", count: 0, projectName:'test-data3' , client: 'min', startDate: '2021-04-01',auth:'unAuth', money:',40,000,000',blank: '...'},
        { id:5, state:"영업중", count: 0, projectName:'test-data4' , client: 'ryo', startDate: '2021-04-01',auth:'auth', money:'80,000,000',blank: '...'},
        { id:6, state:"완료", count: 0, projectName:'test-data5' , client: 'ya', startDate: '2021-04-01',auth:'unAuth', money:'80,000,000',blank: '...'},
      ],
    };
  },
}
</script>
<style lang="scss" scoped>
  .table-container {
    width:100%;
    max-width: 988px;
    margin-left: 50px;
    margin-top: 50px;
  }
/deep/ .custom-th-class {
    background-color: black !important;
    background: none;
    font-size: 12px;
    border-right: 0px;
    height: 48px;
    color: rgb(201, 198, 198);
}
/deep/ .custom-td-class {
    font-size: 14px;
    border-right: 0px;
    height: 48px;
    border-right: 0px;
}
/deep/ .vgt-responsive table > tbody > tr > .vgt-checkbox-col {
    border-right: none !important;
    background: none !important;
    border-bottom: 1px solid rgb(221, 220, 220);
}
/deep/ .vgt-responsive table > thead > tr > .vgt-checkbox-col {
    border-right: none !important;
    border-bottom: 1px solid rgb(221, 220, 220);
    background: none;
    background-color: black !important;
}
</style>