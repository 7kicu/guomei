<template>
  <div class="pagesBrand">
    <div class="brandTitle">
      <img v-lazy="pagesBrand.title" alt />
    </div>
    <div class="brandImg">
      <p>
        <img v-lazy="pagesBrand.brand1" alt />
      </p>
      <p>
        <img v-lazy="pagesBrand.brand2" alt />
      </p>
    </div>
    <ul>
      <li v-for="(pb,index) in pagesBrand.slides" :key="index">
        <img v-lazy="pb" alt />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'PagesBrand',
  props: ['pagesBrand']
}
</script>

<style lang="less" scoped>
@rem: 15rem;
.pagesBrand {
  margin-top: 10px;
  .brandTitle {
    img {
      width: 100%;
    }
  }
  .brandImg {
    width: 100%;
    display: flex;
    flex-direction: row;
    p {
      width: calc(100% / 2);
      img {
        width: 100%;
      }
    }
  }
  ul {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    li {
      width: calc(100% / 3);
      img {
        width: 100%;
      }
    }
  }
}
</style>
