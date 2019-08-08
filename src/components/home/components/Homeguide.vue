<template>
  <div class="guide">
    <div class="title">
      <img v-lazy="guide.title" alt />
      <p>更多 ></p>
    </div>
    <ul>
      <li class="one">
        <img v-lazy="guide.chart" alt />
        <div></div>
      </li>
      <li>
        <p>
          {{guide.txt1}}
          <span>{{guide.txt2}}</span>
        </p>
        <div>
          <img v-lazy="guide.pic2" alt />
        </div>
      </li>
      <li>
        <p>
          {{guide.txt3}}
          <span>{{guide.txt4}}</span>
        </p>
        <div>
          <img v-lazy="guide.pic5" alt />
        </div>
      </li>
      <li>
        <p>
          {{guide.txt5}}
          <span>{{guide.txt6}}</span>
        </p>
        <div>
          <img v-lazy="guide.pic6" alt />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Homeguide',
  props: ['guide']
}
</script>

<style lang="less" scoped>
@rem: 15rem;
.guide {
  background: #fff;
  width: 100%;
  .title {
    height: 50 / @rem;
    position: relative;
    width: 100%;
    img {
      width: 100%;
    }
    p {
      position: absolute;
      top: 35%;
      right: 5%;
      color: #999;
      font-size: 13 / @rem;
    }
  }
  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    font-size: 0;
    li {
      // flex: 1;
      font-size: 16 / @rem;
      width: 50%;
      height: 120 / @rem;
      border-top: 1px solid #f2f2f2;
      border-right: 1px solid #f2f2f2;
      box-sizing: border-box;
      overflow: hidden;
      p {
        margin-left: 10 / @rem;
        margin-top: 10 / @rem;
        span {
          display: inline-block;
          background: skyblue;
          color: #fff;
          font-size: 12 / @rem;
          padding: 5 / @rem;
          border-radius: 10 / @rem;
        }
      }
      div {
        margin-top: 10 / @rem;
        width: 80%;
        height: 65%;
        margin-left: 10%;
        img {
          width: 100%;
          height: 100%;
        }
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
    li:nth-child(1) {
      position: relative;

      img {
        position: absolute;
        width: 100%;
        height: 100%;
      }
    }
    li:nth-child(2) {
      border-right: none;
    }
    li:nth-child(4) {
      border-right: none;
    }
  }
}
</style>
