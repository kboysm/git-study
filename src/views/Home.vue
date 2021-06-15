<template>
  <div>
    <!-- <file-shape></file-shape>-->
    <!-- <virtual-selector-and-custom-attribute></virtual-selector-and-custom-attribute> -->
    <PromiseTest />
  </div>
</template>

<script>
import FileShape from '@/components/test/FileShape.vue'
import VirtualSelectorAndCustomAttribute from '@/components/test/VirtualSelectorAndCustomAttribute.vue'
import PromiseTest from '@/components/PromiseTest.vue'


export default {
  name: 'Home',
  components: {
    FileShape,
    VirtualSelectorAndCustomAttribute,
    PromiseTest
  }
}
</script>
<style lang="scss" scoped>
  
</style>