<template>
  <div class="cart-top">
    <div class="t-left">
      <router-link tag="span" to="/">
        <span class="iconfont">&#xe601;</span>
      </router-link>
    </div>
    <div class="t-cnt">
      <h2>购物车</h2>
    </div>
    <div class="t-right">
      <span @click="disClick">
        <span class="iconfont">&#xe603;</span>
      </span>
    </div>
    <public-nav v-show="flag"></public-nav>
  </div>
</template>
<script>
import PublicNav from '@/common/PublicNav'
export default {
  name: 'CartTop',
  data () {
    return {
      flag: false
    }
  },
  components: {
    PublicNav
  },
  methods: {
    disClick () {
      if (this.flag) {
        this.flag = !this.flag
      } else {
        this.flag = !this.flag
      }
    }
  }
}
</script>
<style lang="less" scoped>
@rem: 15rem;
.cart-top {
  background: #fff;
  height: 44 / @rem;
  position: fixed;
  display: flex;
  z-index: 20;
  width: 100%;
  top: 0;
  border-bottom: 1 / @rem solid #ddd;
  div {
    // flex: 1;
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  .t-left {
    flex: 1;
    span {
      font-size: 26 / @rem;
      line-height: 44 / @rem;
    }
  }
  .t-cnt {
    flex: 5;
    h2 {
      font-size: 20 / @rem;
      line-height: 44 / @rem;
      font-weight: bolder;
    }
  }
  .t-right {
    flex: 1;
    span {
      font-size: 26 / @rem;
      line-height: 44 / @rem;
    }
  }
}
</style>
