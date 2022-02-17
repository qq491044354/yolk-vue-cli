<template>
  <div class="wrap-404">
    <div class="content">
      <div class="box-404">
        <img src="@/assets/images/404.png" alt="" />
        <!-- <div class="text-wrap">
          <p>抱歉，您访问的页面走丢了～</p>
          <el-button @click="$router.push('/')">返回首页</el-button>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "404",
  components: {},
};
</script>

<style lang="scss" scoped>
.wrap-404 {
  height: 100vh;
  display: flex;
  flex-direction: column;
  .content {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .box-404 {
    text-align: center;
    color: #7d8084;
    img {
      display: block;
      width: 1200px;
      height: 800px;
    }
    p {
      padding: 34px 0 32px;
      font-size: 16px;
    }
    &::v-deep {
      .el-button {
        padding: 11px 27px;
        font-size: 14px;
        border-radius: 18px;
        // color: $primary-color;
        // border-color: $primary-color;
      }
    }
  }
}
</style>
