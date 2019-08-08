<template>
  <div class="select">
    <!-- 顶部 -->
    <div class="sel_top">
      <router-link tag="span" class="sel_left" to="/">
        <img src="@/images/return-icon.png" alt />
      </router-link>
      <h2>冰箱洗衣机 暑期清凉购</h2>
      <span class="sel_right" @click="disClick">
        <img src="@/images/list-icon.png" alt />
      </span>
    </div>
    <public-nav v-show="flag"></public-nav>
    <!-- 广告 -->
    <sel-advert :advert="advert"></sel-advert>
    <!-- 选项卡 -->
    <sel-nav :selnav="selnav"></sel-nav>
    <!-- 看完了 -->
    <sel-finished></sel-finished>
    <!-- 底部 -->
    <sel-footer></sel-footer>
  </div>
</template>

<script>
import { getSelAdvert, getSelNav } from '@/api/index.js'
import SelAdvert from '@/components/select/components/SelAdvert'
import SelNav from '@/components/select/components/SelNav'
import SelFinished from '@/components/select/components/SelFinished'
import SelFooter from '@/components/select/components/SelFooter'
import PublicNav from '@/common/PublicNav'
export default {
  name: 'Select',
  data () {
    return {
      advert: [],
      selnav: {},
      flag: false
    }
  },
  components: {
    SelAdvert,
    SelNav,
    SelFinished,
    SelFooter,
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
  },
  created () {
    getSelAdvert().then(({ data }) => {
      this.advert = data.data
    })
    getSelNav().then(({ data }) => {
      this.selnav = data
    })
  }
}
</script>

<style lang="less" scoped>
@rem: 15rem;
.select {
  background: rgb(127, 219, 255);
  .sel_top {
    height: 44 / @rem;
    border-bottom: 1 / @rem solid #ddd;
    line-height: 44 / @rem;
    background: #fff;
    display: flex;
    flex-direction: row;
    span {
      width: 16%;
      font-size: 18 / @rem;
      &.sel_left {
        width: 15%;
        padding-left: 15 / @rem;
        img {
          width: 20%;
        }
      }
      &.sel_right {
        text-align: right;
        padding-right: 20 / @rem;
        img {
          width: 40%;
        }
      }
    }
    h2 {
      width: 65%;
      text-align: center;
      font-size: 18 / @rem;
    }
  }
}
</style>
