<template>
  <div class="carousel">
    <swiper :options="swiperOption" ref="mySwiper" v-if="slidesImg.length">
      <!-- slides -->
      <swiper-slide v-for="(slides,index) in slidesImg" :key="index">
        <img :src="slides" />
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { getCarousel } from '@/api/index.js'
export default {
  name: 'Carousel',
  mounted () {
    getCarousel().then((data) => {
      // console.log(data.data.slideImg)
      this.slidesImg = data.data.slideImg
    })
  },
  data () {
    return {
      slidesImg: [],
      swiperOption: {
        loop: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<style lang="less" scoped>
.carousel {
  width: 100%;
  overflow: hidden;
  background: #fff;
  margin-top: 50px;
  .action {
    display: block;
    width: 100%;
  }
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
