<template>
  <div class="main">
    <div class="cart-null-box">
      <div class="null-icon">
        <img src="../images/bj_baobei.png" />
      </div>
      <p>购物车还是空的，快去挑选商品吧</p>
      <span>先逛逛</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MainNull'
}
</script>
<style lang="less" scoped>
@rem: 15rem;
.main {
  width: 100%;
  background: #fff;
  .cart-null-box {
    padding: 50 / @rem 0 / @rem;
    font-size: 14 / @rem;
    text-align: center;
    .null-icon {
      width: 50%;
      margin: 0 auto;

      img {
        width: 100%;
      }
    }
    p {
      color: #999;
      margin-bottom: 3%;
    }
    span {
      color: #fff;
      background: #fa1e8c;

      border-radius: 37 / @rem;
      line-height: 37 / @rem;
      text-align: center;
      padding: 2% 5%;
    }
  }
}
</style>
