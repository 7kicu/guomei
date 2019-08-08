<template>
  <ul class="navlist">
    <router-link tag="li" to="/">
      <span class="iconfont">&#xe66b;</span>
      首页
    </router-link>
    <router-link tag="li" to="/itemize">
      <span class="iconfont">&#xe606;</span>
      分类
    </router-link>
    <router-link tag="li" to="/select">
      <span class="iconfont">&#xe610;</span>
      优选
    </router-link>
    <router-link tag="li" to="/cart">
      <span class="iconfont">&#xe66a;</span>
      购物车
    </router-link>
    <router-link tag="li" to="/my">
      <span class="iconfont">&#xe602;</span>
      我的
    </router-link>
  </ul>
</template>

<script>
export default {
  name: 'Navlist'
}
</script>

<style lang="less" scoped>
@rem: 15rem;
.navlist {
  position: fixed;
  bottom: 0;
  display: flex;
  width: 100%;
  background-color: #fcfcfc;
  border-top: 1 / @rem solid #e3e3e3;
  z-index: 100;
}
.navlist li {
  flex: 1;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 6 / @rem 0;
  font-size: 12 / @rem;
}
.navlist li span {
  font-size: 20 / @rem;
  margin-bottom: 6 / @rem;
}
.navlist li.router-link-exact-active.router-link-active {
  color: crimson;
}
</style>
