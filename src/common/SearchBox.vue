<template>
  <div class="searchbox">
    <div class="top">
      <router-link tag="span" to="/" class="logo">取消</router-link>
      <div class="search">
        <span class="iconfont">&#xe620;</span>
        <input type="text" placeholder="手机以旧换新" />
      </div>
    </div>
    <div class="hot">
      <p>热词推荐</p>
      <ul>
        <li>苹果手机</li>
        <li>空调</li>
        <li>冰箱</li>
        <li>海尔洗衣机</li>
        <li>华为手机</li>
        <li>小米电视</li>
        <li>美的空调</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchBox'
}
</script>

<style lang="less" scoped>
@rem: 15rem;
.searchbox {
  .top {
    height: 50 / @rem;
    width: 100%;
    background: #fff;
    position: fixed;
    top: 0;
    z-index: 99;
    display: flex;
    line-height: 50 / @rem;
    align-content: center;
    text-align: center;
    flex-wrap: wrap;
    box-sizing: border-box;
    border-bottom: 1px solid #eee;
    .logo {
      font-size: 16 / @rem;
      line-height: 40 / @rem;
      margin: 5 / @rem 15 / @rem 0 10 / @rem;
      color: #666666;
    }
    .search {
      display: inline-block;
      position: relative;
      flex: 4;
      margin-right: 10 / @rem;
      span {
        position: absolute;
        font-size: 14 / @rem;
        color: #999;
        left: 20 / @rem;
        top: 2 / @rem;
      }
      input {
        border-radius: 20 / @rem;
        height: 30 / @rem;
        width: 80%;
        padding-left: 20%;
        background: #eee;
        color: #999;
        font-size: 14 / @rem;
      }
    }
  }
  .hot {
    margin-top: 70 / @rem;
    padding-bottom: 15 / @rem;
    border-bottom: 1px solid #e6e6e6;
    p {
      font-size: 14 / @rem;
      margin: 0 / @rem 0 20 / @rem 10 / @rem;
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        width: calc(100% / 5);
        font-size: 12 / @rem;
        border: 1px solid #e6e6e6;
        border-radius: 10 / @rem;
        text-align: center;
        padding: 5 / @rem 0;
        margin-left: 10 / @rem;
        margin-top: 10 / @rem;
        color: #666;
      }
    }
  }
}
</style>
