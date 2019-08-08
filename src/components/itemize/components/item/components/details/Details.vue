<template>
  <div class="wrap">
    <div class="details" v-if="data">
      <!-- 分类头部item-top -->
      <item-top :back="back"></item-top>
      <!-- 排序方式sort -->
      <sort></sort>
      <!-- 标签label -->
      <labels :labels="labels"></labels>
      <!-- 列表list -->
      <list :list="list"></list>
    </div>
  </div>
</template>

<script>
import ItemTop from '@/components/itemize/components/ItemTop'
import Sort from '@/components/itemize/components/item/components/details/components/Sort'
import List from '@/components/itemize/components/item/components/details/components/List'
import Labels from '@/components/itemize/components/item/components/details/components/Labels'
import { getList } from '@/api/index.js'
// import BScroll from '@better-scroll/core'
export default {
  name: 'Details',
  data () {
    return {
      back: '/itemize',
      data: [],
      list: {},
      labels: []
    }
  },
  created () {
    // 请求数据
    getList().then(({ data }) => {
      this.data = data.data
      this.list = this.data.filter(e => {
        return this.$route.params.no === e.no
      })[0]
      this.labels = this.list.labels
    })
  },
  components: {
    ItemTop,
    Sort,
    Labels,
    List
  },
  mounted () {
    // this.$refs.wrap.style.height = window.screen.availHeight + 'px'
    // this.$nextTick(() => {
    //   /* eslint-disable */
    //   new BScroll('.wrap', { click: true })
    // })
  },
  watch: {
    // data() {
    //   this.$nextTick(() => {
    //     /* eslint-disable */
    //     new BScroll('.wrap', { click: true })
    //   })
    // }
  }
}
</script>

<style>
</style>
