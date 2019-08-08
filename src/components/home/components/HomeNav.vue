<template>
  <div class="homeNav">
    <ul>
      <li v-for="(n,i) in nav" :key="i">
        <router-link tag="p" to="/homepages">
          <img v-lazy="n.picture" alt />
        </router-link>
        <span>{{n.title}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeNav',
  props: ['nav']
}
</script>

<style lang="less" scoped>
@rem: 15rem;
.homeNav {
  ul {
    display: flex;
    flex-direction: row;
    width: 100%;
    flex-wrap: wrap;
    li {
      margin-top: 10 / @rem;
      width: 20%;
      img {
        width: 100%;
      }
      span {
        display: block;
        text-align: center;
        color: #333;
        font-size: 14 / @rem;
        padding-top: 10 / @rem;
        margin: 0 auto;
      }
    }
  }
}
</style>
