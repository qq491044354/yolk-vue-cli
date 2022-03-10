<template>
  <div>
    <el-button @click="showMessage" type="success">测试</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    showMessage() {
      this.$message.error('加速成功，请半小时后查看')
    }
  },
  mounted() {}
}
</script>

<style></style>
