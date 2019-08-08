<template>
  <div class="sel_footer">
    <ul>
      <li>登录</li>
      <i></i>
      <li>注册</li>
      <i></i>
      <li>更多</li>
      <i></i>
      <li>反馈</li>
    </ul>
    <div class="copyright">
      <div>
        <p>copyright © 2000-2019 gome.com.cn</p>
        <p>客服热线：4008-708-708</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SelFooter'
}
</script>

<style lang="less" scoped>
@rem: 15rem;
.sel_footer {
  width: 100%;
  background: #fff;
  ul {
    width: 80%;
    height: 49 / @rem;
    margin: 0 auto;
    line-height: 49 / @rem;
    display: flex;
    flex-direction: row;
    li {
      width: calc(100% / 4);
      text-align: center;
      font-size: 13 / @rem;
      color: #888;
    }
    i {
      display: inline-block;
      width: 1 / @rem;
      height: 13 / @rem;
      background: #ddd;
      margin-top: 18 / @rem;
    }
  }
  .copyright {
    width: 100%;
    border-top: 1 / @rem solid #ccc;
    text-align: center;
    div {
      padding-top: 15 / @rem;
      padding-bottom: 15 / @rem;
      p {
        font-size: 12 / @rem;
        color: #888;
        padding-top: 5 / @rem;
      }
    }
  }
}
</style>
