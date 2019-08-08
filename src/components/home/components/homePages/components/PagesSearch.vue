<template>
  <div class="home_search">
    <div>
      <i class="iconfont">&#xe620;</i>
      <span>空调</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PagesSearch'
}
</script>

<style lang="less" scoped>
@rem: 15rem;
.home_search {
  padding: 10 / @rem 0 20 / @rem 0;
  div {
    width: 90%;
    height: 30 / @rem;
    background: #fff;
    border-radius: 20 / @rem;
    margin: 0 auto;
    line-height: 30 / @rem;
    text-align: center;
    i {
      font-size: 14 / @rem;
    }
    span {
      font-size: 13 / @rem;
      color: #ccc;
    }
  }
}
</style>
