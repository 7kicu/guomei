<template>
  <div>
    <ul class="selNav" ref="rollNav">
      <!-- <li @click="scrollTo('a')" class="active">清凉低价</li>
      <li @click="scrollTo('b')" class>一起来团</li>
      <li @click="scrollTo('c')" class>海尔冰箱</li>
      <li @click="scrollTo('d')" class>西门子洗衣机</li>-->
      <li
        @click="scrollTo(i.index)"
        :class="{'active':index == isActive}"
        v-for="(i,index) in selnav.nav"
        :key="index"
      >{{i.name}}</li>
    </ul>
    <div>
      <div class="section" v-scrollWatch="{name:'0',offset:40,callback:spyDomChange}">
        <!-- 清凉低价 -->
        <cool-nav :cool="selnav" ref="index"></cool-nav>
      </div>
      <div class="section" v-scrollWatch="{name:'1',offset:40,callback:spyDomChange}">
        <!-- 一起来团 -->
        <group-nav :group="selnav"></group-nav>
      </div>
      <div class="section" v-scrollWatch="{name:'2',offset:40,callback:spyDomChange}">
        <!-- 海尔冰箱 -->
        <fridge-nav :fridge="selnav"></fridge-nav>
      </div>
      <div class="section" v-scrollWatch="{name:'3',offset:40,callback:spyDomChange}">
        <!-- 西门子洗衣机 -->
        <laundry-nav :laundry="selnav"></laundry-nav>
      </div>
    </div>
  </div>
</template>

<script>
import scrollWatch from 'vue-scrollwatch'
import CoolNav from '@/components/select/components/SelNav/CoolNav'
import GroupNav from '@/components/select/components/SelNav/GroupNav'
import FridgeNav from '@/components/select/components/SelNav/FridgeNav'
import LaundryNav from '@/components/select/components/SelNav/LaundryNav'
export default {
  name: 'SelNav',
  props: ['selnav'],
  data () {
    return {
      isActive: '',
      offsetTop1: '',
      Arefs: ''
    }
  },
  components: {
    CoolNav,
    GroupNav,
    FridgeNav,
    LaundryNav
  },
  mounted () {
    this.Arefs = this.$refs.rollNav.style
    window.addEventListener('scroll', this.scrollToTop)
  },
  beforeUpdate () {
    this.offsetTop1 = this.$refs.rollNav.offsetTop
    this.Arefs = this.$refs.rollNav.style
  },
  methods: {
    spyDomChange (node) {
      /* eslint-disable */
      if (this.activeMenu != node.name) { this.activeMenu = node.name }
    },
    scrollTo(name) {
      scrollWatch.scrollTo(name)
      this.isActive = name
    },
    scrollToTop() {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop > this.offsetTop1) {
        this.Arefs.position = 'fixed'
        this.Arefs.top = 0 + 'px'
      } else {
        this.Arefs.position = ''
      }
    }
  }
}
</script>

<style lang="less" scoped>
@rem: 15rem;
.selNav {
  width: 100%;
  height: 42 / @rem;
  background: rgb(255, 233, 186);
  display: flex;
  flex-direction: row;
  li {
    padding: 13 / @rem 8 / @rem 0 8 / @rem;
    font-size: 14 / @rem;
    &.active {
      background: #fff;
      color: #f20c59;
    }
    .active1 {
      display: block;
      width: 20px;
      height: 3px;
      margin: 0 auto;
      margin-top: 12px;
      background: #f20c59;
    }
  }
}
</style>
