<template>
  <div>
    <!-- ItemTop头部 -->
    <item-top :back="back"></item-top>
    <!-- 分类 -->
    <item></item>
  </div>
</template>

<script>
import ItemTop from '@/components/itemize/components/ItemTop'
import Item from '@/components/itemize/components/item/Item'
export default {
  name: 'Itemize',
  components: {
    ItemTop,
    Item
  },
  data () {
    return {
      leftData: [],
      rightDatas: [],
      back: '/'
    }
  },
  created () {

  }
}
</script>
