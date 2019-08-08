<template>
  <ul class="publicNav">
    <span class="triangle"></span>
    <router-link tag="li" class="fillet1" to="/">
      <i class="iconfont">&#xe66b;</i>
      <span>首页</span>
    </router-link>
    <router-link tag="li" to="/itemize">
      <i class="iconfont">&#xe606;</i>
      <span>分类</span>
    </router-link>
    <router-link tag="li" to="/select">
      <i class="iconfont">&#xe610;</i>
      <span>优选</span>
    </router-link>
    <router-link tag="li" to="/cart">
      <i class="iconfont">&#xe66a;</i>
      <span>购物车</span>
    </router-link>
    <router-link tag="li" class="fillet2" to="/my">
      <i class="iconfont">&#xe602;</i>
      <span>我的</span>
    </router-link>
  </ul>
</template>

<script>
export default {
  name: 'PublicNav'
}
</script>

<style lang="less" scoped>
@rem: 15rem;
.publicNav {
  position: absolute;
  top: 48 / @rem;
  right: 10 / @rem;
  z-index: 999;
  font-size: 16 / @rem;
  box-shadow: 0 / @rem 0.06rem 0.3rem rgba(0, 0, 0, 0.3);
  .triangle {
    position: absolute;
    right: 9 / @rem;
    top: -20 / @rem;
    display: block;
    border: 10 / @rem solid #fff;
    border-color: transparent transparent #fff transparent;
  }
  li {
    width: 185 / @rem;
    height: 47 / @rem;
    background: #fff;
    line-height: 47 / @rem;
    &.fillet1 {
      border-top-left-radius: 6 / @rem;
      border-top-right-radius: 6 / @rem;
    }
    &.fillet2 {
      border-bottom-left-radius: 6 / @rem;
      border-bottom-right-radius: 6 / @rem;
    }
    i {
      display: inline-block;
      width: 30%;
      font-size: 20 / @rem;
      text-align: center;
    }
    span {
      display: inline-block;
      width: 65%;
      border-bottom: 1 / @rem solid #dcddde;
    }
  }
}
</style>
