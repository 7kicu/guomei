<template>
  <div class="advert">
    <img :src="advert" alt class="propsAdvert" />
  </div>
</template>

<script>
export default {
  name: 'Advert',
  props: ['advert']
}
</script>

<style lang="less" scoped>
@rem: 15rem;
.advert {
  .propsAdvert {
    width: 100%;
    margin-top: 10 / @rem;
  }
}
</style>
