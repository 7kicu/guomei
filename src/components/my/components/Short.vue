<template>
  <div class="short">
    <p class="inp1">
      <span class="iconfont icon1">&#xe60d;</span>
      <input type="text" placeholder="手机号" ref="handset" @click="handsetShow" />
      <span class="iconfont icon2" v-show="flag" @click="handsetHide">&#xe6f2;</span>
    </p>
    <p class="inp2">
      <span class="iconfont icon1">&#xe672;</span>
      <input type="text" placeholder="请输入短信验证码" ref="captcha" @click="captchaShow" />
      <span class="iconfont icon2" v-show="flag2" @click="captchaHide">&#xe6f2;</span>
      <button class="code">获取验证码</button>
    </p>
    <p class="btn">
      <button>同意协议注册并登陆</button>
    </p>
    <p class="text">
      未注册手机登录成功将自动注册，且代表您已同意协议
      <span>《国美平台服务协议》 《国美平台隐私政策》 《美付宝服务协议》</span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Short',
  data () {
    return {
      flag: false,
      flag2: false
    }
  },
  methods: {
    handsetShow () {
      this.flag = true
      this.flag2 = false
    },
    handsetHide () {
      this.$refs.handset.value = ''
    },
    captchaShow () {
      this.flag2 = true
      this.flag = false
    },
    captchaHide () {
      this.$refs.captcha.value = ''
    }
  }
}
</script>

<style lang="less" scoped>
@rem: 15rem;
.short {
  margin-top: 20 / @rem;
  width: 100%;
  overflow: hidden;
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
      margin-right: 15 / @rem;
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
  .inp2 {
    margin-top: 15 / @rem;
    position: relative;
    .icon1,
    .icon2 {
      position: absolute;
    }
    .icon1 {
      font-size: 20 / @rem;
      left: 10 / @rem;
      color: #999;
    }
    .icon2 {
      left: 55%;
      top: 5 / @rem;
      font-size: 14 / @rem;
    }
    input {
      width: 50%;
      border-bottom: 1px solid #ccc;
      padding-left: 30 / @rem;
      font-size: 14 / @rem;
      padding-bottom: 15 / @rem;
    }
    .code {
      display: inline-block;
      margin-left: 10 / @rem;
      padding: 6 / @rem 10 / @rem;
      border: 1px solid #f20c59;
      background: none;
      font-size: 14 / @rem;
      color: #f20c59;
      border-radius: 30 / @rem;
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
  .text {
    margin-top: 20 / @rem;
    font-size: 13 / @rem;
    line-height: 18 / @rem;
    span {
      color: #78bee9;
    }
  }
}
</style>
