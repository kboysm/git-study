<template>
    <div class="test-container test2">
        <div v-for="(item, index) in sortList" :key="index">
            {{item}}
        </div>
        
    </div>
</template>
<script>
export default {
    data() {
        return {
            folderList: [
                { name: 'test' , depth: 0, sortData: '0'},
                { name: 'test' , depth: 1, sortData: '0'},
                { name: 'test' , depth: 0, sortData: '1'},
                { name: 'test' , depth: 3, sortData: '0'},
                { name: 'test' , depth: 2, sortData: '0'},
                { name: 'test' , depth: 2, sortData: '0'},
                { name: 'test' , depth: 1, sortData: '0'},
            ]
        }
    },
    computed: {
        sortList() {
            return this.folderList.sort((a,b)=> {
                if(a.sortData < b.sortData ) return -1;
                if(a.sortData > b.sortData ) return 1;
                if(a.depth < b.depth ) return -1;
                if(a.depth > b.depth ) return 1;
            })
        }
    }
}
</script>
