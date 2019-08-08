<template>
  <div class="pagesPref">
    <div class="prefTitle">
      <img v-lazy="pagesPref.title" alt />
    </div>
    <ul>
      <li v-for="(pref,index) in pagesPref.slides" :key="index">
        <div>
          <img v-lazy="pref.img" alt />
          <p>{{pref.txt}}</p>
          <h3>{{pref.price}}</h3>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'PagesPref',
  props: ['pagesPref']
}
</script>

<style lang="less" scoped>
@rem: 15rem;
.pagesPref {
  margin-top: 5 / @rem;
  .prefTitle {
    img {
      width: 100%;
    }
  }
  ul {
    margin: 0 10 / @rem 0 10 / @rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    li {
      width: calc(100% / 3);
      margin-bottom: 4 / @rem;
      padding: 0 1.5 / @rem 0 1.5 / @rem;
      box-sizing: border-box;
      div {
        background: #fff;
        border-radius: 8 / @rem;
        padding: 6 / @rem;
        box-sizing: border-box;
        img {
          width: 100%;
          border-radius: 8 / @rem;
        }
        p {
          font-size: 12 / @rem;
          margin-top: 10 / @rem;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        h3 {
          font-size: 16 / @rem;
          margin-top: 20 / @rem;
          color: #f20c59;
          font-weight: bold;
          padding-bottom: 10 / @rem;
        }
      }
    }
  }
}
</style>
