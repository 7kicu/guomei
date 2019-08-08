<template>
  <div class="gomes">
    <!-- 上下滚动 -->
    <headlines :Headlines="gome"></headlines>
    <!-- 秒杀 -->
    <spike :spikes="gome"></spike>
  </div>
</template>

<script>
// <!-- 上下滚动 -->
import Headlines from '@/components/home/components/gome/Headlines'
// 秒杀
import Spike from '@/components/home/components/gome/Spike'
export default {
  name: 'Gome',
  props: ['gome'],
  components: {
    Headlines,
    Spike
  }
}
</script>

<style lang="less" scoped>
@rem: 15rem;
.gomes {
  background: #fff;
  border: 1 / @rem solid #fff;
  margin: 15 / @rem 0;
}
</style>
