<template>
  <div class="guesslink">
    <div v-for="(l,i) in cart.data" :key="i" class="goods-box">
      <div class="img-box">
        <img v-lazy="l.images" />
      </div>
      <div class="cont-box">
        <p>{{l.title}}</p>
        <span>
          <i>￥</i>
          {{l.pic}}
        </span>
        <img src="../images/shopping-car.png" alt />
      </div>
    </div>
    <p></p>
  </div>
</template>
<script>
export default {

  name: 'GuessLink',
  props: ['cart']

}

</script>

<style lang="less" scoped>
@rem: 15rem;
.guesslink {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 98%;
  margin: 0 auto;

  .goods-box {
    width: 48%;
    margin-left: 5 / @rem;
    background: #fff;
    margin-top: 5 / @rem;
    border-radius: 5 / @rem;

    .img-box {
      width: 94%;
      margin: 3.5% 3.5%;
      img {
        width: 100%;
      }
    }
  }
  .cont-box {
    width: 94%;
    margin-left: 5 / @rem;
    background: #fff;
    margin-top: 15 / @rem;
    border-radius: 5 / @rem;
    position: relative;
    z-index: 8;
    p {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 14 / @rem;
      line-height: 15 / @rem;
    }
    span {
      color: #fa1e8c;
      margin: 20 / @rem 0 / @rem;
      line-height: 40 / @rem;
      font-size: 20 / @rem;

      i {
        color: #fa1e8c;
        font-size: 14 / @rem;
        display: inline-block;
        margin-right: -5 / @rem;
        line-height: 30 / @rem;
      }
    }
    img {
      width: 21 / @rem;
      height: 21 / @rem;
      position: absolute;
      right: 10 / @rem;
      bottom: 10 / @rem;
    }
  }
}
</style>
