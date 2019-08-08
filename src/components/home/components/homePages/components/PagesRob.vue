<template>
  <div class="pagesRob">
    <p class="robTitle">
      <img v-lazy="pagesRob.title" alt />
    </p>
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide v-for="(pagesRob,index) in pagesRob.slides" :key="index">
        <ul class="robContent">
          <li v-for="(rob,index) in pagesRob.item" :key="index">
            <img v-lazy="rob.img" alt />
            <p>{{rob.txt}}</p>
            <h3>{{rob.price}}</h3>
          </li>
        </ul>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'PagesRob',
  props: ['pagesRob'],
  data () {
    return {
      swiperOption: {
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
@rem: 15rem;
.pagesRob {
  background: #fff;
  margin-top: 5px;
  .robTitle {
    img {
      width: 100%;
    }
  }
  .robContent {
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: 0 5 / @rem 0 5 / @rem;
    li {
      width: calc(100% / 2);
      padding: 20 / @rem;
      img {
        width: 100%;
      }
      p {
        height: 32 / @rem;
        font-size: 12 / @rem;
        padding-top: 15 / @rem;
      }
      h3 {
        color: #f20c59;
        font-size: 16 / @rem;
        padding-bottom: 15 / @rem;
      }
    }
  }
  /deep/.swiper-pagination-bullet {
    width: 6 / @rem;
    height: 6 / @rem;
  }
  /deep/.swiper-pagination-bullet-active {
    background: #f20c59;
  }
}
</style>
