<template>
  <div>
    <!-- <file-shape></file-shape>-->
    <virtual-selector-and-custom-attribute></virtual-selector-and-custom-attribute>
  </div>
</template>

<script>
import FileShape from '@/components/test/FileShape.vue'
import VirtualSelectorAndCustomAttribute from '@/components/test/VirtualSelectorAndCustomAttribute.vue'

export default {
  name: 'Home',
  components: {
    FileShape,
    VirtualSelectorAndCustomAttribute
  }
}
</script>
<style lang="scss" scoped>
  
</style>