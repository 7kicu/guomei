<template>
  <div class="groupNav">
    <div class="group">
      <img v-lazy="group.images1" alt />
      <img v-lazy="group.images2" alt />
    </div>
    <ul>
      <li v-for="(group,index) in group.data2" :key="index">
        <div class="groupBox">
          <img v-lazy="group.img" alt />
          <div>
            <span class="txt1">{{group.txt1}}</span>
            <span class="txt2">{{group.txt2}}</span>
            <p class="subtitle">{{group.subtitle}}</p>
            <p>{{group.price}}</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'GroupNav',
  props: ['group']
}
</script>
<style lang="less" scoped>
@rem : 15rem;
.groupNav {
  .group {
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
      .groupBox {
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
            &.txt2 {
              width: 100px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              display: inline-block;
            }
          }
          p {
            margin-left: 5 / @rem;
            color: #f20c59;
            font-size: 17 / @rem;
            font-weight: bold;
            padding-bottom: 15 / @rem;
            &.subtitle {
              height: 1 / @rem;
              width: 35%;
              text-align: center;
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
