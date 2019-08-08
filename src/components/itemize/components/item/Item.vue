<template>
  <div class="item" ref="item">
    <div class="left">
      <ul>
        <li
          @click="clickHandler(l.id)"
          :class="{'active': flag==l.id}"
          v-for="(l,i) in leftData"
          :key="i"
        >
          <span>{{l.title}}</span>
        </li>
      </ul>
    </div>
    <div class="right">
      <ul>
        <img class="advert" v-lazy="rightData.advert" v-if="rightData.flag" />
        <li class="list" v-for="(r,i) in rightData.list" :key="i">
          <h2>{{r.title}}</h2>
          <div class="items">
            <router-link
              tag="p"
              :to="{name: 'Details', params:{no: ''+item.no}}"
              v-for="(item,i) in r.item"
              :key="i"
            >
              <img v-lazy="item.pic" />
              <span>{{item.text}}</span>
            </router-link>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
import { getLeft, getRight } from '@/api/index.js'
export default {
  name: 'Item',
  data () {
    return {
      leftData: [],
      rightDatas: [],
      rightData: [],
      flag: 1
    }
  },
  created () {
    // 左侧数据
    getLeft().then(({ data }) => {
      this.leftData = data.data
    })
    // 右侧数据
    getRight().then(({ data }) => {
      this.rightDatas = data.rightDatas
      // 初始化右侧数据，默认数据
      this.getRightData(1)
    })
  },
  mounted () {
    // 设置外容器固定高度
    this.$refs.item.style.height = window.screen.availHeight - 44 + 'px'
    // console.log(window.screen.availHeight)
    this.$nextTick(() => {
      /* eslint-disable */
      new BScroll('.left', { click: true })
      new BScroll('.right', { click: true })
    })
  },
  watch: {
    leftData() {
      this.$nextTick(() => {
        /* eslint-disable */
        new BScroll('.left', { click: true })
      })
    },
    rightData() {
      this.$nextTick(() => {
        /* eslint-disable */
        new BScroll('.right', { click: true })
      })
    }
  },
  methods: {
    getRightData(id) {
      this.rightData = this.rightDatas.filter(e => {
        return e.id === id
      })[0].data
    },
    clickHandler(id) {
      this.getRightData(id)
      this.flag = id
    }
  }
}
</script>

<style lang="less" scoped>
@rem: 15rem;
.item {
  padding-top: 2 / @rem;
  display: flex;
  .left {
    width: 79 / @rem;
    height: 100%;
    overflow: hidden;
    li {
      height: 48 / @rem;
      background: #f0f0f0;
      text-align: center;
      font-size: 14 / @rem;
      line-height: 48 / @rem;
      box-sizing: border-box;
      border-left: 3 / @rem solid transparent;
      span {
        display: inline-block;
        height: 100%;
        box-sizing: border-box;
        border-bottom: 1 / @rem solid #ddd;
      }
      &.active {
        background: #fff;
        border-left: 3 / @rem solid #f20c59;
        color: #f20c59;
      }
    }
  }
  .right {
    flex: 1;
    box-sizing: border-box;
    height: 100%;
    padding: 8 / @rem;
    overflow: hidden;
    img.advert {
      width: 100%;
      margin-bottom: 10 / @rem;
    }
    ul {
      padding: 10 / @rem 0;
    }
    li.list {
      width: 100%;
      margin-bottom: 10 / @rem;
      h2 {
        font-size: 10 / @rem;
        color: #999;
        padding-bottom: 10 / @rem;
      }
      div.items {
        width: 100%;
        font-size: 0;
        p {
          display: inline-block;
          box-sizing: border-box;
          width: 86.5 / @rem;
          background: #f8f8f8;
          font-size: 11px;
          margin-right: 9 / @rem;
          margin-bottom: 9 / @rem;
          text-align: center;
          padding: 5 / @rem 5 / @rem 0 5 / @rem;
          img {
            width: 100%;
          }
          span {
            line-height: 24 / @rem;
            font-size: 11 / @rem;
            color: #666;
          }
        }
        p:nth-child(3n) {
          margin-right: 0;
        }
      }
    }
  }
}
</style>
