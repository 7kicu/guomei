<template>
  <div class="tips-box">
    <div class="login-top">
      <p>立即登录，同步电脑和手机购物车中的商品</p>
      <span>去登陆</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Tip'
}
</script>
<style lang="less" scoped>
@rem: 15rem;
.tips-box {
  margin-top: 44 / @rem;
  height: 36 / @rem;
  width: 100%;
  line-height: 1;
  background: #fff;
  .login-top {
    display: flex;
    font-size: 14 / @rem;
    padding: 0 / @rem 12 / @rem;
    line-height: 36 / @rem;
    p {
      color: #999;
    }
    span {
      width: 59 / @rem;
      height: 22 / @rem;
      border: 1 / @rem solid #cacccf;
      border-radius: 22 / @rem;
      line-height: 22 / @rem;
      text-align: center;
      margin-left: auto;
      color: #5a6066;
      margin-top: 6 / @rem;
    }
  }
}
</style>
