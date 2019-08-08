<template>
  <div class="other">
    <div class="lon">
      <span>使用以下账户登录</span>
    </div>
    <div class="foots">
      <ul>
        <li>
          <div>
            <img src="../images/mdhy.png" alt />
          </div>
          <p>门店会员</p>
        </li>
        <li>
          <div>
            <img src="../images/QQ.png" alt />
          </div>
          <p>QQ</p>
        </li>
        <li>
          <div>
            <img src="../images/weibo.png" alt />
          </div>
          <p>新浪微博</p>
        </li>
        <li>
          <div>
            <img src="../images/zfb.png" alt />
          </div>
          <p>支付宝</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OtherLogin'
}
</script>

<style lang="less" scoped>
@rem: 15rem;
.other {
  overflow: hidden;
  margin: 0 auto;
  margin-top: 80 / @rem;
  // position: relative;
  // left: 50%;
  // transform: translate(-50%, 0);
  .lon {
    width: 120 / @rem;
    text-align: center;
    margin: 0 auto;
    margin-bottom: 20 / @rem;
    span {
      display: block;
      position: relative;
      font-size: 14 / @rem;
      color: #999;
    }
  }
  .foots {
    text-align: center;
    ul {
      display: flex;
      flex-flow: nowrap;
      li {
        flex: 1;
        div {
          width: 50 / @rem;
          height: 50 / @rem;
          margin: 0 auto;
          img {
            width: 100%;
            height: 100%;
          }
        }
        p {
          text-align: center;
          margin-top: 10 / @rem;
          font-size: 12 / @rem;
          color: #999;
        }
      }
    }
  }
}
</style>
