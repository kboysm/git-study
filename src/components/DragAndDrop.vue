<template >
<div>
  <div class="drop-zone" @drop="onDrop($event, 1)" @dragenter.prevent @dragover.prevent>
      <div v-for="item in getList(1)" :key="item.id" class="drag-el" draggable="true" @dragstart="startDrag( $event, item)">
        {{ item.title}}
      </div>
  </div>
  <div class="drop-zone" @drop="onDrop($event, 2)" @dragenter.prevent @dragover.prevent>
      <div v-for="item in getList(2)" :key="item.id" class="drag-el" draggable="true" @dragstart="startDrag( $event, item)">
        {{ item.title}}
      </div>
  </div>

</div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        { id: 0 ,title: 'Item A', list: 1},
        { id: 1 ,title: 'Item B', list: 1},
        { id: 2 ,title: 'Item C', list: 2},
      ]
    }
  },
  methods: {
    getList( list ) {
      return this.items.filter((item)=> item.list == list)
    },
    startDrag( event, item) {
      console.log( item.id )
      event.dataTransfer.dropEffect = 'move'
      event.dataTransfer.effectAllowed = 'move'
      event.dataTransfer.setData('itemID', item.id)
    },
    onDrop( event, listEl) {
      const itemID = event.dataTransfer.getData('itemID')
      console.log( itemID )
      const item = this.items.find((el)=> el.id == itemID)          
      console.log(item)
      if( item ) {
        item.list = listEl
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .drop-zone {
    width: 50%;
    margin: 50px auto;
    background-color: #ecf0f1;
    padding: 10px;
    min-height: 10px;
  }

  .drag-el {
    background-color:  #3498db;
    color: white;
    padding: 5px;
    margin-bottom: 10px;
  }

  .drag-el:nth-last-of-type(1) {
    margin-bottom: 0;
  }
</style>