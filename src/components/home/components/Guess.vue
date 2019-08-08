<template>
  <div class="guess">
    <div class="title">
      <img v-lazy="market.title" alt />
    </div>
    <div class="list">
      <span v-for="(l, i) in market.data" :key="i">
        <img v-lazy="l.pic" alt />
        <p>
          <span class="self">自营</span>
          {{l.text}}
        </p>
        <p class="price">
          {{l.price}}
          <span>看相似</span>
        </p>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Guess',
  props: ['market']
}
</script>

<style lang="less" scoped>
@rem: 15rem;
.guess {
  margin-top: 15 / @rem;

  width: 100%;
  overflow: hidden;
  .title {
    position: relative;
    img {
      width: 100%;
    }
  }
  .list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    border: 0.5 / @rem solid #eeeeee;
    span {
      margin: auto;
      margin-top: 10 / @rem;
      background: #fff;
      border-radius: 10 / @rem;
      width: 48%;
      padding: 10 / @rem 0 / @rem 0 / @rem 0 / @rem;
      img {
        width: 100%;
        margin-top: 10 / @rem;
      }
      p {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-left: 5 / @rem;
        height: 42 / @rem;
        font-size: 14 / @rem;
      }
      .self {
        width: 20%;
        text-align: center;
        border: 1 / @rem solid #fd0175;
        border-radius: 3 / @rem;
        color: #fd0175;
        display: inline-block;
        padding: 2 / @rem;
        margin: 5 / @rem;
        font-size: 14 / @rem;
      }
      .price {
        margin-top: 5 / @rem;
        font-size: 16 / @rem;
        color: #f20c59;
        // margin: 10 / @rem 5 / @rem 0 / @rem 10 / @rem;
        span {
          display: inline-block;
          box-sizing: border-box;
          border: 1 / @rem solid #e6e6e6;
          font-size: 12 / @rem;
          color: #999;
          border-radius: 10 / @rem;
          width: 50 / @rem;
          height: 15 / @rem;
          text-align: center;
          margin: auto;
          margin-top: 15 / @rem;
          line-height: 0;
          margin-left: 20 / @rem;
          padding-bottom: 8 / @rem;
        }
      }
    }
  }
}
</style>
