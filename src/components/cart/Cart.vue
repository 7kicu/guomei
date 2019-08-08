<template>
  <div class="cart-box">
    <cart-top></cart-top>
    <!--  -->
    <tip></tip>
    <!--  -->
    <main-null></main-null>
    <!--  -->
    <recommended></recommended>
    <!-- 猜你喜欢 -->
    <guess-link :cart="cart"></guess-link>
  </div>
</template>

<script>
import { getCart } from '@/api/index.js'
import CartTop from '@/components/cart/components/CartTop'
import Tip from '@/components/cart/components/Tip'
import MainNull from '@/components/cart/components/MainNull'
import Recommended from '@/components/cart/components/Recommended'
import GuessLink from '@/components/cart/components/GuessLink'
export default {
  name: 'Cart',
  data () {
    return {
      cart: []
    }
  },
  components: {
    CartTop,
    Tip,
    MainNull,
    Recommended,
    GuessLink
  },
  created () {
    // 猜你喜欢
    getCart().then(({ data }) => {
      this.cart = data
    })
  }
}
</script>

<style lang="less" scoped>
@rem: 15rem;
.cart-box {
  background: #f3f5f7;
}
</style>
