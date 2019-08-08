<template>
  <div class="coolNav">
    <div class="cool">
      <img v-lazy="cool.title" alt />
    </div>
    <ul>
      <li v-for="(cool,index) in cool.data1" :key="index">
        <div class="coolBox">
          <img v-lazy="cool.img" alt />
          <div>
            <span class="txt1">{{cool.txt1}}</span>
            <span>{{cool.txt2}}</span>
            <p class="subtitle">{{cool.subtitle}}</p>
            <p>{{cool.price}}</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CoolNav',
  props: ['cool']
}
</script>

<style lang="less" scoped>
@rem : 15rem;
.coolNav {
  .cool {
    img {
      width: 100%;
    }
  }
  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 0 10 / @rem 0 5 / @rem;
    li {
      width: calc(100% / 2);
      box-sizing: border-box;
      margin-bottom: 5 / @rem;
      padding-left: 5 / @rem;
      .coolBox {
        img {
          width: 100%;
        }
        div {
          background: #fff;
          padding-top: 8 / @rem;
          height: 93 / @rem;
          span {
            font-size: 12 / @rem;
            margin-left: 5 / @rem;
            &.txt1 {
              background: #f20c59;
              color: #fff;
            }
          }
          p {
            margin-left: 5 / @rem;
            color: #f20c59;
            font-size: 17 / @rem;
            font-weight: bold;
            padding-bottom: 15 / @rem;
            &.subtitle {
              margin-top: 20 / @rem;
              font-size: 12 / @rem;
              font-weight: normal;
            }
          }
        }
      }
    }
  }
}
</style>
