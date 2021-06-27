<template>
  <div>
    {{ testData }}
  </div>
</template>
<script>
export default {
  data() {
    return {
      testData: [
        {
          id: 0,
          type: "folder",
          name: "test-folder-1",
          isChild: true,
          isSelected: true,
          childVisible: false,
          child: [
            {
              id: 10,
              type: "file",
              name: "test-file-1",
              isSelected: true,
              parentFolderId: 0,
            },
            {
              id: 11,
              type: "file",
              name: "test-file-2",
              isSelected: true,
              parentFolderId: 0,
            },
          ],
        },
        {
          id: 1,
          type: "folder",
          name: "test-folder-2",
          isSelected: true,
          isChild: true,
          childVisible: false,
          child: [
            {
              id: 20,
              type: "file",
              name: "test-file-3",
              isSelected: true,
              parentFolderId: 1,
            },
            {
              id: 21,
              type: "file",
              name: "test-file-4",
              isSelected: true,
              parentFolderId: 1,
            },
          ],
        },
      ]
    }
  },
  created() {
    this.resetData();
  },
  methods: {
    resetData() {
      this.testData = this.testData.map((item) => {
        return {
          ...item,
          isSelected: false,
          child: item.child.map((v) => {
            v.isSelected = false
            return v;
          }),
        };
      });
    },
  }
}
</script>
<style lang="">
  
</style>