<template>
  <div class="comfortable">
    <div class="title">
      <img v-lazy="market.title" alt />
    </div>
    <div class="list">
      <span v-for="(l, i) in market.data" :key="i">
        <h2>{{l.text}}</h2>
        <p>{{l.activity}}</p>
        <div class="imgs">
          <img v-lazy="l.pic" alt />
        </div>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'comfortable',
  props: ['market']
}
</script>

<style lang="less" scoped>
@rem: 15rem;
.comfortable {
  margin-top: 15 / @rem;
  background: #fff;
  width: 100%;
  overflow: hidden;
  .title {
    img {
      width: 100%;
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
      .imgs {
        height: 110 / @rem;
        line-height: 110 / @rem;
      }
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
    span:nth-child(3n) {
      border-right: none;
    }
  }
}
</style>
