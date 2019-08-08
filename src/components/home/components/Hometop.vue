<template>
  <div class="hometop">
    <img src="@/components/home/images/grass_logo.png" class="logo" alt />
    <!-- <div class="search">
      <span class="iconfont">&#xe620;</span>
      <input type="text" placeholder="手机以旧换新" />
    </div>-->
    <router-link tag="div" class="search" to="/searchBox">
      <span class="iconfont">&#xe620;</span>
      <input type="text" placeholder="手机以旧换新" />
    </router-link>
    <router-link tag="span" to="/cart" class="cart">
      <span class="iconfont">&#xe66a;</span>
    </router-link>
    <router-link tag="span" to="/my" class="deng">登录</router-link>
  </div>
</template>

<script>
export default {
  name: 'Hometop'
}
</script>

<style lang="less" scoped>
@rem: 15rem;
.hometop {
  height: 50 / @rem;
  width: 100%;
  background: #fff;
  position: fixed;
  top: 0;
  z-index: 99;
  display: flex;
  line-height: 50 / @rem;
  align-content: center;
  text-align: center;
  flex-wrap: wrap;
  box-sizing: border-box;
  border-bottom: 1px solid #eee;
  .logo {
    height: 30 / @rem;
    width: 30 / @rem;
    line-height: 40 / @rem;
    margin: 10 / @rem 15 / @rem 0 10 / @rem;
  }
  .search {
    display: inline-block;
    position: relative;
    flex: 4;
    span {
      position: absolute;
      font-size: 14 / @rem;
      color: #999;
      left: 20 / @rem;
      top: 2 / @rem;
    }
    input {
      border-radius: 20 / @rem;
      height: 30 / @rem;
      width: 80%;
      padding-left: 20%;
      background: #eee;
      color: #999;
      font-size: 14 / @rem;
    }
  }
  .cart {
    padding-left: 15 / @rem;
    span {
      font-size: 20 / @rem;
      color: #666;
    }
  }
  .deng {
    padding-left: 15 / @rem;
    padding-right: 15 / @rem;
    font-size: 14 / @rem;
    color: #666;
  }
}
</style>
