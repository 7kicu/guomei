<template>
  <div class="sort">
    <div class="active">
      <span>综合</span>
      <span class="down"></span>
    </div>
    <div>
      <span>价格</span>
      <span class="gray"></span>
    </div>
    <div>
      <span>销量</span>
    </div>
    <div>
      <span>筛选</span>
      <span class="filter"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sort',
  data () {
    return {
    }
  }
}
</script>

<style lang="less" scoped>
@rem: 15rem;
.sort {
  width: 100%;
  height: 40 / @rem;
  display: flex;
  box-sizing: border-box;
  box-shadow: 0 1/@rem 1/@rem #f0f0f0;
  div {
    width: 25%;
    height: 100%;
    text-align: center;
    line-height: 40 / @rem;
    font-size: 0;
    &.active {
      color: #f20c59;
    }
    span {
      display: inline-block;
      font-size: 13 / @rem;
      vertical-align: middle;
      &.down {
        width: 16 / @rem;
        height: 11 / @rem;
        background: url(../images/sort_down.png) center no-repeat;
        background-size: 8 / @rem 4 / @rem;
        margin-top: -5/@rem;
      }
      &.gray {
        width: 12 / @rem;
        height: 33 / @rem;
        background: url(../images/sort_gray.png) center no-repeat;
        background-size: 6 / @rem 10 / @rem;
        margin-top: -3/@rem;
      }
      &.filter {
        width: 15 / @rem;
        height: 15 / @rem;
        background: url(../images/sort-filter.png) center no-repeat;
        background-size: 10 / @rem 11 / @rem;
        margin-top: -2/@rem;
      }
    }
  }
}
</style>
