<template>
  <div class="item-top" ref="itemtop">
    <router-link tag="div" :to="back" class="logo">
      <span class="iconfont">&#xe601;</span>
    </router-link>
    <div class="search">
      <input type="text" placeholder="手机依旧换新抵600" />
      <img src="@/images/sousuo.png" alt />
    </div>
    <div class="more" @click="disClick">
      <span class="iconfont">&#xe603;</span>
    </div>
    <public-nav v-show="flag"></public-nav>
  </div>
</template>

<script>
import PublicNav from '@/common/PublicNav'
export default {
  name: 'ItemTop',
  props: ['back'],
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
      this.flag = !this.flag
    }
  }
}
</script>

<style lang="less" scoped>
@rem: 15rem;
.item-top {
  height: 44 / @rem;
  display: flex;
  box-sizing: border-box;
  box-shadow: 0 1 / @rem 1 / @rem #eee;
  .logo {
    width: 34 / @rem;
    text-align: right;
  }
  .search {
    width: 268 / @rem;
    height: 100%;
    text-align: right;
    position: relative;
    flex: 1;
    text-align: center;
    input {
      width: 268 / @rem;
      height: 30 / @rem;
      padding: 0 10 / @rem;
      background: #f6f6f6;
      box-sizing: border-box;
      border-radius: 15 / @rem;
      margin-top: 7 / @rem;
      font-size: 12 / @rem;
      color: #626262;
    }
    img {
      width: 15 / @rem;
      position: absolute;
      top: 50%;
      right: 30 / @rem;
      transform: translate(0, -50%);
    }
  }
  .more {
    width: 40 / @rem;
    text-align: left;
  }
  span {
    font-size: 22 / @rem;
    color: #626262;
    line-height: 44 / @rem;
  }
}
</style>
