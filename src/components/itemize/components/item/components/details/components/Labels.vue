<template>
  <ul class="labels">
    <!-- l.txt如果为1，则本标签显示  l.pic为1，则本图标显示，为0则不显示 -->
    <li v-for="(l,i) in labels" :key="i">
      <span>{{l.title}}</span>
      <span v-if="l.pic" class="bg"></span>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Labels',
  props: ['labels']
}
</script>

<style lang="less" scoped>
@rem: 15rem;
.labels {
  width: 100%;
  height: 46 / @rem;
  display: flex;
  box-sizing: border-box;
  box-shadow: 0 1 / @rem 1 / @rem #f7f7f7;
  padding: 10 / @rem;
  li {
    width: 83 / @rem;
    height: 26 / @rem;
    box-sizing: border-box;
    text-align: center;
    line-height: 26 / @rem;
    background: #f3f5f7;
    border-radius: 3 / @rem;
    margin-right: 7.5 / @rem;
    color: #999;
    font-size: 12 / @rem;
    &:last-child {
      margin-right: 0;
    }
    span.bg {
      display: inline-block;
      width: 8 / @rem;
      height: 6 / @rem;
      background: url(../images/labels_down_gray.png) center no-repeat;
      background-size: 6 / @rem 4 / @rem;
      vertical-align: 2 / @rem;
    }
  }
}
</style>
