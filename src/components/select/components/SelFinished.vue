<template>
  <div class="sel_finished">
    <i class="fin_line"></i>
    <i class="fin_round"></i>
    <span>看完了</span>
    <i class="fin_round"></i>
    <i class="fin_line fin_right"></i>
  </div>
</template>

<script>
export default {
  name: 'SelFinished'
}
</script>

<style lang="less" seoped>
@rem: 15rem;
.sel_finished {
  width: 100%;
  height: 65 / @rem;
  line-height: 65 / @rem;
  text-align: center;
  .fin_line {
    display: inline-block;
    width: 60 / @rem;
    height: 1 / @rem;
    background: rgba(0, 0, 0, 0.6);
    position: relative;
    top: -5 / @rem;
    left: 2 / @rem;
    &.fin_right {
      left: -4 / @rem;
    }
  }
  .fin_round {
    display: inline-block;
    width: 5 / @rem;
    height: 5 / @rem;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.6);
    position: relative;
    top: -3 / @rem;
  }
  span {
    padding: 0 5 / @rem 0 5 / @rem;
    font-size: 14 / @rem;
    color: rgba(0, 0, 0, 0.6);
  }
}
</style>
