<template>
  <div class="guess-like">
    <div class="tit-banner">
      <p class="line"></p>
      <h2>
        <img class="icon" src="../images/guess-icon1.png" />
        为您推荐
      </h2>
      <p class="line"></p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Recommended'
}
</script>

<style lang="less" scoped>
@rem: 15rem;
.guess-like {
  width: 100%;
  text-align: center;
  margin: 0 auto;
  display: flex;
  .tit-banner {
    width: 100%;
    float: left;
    .line {
      width: 4%;
      height: 1 / @rem;
      background: #fa1e8c;
      display: inline-block;
    }
    h2 {
      line-height: 37 / @rem;
      font-size: 18 / @rem;
      display: inline;
      color: #fa1e8c;
      vertical-align: middle;
      .icon {
        height: 50%;
      }
    }
  }
}
</style>
