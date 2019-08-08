<template>
  <ul class="pagesCatenav">
    <li v-for="(catenav, index) in pagesCatenav" :key="index">
      <img v-lazy="catenav" alt />
    </li>
  </ul>
</template>

<script>
export default {
  name: 'PagesCatenav',
  props: ['pagesCatenav']
}
</script>

<style lang="less" scoped>
@rem: 15rem;
.pagesCatenav {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 20 / @rem;
  li {
    width: calc(100% / 4);
    img {
      width: 100%;
    }
  }
}
</style>
