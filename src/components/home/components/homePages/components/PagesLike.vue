<template>
  <div class="pagesLike">
    <div class="likeTitle">
      <img v-lazy="pagesLike.title" alt />
    </div>
    <ul>
      <li v-for="(like,index) in pagesLike.slides" :key="index">
        <div class="likeBox">
          <img v-lazy="like.img" alt />
          <div class="likeTxt">
            <div>
              <i class="txt1">{{like.txt1}}</i>
              <i class="txt2">{{like.txt2}}</i>
            </div>
            <p>{{like.txt3}}</p>
            <h3>{{like.price}}</h3>
            <span class="iconfont fontStyle">&#xe66a;</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'PagesLike',
  props: ['pagesLike']
}
</script>

<style lang="less" scoped>
@rem: 15rem;
.pagesLike {
  margin-top: 10 / @rem;
  .likeTitle {
    img {
      width: 100%;
      margin-bottom: 8 / @rem;
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
      .likeBox {
        img {
          width: 100%;
          border-top-left-radius: 10 / @rem;
          border-top-right-radius: 10 / @rem;
        }
        .likeTxt {
          background: #fff;
          padding-top: 8 / @rem;
          height: 93 / @rem;
          border-bottom-left-radius: 10 / @rem;
          border-bottom-right-radius: 10 / @rem;
          position: relative;
          div {
            height: 26 / @rem;
            i {
              font-size: 12 / @rem;
              margin-left: 5 / @rem;
              &.txt1 {
                background: #f20c59;
                color: #fff;
              }
              &txt2 {
                overflow: hidden;
              }
            }
          }
          p {
            margin-top: 8 / @rem;
            font-size: 12 / @rem;
            font-weight: normal;
            color: #f20c59;
            margin-left: 5 / @rem;
          }
          h3 {
            margin-left: 5 / @rem;
            color: #f20c59;
            font-size: 17 / @rem;
            font-weight: bold;
            padding-bottom: 15 / @rem;
            display: inline-block;
            margin-top: 15 / @rem;
          }
          .fontStyle {
            position: absolute;
            right: 10 / @rem;
            bottom: 10 / @rem;
            display: inline-block;
            width: 33 / @rem;
            height: 33 / @rem;
            border-radius: 50%;
            background: #f20c59;
            color: #fff;
            font-size: 20 / @rem;
            text-align: center;
            line-height: 33 / @rem;
          }
        }
      }
    }
  }
}
</style>
