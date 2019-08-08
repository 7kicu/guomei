<template>
  <div class="list" v-if="list.data">
    <ul>
      <li v-for="(l,i) in list.data.list" :key="i">
        <div class="main">
          <img v-lazy="l.main" alt />
        </div>
        <div class="content">
          <h2>
            <em v-if="l.selfbg"></em>
            {{l.selftxt}}
          </h2>
          <div class="brand">
            <p>
              <span>{{l.brandleft}}</span>
              <span>{{list.data.brand.left}}</span>
            </p>
            <p>
              <span>{{l.brandright}}</span>
              <span>{{list.data.brand.right}}</span>
            </p>
          </div>
          <div class="price">
            <b>
              <em>￥</em>
              {{l.price}}
            </b>
            <span></span>
          </div>
          <div class="comment">{{l.comment}}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'List',
  props: ['no', 'list']
}
</script>

<style lang="less" scoped>
@rem: 15rem;
.list {
  li {
    width: 100%;
    height: 135 / @rem;
    margin-top: 10px;
    display: flex;
    overflow: hidden;
    .main {
      width: 125 / @rem;
      height: 125 / @rem;
      margin: 5 / @rem 11 / @rem 0 0;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .content {
      width: 241 / @rem;
      height: 100%;
      padding-right: 10 / @rem;
      box-sizing: border-box;
      box-shadow: 2 / @rem 1 / @rem 1 / @rem #f4f4f4;
      h2 {
        line-height: 18 / @rem;
        font-size: 14 / @rem;
        font-weight: 500;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        margin-top: 10 / @rem;
        em {
          width: 22 / @rem;
          height: 12 / @rem;
          display: inline-block;
          background: url(../images/self.png) center no-repeat;
          background-size: 22 / @rem 12 / @rem;
          vertical-align: 0.2 / @rem;
        }
      }
      .brand {
        display: flex;
        p {
          width: 112.5 / @rem;
          height: 27 / @rem;
          text-align: center;
          margin-top: 11 / @rem;
          span {
            display: block;
          }
          span:first-child {
            height: 14 / @rem;
            font-size: 12 / @rem;
            color: #262c32;
            line-height: 14 / @rem;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
          }
          span:last-child {
            height: 10 / @rem;
            width: 110%;
            margin-top: 3 / @rem;
            color: #919599;
            line-height: 10 / @rem;
            font-size: 12px;
            -webkit-transform-origin-x: 0;
            transform: scale(0.9);
            font-size: 10.8px;
          }
        }
        p:first-child {
          padding-right: 5 / @rem;
          border-right: 1 / @rem solid #eee;
        }
      }
      .price {
        margin-top: 8 / @rem;
        b {
          em {
            font-size: 13 / @rem;
            padding-right: 2 / @rem;
          }
          display: inline-block;
          vertical-align: middle;
          font-size: 18 / @rem;
          color: #f20c59;
          line-height: 18 / @rem;
        }
      }
      .comment {
        padding-left: 4 / @rem;
        color: #7a7f85;
        line-height: 14 / @rem;
        font-size: 12px;
        -webkit-transform-origin-x: 0;
        transform: scale(0.95);
      }
    }
  }
}
</style>
