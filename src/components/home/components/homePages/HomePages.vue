<template>
  <div class="homePages">
    <!-- 顶部 -->
    <div class="home_top">
      <router-link tag="span" to="/" class="iconfont home_left">&#xe601;</router-link>
      <h2>国美电器</h2>
      <span class="iconfont" @click="disClick">&#xe603;</span>
    </div>
    <!-- 导航 -->
    <public-nav v-show="flag"></public-nav>
    <!-- 搜索 -->
    <pages-search></pages-search>
    <!-- 轮播图 -->
    <pages-carousel></pages-carousel>
    <!-- 分类图标 -->
    <pages-catenav :pagesCatenav="pagesCatenav"></pages-catenav>
    <!-- 今日必抢 -->
    <pages-rob :pagesRob="pagesRob"></pages-rob>
    <!-- 热门活动 -->
    <pages-hot :pagesHot="pagesHot"></pages-hot>
    <!-- 优选好货 -->
    <pages-Pref :pagesPref="pagesPref"></pages-Pref>
    <!-- 广告 -->
    <advert :advert="advert"></advert>
    <!-- 品牌推荐 -->
    <pages-brand :pagesBrand="pagesBrand"></pages-brand>
    <!-- 猜你喜欢 -->
    <pages-like :pagesLike="pagesLike"></pages-like>
  </div>
</template>

<script>
import { getPagesCatenav, getPagesRob, getPagesHot, getPagesPref, getAdvert, getPagesBrand, getPagesLike } from '@/api/index.js'
import PagesSearch from '@/components/home/components/homePages/components/PagesSearch'
import PagesCarousel from '@/components/home/components/homePages/components/PagesCarousel'
import PagesCatenav from '@/components/home/components/homePages/components/PagesCatenav'
import PagesRob from '@/components/home/components/homePages/components/PagesRob'
import PagesHot from '@/components/home/components/homePages/components/PagesHot'
import PagesPref from '@/components/home/components/homePages/components/PagesPref'
import PagesBrand from '@/components/home/components/homePages/components/PagesBrand'
import PagesLike from '@/components/home/components/homePages/components/PagesLike'
// 广告
import Advert from '@/common/Advert'
// 导航
import PublicNav from '@/common/PublicNav'
export default {
  name: 'HomePages',
  data () {
    return {
      pagesCatenav: [],
      pagesRob: {},
      pagesHot: {},
      pagesPref: {},
      advert: {},
      pagesBrand: {},
      pagesLike: {},
      flag: false
    }
  },
  methods: {
    disClick () {
      this.flag ? this.flag = !this.flag : this.flag = !this.flag
    }
  },
  components: {
    PagesCarousel,
    PagesSearch,
    PagesCatenav,
    PagesRob,
    PagesHot,
    PagesPref,
    Advert,
    PagesBrand,
    PagesLike,
    PublicNav
  },
  created () {
    getPagesCatenav().then(({ data }) => {
      this.pagesCatenav = data.slides
    })
    getPagesRob().then(({ data }) => {
      this.pagesRob = data
    })
    getPagesHot().then(({ data }) => {
      this.pagesHot = data.data
    })
    getPagesPref().then(({ data }) => {
      this.pagesPref = data.data
    })
    getAdvert().then(({ data }) => {
      this.advert = data.advert.propsAdvert
    })
    getPagesBrand().then(({ data }) => {
      this.pagesBrand = data.data
    })
    getPagesLike().then(({ data }) => {
      this.pagesLike = data.data
    })
  }
}
</script>

<style lang="less" scoped>
@rem: 15rem;
.homePages {
  background: #f2f2f2;
  .home_top {
    height: 44 / @rem;
    border-bottom: 1 / @rem solid #ddd;
    line-height: 44 / @rem;
    background: #fff;
    display: flex;
    flex-direction: row;
    span {
      flex: 1;
      text-align: center;
      font-size: 22 / @rem;
      &.home_left {
        text-align: center;
      }
    }
    h2 {
      flex: 5;
      text-align: center;
      font-size: 18 / @rem;
    }
  }
}
</style>
