<template>
  <div class="last">
    <div class="footerTop">
      <ul>
        <li>
          <span>登录</span>
        </li>
        <li>
          <span>注册</span>
        </li>
        <li>
          <span>更多</span>
        </li>
        <li class="fan">
          <span>反馈</span>
        </li>
      </ul>
    </div>
    <div class="footerBottom">
      <p>互联网药品信息服务资格证编号（沪）-经营性-2019-0006</p>
      <p>经营证照 营业证照 增值电信业务经营许可证 出版物经营许可</p>
      <p>证</p>
      <p>网络文化经营许可证沪网文[2017]5537-436号</p>
      <p>京公安网备11010502027062 沪B2-20120004号</p>
      <p>沪ICP备11009419号</p>
      <p>网络食品销售第三方平台提供者备案：沪网食备A0015号</p>
      <p>copyright © 2000-2019 gome.com.cn</p>
      <p>客服热线：4008-113-333</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Last'
}
</script>

<style  lang="less" scoped>
@rem: 15rem;
.last {
  height: 21rem;
  .footerTop {
    // padding: 1.5rem 3rem;
    margin-top: 15 / @rem;
    text-align: center;
    padding-top: 20 / @rem;
    padding-bottom: 15 / @rem;
    height: 1.5rem;
    border-bottom: 1px solid #ddd;
    border-top: 1px solid #e6e6e6;
    overflow: hidden;
    ul li {
      display: inline-block;
      overflow: hidden;
      text-overflow: ellipsis;
      position: relative;
      flex: 1;
      color: #888;
      font-size: 1.2rem;
      padding: 0 0.9rem;
      text-align: center;
      white-space: nowrap;
      border-right: 1px solid #888;
    }
    .fan {
      border: none;
    }
  }
  .footerBottom {
    p {
      color: #888;
      text-align: center;
      margin-top: 1rem;
      font-size: 0.8rem;
    }
  }
}
</style>
