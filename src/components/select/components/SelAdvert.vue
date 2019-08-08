<template>
  <div class="advert">
    <span v-for="(advert,index) in advert.pic1" :key="index" class="advert">
      <img v-lazy="advert" alt />
    </span>
    <span v-for="(advert1,index) in advert.pic2" :key="'advert1-'+index" class="advert1">
      <img v-lazy="advert1" alt />
    </span>
  </div>
</template>

<script>
export default {
  name: 'SelAdvert',
  props: ['advert']
}
</script>

<style lang="less" scoped>
.advert {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  .advert {
    width: calc(100% / 3);
    img {
      width: 100%;
      height: 100%;
    }
  }
  .advert1 {
    width: calc(100% / 5);
    img {
      width: 100%;
    }
  }
}
</style>
