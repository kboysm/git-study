<template>
<div>
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
      <template slot="table-row" slot-scope="props">
            <span v-if="props.column.field == 'age'">
            <span style="font-weight: bold; color: blue; border:none;">{{props.row.name}}</span> 
            </span>
            <span v-else>
            {{props.formattedRow[props.column.field]}}
            </span>
        </template>
      </vue-good-table>
    <router-view/>
</div>
    
</template>
<script>
import 'vue-good-table/dist/vue-good-table.css'
import { VueGoodTable } from 'vue-good-table';

export default {
    components: {
VueGoodTable
    },
     data(){
    return {
      columns: [
        {
          label: '이름',
          field: 'name',
          sortable: false,
          thClass: 'test-class'
        },
        {
          label: '공유자',
          field: 'sharer',
          sortable: false,
          thClass: 'test-class'
        },
        {
          label: '업로드 날짜',
          field: 'createdAt',
          sortable: false,
          thClass: 'test-class'
        },
        {
          label: '사이즈',
          field: 'size',
          sortable: false,
          thClass: 'test-class'
        },
        {
          label: '업로드 건수/필요 건수',
          field: 'goalNeed',
          sortable: false,
          thClass: 'test-class'
        },
      ],
      rows: [
        { id:1, name:"가나다라마바", sharer: '김복자', createdAt: '2011-10-05', size: '12kb', goalNeed: '3/5' },
        { id:2, name:"사아자차카타", sharer: '강춘자', createdAt: '2011-10-31', size: '12kb', goalNeed: '1/5'},
        
      ],
    };
  },
}
</script>
// <style lang="scss" scoped>
/deep/ .test-class {
    color: red;
    background-color: black;
    height: 15px;
    font-size: 14px;
    border-right: 0px;
}
/deep/ .vgt-responsive table > tbody > tr > .vgt-checkbox-col {
    border-right: none !important;
    background: none !important;
    border-bottom: 1px solid blue;
}
</style>