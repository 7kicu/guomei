<template>
  <div class="laundryNav">
    <div class="laundry">
      <img v-lazy="laundry.images5" alt />
      <img v-lazy="laundry.images6" alt class="laundry_pic" />
    </div>
    <ul>
      <li v-for="(laundry,index) in laundry.data4" :key="index">
        <div class="laundryBox">
          <img v-lazy="laundry.img" alt />
          <div>
            <span class="txt1">{{laundry.txt1}}</span>
            <span>{{laundry.txt2}}</span>
            <p class="subtitle">{{laundry.subtitle}}</p>
            <p>{{laundry.price}}</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'LaundryNav',
  props: ['laundry']
}
</script>

<style lang="less" scoped>
@rem : 15rem;
.laundryNav {
  .laundry {
    img {
      width: 100%;
      &.laundry_pic {
        margin-bottom: 5 / @rem;
      }
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
      .laundryBox {
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
              width: 35%;
              text-align: center;
              height: 1 / @rem;
              line-height: 16 / @rem;
              margin-bottom: 15 / @rem;
              margin-top: 20 / @rem;
              font-size: 12 / @rem;
              font-weight: normal;
              color: #2aa80d;
              border: 1 / @rem solid #2aa80d;
            }
          }
        }
      }
    }
  }
}
</style>
