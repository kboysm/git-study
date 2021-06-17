<template>
  <div>
    <!-- <file-shape></file-shape>-->
    <!-- <virtual-selector-and-custom-attribute></virtual-selector-and-custom-attribute> -->
    <!-- <PromiseTest /> -->
    <!-- <HighlightTest /> -->
    <ProjectTable />
  </div>
</template>

<script>
import FileShape from '@/components/test/FileShape.vue'
import VirtualSelectorAndCustomAttribute from '@/components/test/VirtualSelectorAndCustomAttribute.vue'
import PromiseTest from '@/components/PromiseTest.vue'
import HighlightTest from '@/components/HighlightTest.vue'
import ProjectTable from '@/components/ProjectTable.vue'


export default {
  name: 'Home',
  components: {
    FileShape,
    VirtualSelectorAndCustomAttribute,
    PromiseTest,
    HighlightTest,
    ProjectTable
  }
}
</script>
<style lang="scss" scoped>
  
</style>