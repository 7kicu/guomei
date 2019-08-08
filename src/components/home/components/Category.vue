<template>
  <div class="category">
    <div class="title">
      <img v-lazy="market.title" alt />
      <p>更多 ></p>
    </div>
    <div class="list">
      <span v-for="(l, i) in market.data" :key="i">
        <h2>{{l.text}}</h2>
        <p>{{l.activity}}</p>
        <img v-lazy="l.pic" alt />
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Category',
  props: ['market']
}
</script>

<style lang="less" scoped>
@rem: 15rem;
.category {
  margin-top: 15 / @rem;
  background: #fff;
  width: 100%;
  overflow: hidden;
  .title {
    position: relative;
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
  .list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    font-size: 0;
    span {
      flex: 1;
      border-top: 1px solid #f2f2f2;
      border-right: 1px solid #f2f2f2;
      padding: 10 / @rem 0 / @rem 0 / @rem 0 / @rem;
      h2 {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-bottom: 10 / @rem;
        margin-left: 10 / @rem;
        font-size: 17 / @rem;
        color: #000;
      }
      p {
        // overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-left: 10 / @rem;
        font-size: 13 / @rem;
        color: #666;
      }
      img {
        width: 100%;
        margin-top: 10 / @rem;
      }
    }
    span:nth-child(4n) {
      border-right: none;
    }
  }
}
</style>
