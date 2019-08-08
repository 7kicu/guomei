<template>
  <div class="home">
    <!-- Home-top 顶部 -->
    <home-top></home-top>
    <!-- 轮播图 -->
    <carousel></carousel>
    <!-- 导航 -->
    <home-nav :nav="homenav"></home-nav>
    <!-- 国美（头条） -->
    <gome :gome="gome"></gome>
    <!-- 优选指南 -->
    <homeguide :guide="guide"></homeguide>
    <!--  -->
    <!-- Category 品类集市 -->
    <category :market="category"></category>
    <!-- Handpick 精选活动 -->
    <handpick :market="handpick"></handpick>
    <!-- Comfortable 国美舒适家 -->
    <comfortable :market="comfortable"></comfortable>
    <!-- Characteristic 特色服务 -->
    <characteristic :market="characteristic"></characteristic>
    <!-- Elaborate 精品好店 -->
    <elaborate :market="elaborate"></elaborate>
    <!-- Guess 猜你喜欢 -->
    <guess :market="guess"></guess>
    <!-- Footer 底部 -->
    <last></last>
    <!-- 底部导航组件 -->
    <navlist></navlist>
  </div>
</template>

<script>
// 导入底部导航组件
import Navlist from '@/common/Navlist'
// 导入用 axios(vue的Ajax请求) 接收的后台数据
import { getHomeNav, getGome, getGuide, getCategory, getHandpick, getComfortable, getCharacteristic, getElaborate, getGuess } from '@/api/index.js'
// home顶部
import HomeTop from '@/components/home/components/Hometop'
// 轮播图
import Carousel from '@/components/home/components/Carousel'
// 轮播图下面的导航
import HomeNav from '@/components/home/components/HomeNav'
// 国美（头条）
import Gome from '@/components/home/components/Gome'
// 优选指南
import Homeguide from '@/components/home/components/Homeguide'
// he
// 品类集市
import Category from '@/components/home/components/Category'
// 精选活动
import Handpick from '@/components/home/components/Handpick'
// 国美舒适家
import Comfortable from '@/components/home/components/Comfortable'
// 特色服务
import Characteristic from '@/components/home/components/Characteristic'
// 精品好店
import Elaborate from '@/components/home/components/Elaborate'
// 猜你喜欢
import Guess from '@/components/home/components/Guess'
// 底部
import Last from '@/components/home/components/last'

export default {
  name: 'Home',
  data () {
    return {
      // slides: [], // 轮播图
      homenav: [], // 导航
      gome: {}, // 国美（头条）
      guide: {}, // 优选指南
      category: {},
      handpick: {},
      comfortable: {},
      characteristic: {},
      elaborate: {},
      guess: {}
    }
  },
  components: {
    HomeTop,
    Navlist,
    Carousel,
    HomeNav,
    Gome,
    Homeguide,
    Category,
    Handpick,
    Comfortable,
    Characteristic,
    Elaborate,
    Guess,
    Last
  },
  created () {
    // 轮播图
    // getCarousel().then(({ data }) => {
    //   this.slides = data.slideImg
    // })
    // 导航
    getHomeNav().then(({ data }) => {
      this.homenav = data.data
    })
    // 国美
    getGome().then(({ data }) => {
      this.gome = data
    })
    // 优选指南
    getGuide().then(({ data }) => {
      this.guide = data
    })
    // 合并
    // 获取品类集市数据
    getCategory().then(({ data }) => {
      this.category = data
    })

    // 获取精选活动数据
    getHandpick().then(({ data }) => {
      this.handpick = data
    })

    // 获取国美舒适家
    getComfortable().then(({ data }) => {
      this.comfortable = data
    })

    // 获取特色服务
    getCharacteristic().then(({ data }) => {
      this.characteristic = data
    })

    // 获取精品好店
    getElaborate().then(({ data }) => {
      this.elaborate = data
    })

    // 获取猜你喜欢
    getGuess().then(({ data }) => {
      this.guess = data
    })
  }
}
</script>

<style lang="less" scoped>
@rem: 15rem;
.home {
  background: #eee;
  margin-bottom: 765px / @rem;
}
</style>
