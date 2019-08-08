<template>
  <swiper :options="swiperOption" ref="mySwiper" v-if="slides.length">
    <!-- slides -->
    <swiper-slide v-for="(slide,index) in slides" :key="index">
      <img class="pic" :src="slide" />
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { getPagesCarousel } from '@/api/index.js'
export default {
  name: 'PagesCarousel',
  props: ['slidesPages'],
  mounted () {
    getPagesCarousel().then((data) => {
      this.slides = data.data.slides
    })
  },
  data () {
    return {
      swiperOption: {
        autoplay: {
          disableOnInteraction: false,
          delay: 3000,
          stopOnLastSlide: false
        },
        loop: true,
        pagination: {
          el: '.swiper-pagination'
        }
      },
      slides: []
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<style lang="less" scoped>
@rem: 15rem;
.pic {
  width: 100%;
}
/deep/.swiper-pagination-bullet-active {
  background: #fff;
}
</style>
