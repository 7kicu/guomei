<template>
  <div class="headlines">
    <p class="pic">
      <img :src="Headlines.headlines" alt />
    </p>
    <div class="roll">
      <swiper :options="swiperOption" ref="mySwiper" v-if="heads.length">
        <!-- slides -->
        <swiper-slide v-for="(slides,index) in heads" :key="index">
          <p class="con">
            <span>{{slides.title}}</span>
            {{slides.content}}
          </p>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { getGome } from '@/api/index.js'
export default {
  name: 'Headlines',
  props: ['Headlines'],
  mounted () {
    getGome().then((data) => {
      this.heads = data.data.content
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
        direction: 'vertical',
        autoHeight: true
      },
      heads: []
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
.headlines {
  width: 100%;
  height: 40 / @rem;
  display: flex;
  line-height: 40 / @rem;
  text-align: center;
  overflow: hidden;
  .pic {
    flex: 1;
    margin-right: -40 / @rem;
    img {
      width: 65%;
      height: 45%;
    }
  }
  .roll {
    flex: 2;
    .con {
      height: 10 / @rem;
      font-size: 14 / @rem;
      span {
        height: 5 / @rem;
        display: inline-block;
        color: salmon;
      }
    }
  }
}
</style>
