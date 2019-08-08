<template>
  <div class="countdown">{{time.h}}:{{time.m}}:{{time.s}}</div>
</template>

<script>
import countdown from '@/util/countdown'
export default {
  name: 'Countdown',
  props: ['seckill'],
  data () {
    return {
      time: {
        h: '',
        m: '',
        s: '',
        timer: null
      }
    }
  },
  methods: {
    // 解决倒计时一秒延迟
    tel (t) {
      var str = countdown(t)
      // 判断倒计时是否结束
      if (str === 'over') {
        clearInterval(this.time.timer)
      } else {
        var arr = str.split(',')
        this.time.h = arr[0]
        this.time.m = arr[1]
        this.time.s = arr[2]
      }
    }
  },
  mounted () {
    // this.tel(to)
  },
  watch: {
    'seckill' (to) {
      this.tel(to)
      // 未来时间数据
      this.time.timer = setInterval(() => {
        this.tel(to)
      }, 1000)
    }
  }
}
</script>

<style lang="less" scoped>
.countdown {
  display: inline-block;
}
</style>
