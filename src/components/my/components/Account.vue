<template>
  <div class="account">
    <p class="inp1">
      <span class="iconfont icon1">&#xe60d;</span>
      <input type="text" ref="uname" placeholder="手机号/邮箱/用户名/门店会员卡号" @click="showHide" />
      <span class="iconfont icon2" v-show="flag" @click="txtShow">&#xe6f2;</span>
    </p>
    <p class="inp1">
      <span class="iconfont icon1">&#xe60a;</span>
      <input type="password" ref="pwd" placeholder="请输入密码" @click="pwdShow" />
      <span class="iconfont icon2 icon3" v-show="flag2" @click="pwdsShow">&#xe6f2;</span>
      <span class="iconfont icon2" ref="yan" @click="yanShow">&#xe614;</span>
    </p>
    <div class="qk-login">
      <span>手机号快速注册</span>
      <span>找回密码</span>
    </div>
    <p class="btn">
      <button>登录</button>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Account',
  data () {
    return {
      flag: false,
      flag2: false,
      flag3: true
    }
  },
  methods: {
    showHide () {
      this.flag = true
      this.flag2 = false
    },
    pwdShow () {
      this.flag2 = true
      this.flag = false
    },
    txtShow () {
      this.$refs.uname.value = ''
    },
    pwdsShow () {
      this.$refs.pwd.value = ''
    },
    yanShow () {
      if (this.flag3) {
        this.$refs.yan.style.color = 'red'
        this.$refs.pwd.type = 'text'
        this.flag3 = !this.flag3
      } else {
        this.$refs.yan.style.color = '#999'
        this.$refs.pwd.type = 'password'
        this.flag3 = !this.flag3
      }
    }
  }
}
</script>

<style lang="less" scoped>
@rem: 15rem;
.account {
  margin-top: 20 / @rem;
  width: 100%;
  // overflow: hidden;
  .inp1 {
    width: 100%;
    position: relative;
    border-bottom: 1px solid #ccc;
    box-sizing: border-box;
    display: flex;
    color: #999;
    padding-left: 10 / @rem;
    .icon1 {
      font-size: 16 / @rem;
      position: absolute;
      top: 18 / @rem;
    }
    .icon2 {
      font-size: 14 / @rem;
      margin-top: 18 / @rem;
      position: absolute;
      right: 0;
    }
    .icon3 {
      position: absolute;
      left: 270 / @rem;
    }
    input {
      flex: 4;
      height: 50 / @rem;
      outline: none;
      border: none;
      background: none;
      font-size: 14 / @rem;
      padding-left: 20 / @rem;
    }
  }
  .qk-login {
    width: 100%;
    display: flex;
    margin-top: 10 / @rem;
    span {
      flex: 1;
      font-size: 14 / @rem;
      color: #78bee9;
    }
    span:nth-child(2) {
      text-align: right;
    }
  }
  .btn {
    width: 100%;
    margin-top: 20 / @rem;
    margin-left: 10%;
    button {
      display: block;
      width: 80%;
      height: 40 / @rem;
      background: linear-gradient(left, #ff94cb 0, #ff80aa 100%);
      background: -webkit-linear-gradient(left, #ff94cb 0, #ff80aa 100%);
      color: #fff;
      text-align: center;
      line-height: 40 / @rem;
      border-radius: 20 / @rem;
      font-size: 16 / @rem;
    }
  }
}
</style>
