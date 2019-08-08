<template>
  <div class="my">
    <router-link tag="div" to="/" class="top">
      <span class="iconfont">&#xe601;</span>
    </router-link>
    <div class="logo">
      <img src="@/components/my/images/logo_xh.png" alt />
    </div>
    <form action="#" method="get" class="signIn">
      <div class="login">
        <router-link tag="span" to="/my/account">账号密码登录</router-link>
        <router-link tag="span" to="/my/short">短信验证码登录</router-link>
      </div>
      <div>
        <router-view />
      </div>
    </form>
    <!-- 底部 -->
    <other-login></other-login>
  </div>
</template>

<script>
import OtherLogin from '@/components/my/components/OtherLogin'
export default {
  name: 'My',
  components: {
    OtherLogin
  }
}
</script>

<style lang="less" scoped>
@rem: 15rem;
.my {
  width: 100%;
  margin-bottom: 10 / @rem;
  overflow: hidden;
  .top {
    margin: 10 / @rem 0 15 / @rem 20 / @rem;
    overflow: hidden;
    span {
      font-size: 26 / @rem;
    }
  }
  .logo {
    margin: 10 / @rem auto;
    width: 160 / @rem;
    height: 50 / @rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .signIn {
    padding: 10 / @rem 30 / @rem;
    .login {
      display: flex;
      .router-link-exact-active.router-link-active {
        color: #f20c59;
        border-bottom: 2px solid #f20c59;
        padding-bottom: 10 / @rem;
      }
      span {
        flex: 1;
        box-sizing: border-box;
        font-size: 16 / @rem;
        text-align: center;
        color: #999;
        font-weight: 300;
      }
    }
  }
}
</style>
