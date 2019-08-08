<template>
  <div class="pagesHot">
    <div class="hotTitle">
      <img v-lazy="pagesHot.title" alt />
    </div>
    <div class="hotPic">
      <div class="hotLeft">
        <img v-lazy="pagesHot.products1" alt />
      </div>
      <div class="hotRight">
        <div class="hotTop">
          <img v-lazy="pagesHot.products2" alt />
        </div>
        <div class="hotBtm">
          <img v-lazy="pagesHot.products3" alt />
          <img v-lazy="pagesHot.products4" alt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PagesHot',
  props: ['pagesHot']
}
</script>

<style lang="less" scoped>
@rem: 15rem;
.pagesHot {
  padding-top: 10 / @rem;
  .hotTitle {
    img {
      width: 100%;
    }
  }
  .hotPic {
    width: 100%;
    display: flex;
    flex-direction: row;
    .hotLeft {
      width: 50%;
      img {
        width: 100%;
      }
    }
    .hotRight {
      width: 50%;
      .hotTop {
        img {
          width: 100%;
        }
      }
      .hotBtm {
        width: 100%;
        display: flex;
        flex-direction: row;
        img {
          width: 50%;
          height: 50%;
        }
      }
    }
  }
}
</style>
