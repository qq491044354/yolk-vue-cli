<template>
  <div class="container">
    <span>{{ '0' }}</span>
    <empty></empty>
  </div>
</template>

<script>
export default {
  name: 'Home',
  mounted() {}
}
</script>
<style lang="scss" scoped>
.container {
  > span {
    font-size: 30px;
    color: $primary-color;
  }
}
</style>
