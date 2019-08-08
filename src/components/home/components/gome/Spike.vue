<template>
  <div class="spike">
    <div class="one">
      <h4>
        <img :src="spikes.pic1" alt />
        <!-- 倒计时 -->
        <countdown :seckill="spikes.time" class="time"></countdown>
      </h4>
      <ul>
        <li v-for="(n,i) in spikes.goods" :key="i">
          <p>
            <img v-lazy="n.icon" alt />
          </p>
          <span>{{n.price}}</span>
          <span class="act">{{n.inventory}}</span>
        </li>
      </ul>
    </div>
    <!--  -->
    <div v-for="(o,i) in spikes.new" :key="i" class="three">
      <h4>{{o.title}}</h4>
      <p>{{o.con}}</p>
      <p class="two-pic">
        <img v-lazy="o.pic" alt />
      </p>
    </div>
    <div v-for="(o,i) in spikes.other" :key="'two'+i" class="two">
      <h4>{{o.title}}</h4>
      <p>{{o.con}}</p>
      <p class="two-pic">
        <img v-lazy="o.pic" alt />
      </p>
    </div>
  </div>
</template>

<script>
import Countdown from '@/components/home/components/gome/Countdown'
export default {
  name: 'Spike',
  props: ['spikes'],
  components: {
    Countdown
  }
}
</script>

<style lang="less" scoped>
@rem: 15rem;
.spike {
  widows: 100%;
  div.one,
  div.three,
  div.two {
    display: inline-block;
    box-sizing: border-box;
    border-top: 1px solid #f2f2f2;
    border-right: 1px solid #f2f2f2;
    width: 50%;
    box-sizing: border-box;
    height: 150 / @rem;
    white-space: nowrap;
    overflow: hidden;
  }
  div.one {
    display: inline-block;
    padding: 10 / @rem;
    h4 {
      width: 100%;
      height: 20 / @rem;
      margin-bottom: 15 / @rem;
      overflow: hidden;
      .time {
        width: 60 / @rem;
        height: 15 / @rem;
        border: 1px solid #f20c59;
        color: #f20c59;
        border-radius: 7 / @rem;
        text-align: center;
        line-height: 15px;
        font-size: 12 / @rem;
        margin-left: 6 / @rem;
        box-sizing: border-box;
      }
      img {
        display: inline-block;
        width: 40%;
        height: 85%;
      }
    }
    ul {
      width: 100%;
      li {
        width: 30%;
        margin-right: 1%;
        display: inline-block;
        p {
          img {
            width: 100%;
          }
        }
        span {
          display: block;
          color: #333;
          font-size: 14 / @rem;
          margin-top: 5 / @rem;
          &.act {
            font-size: 12 / @rem;
            color: #919599;
            position: relative;
          }
        }
        .act::after {
          content: "";
          display: inline-block;
          border-top: 1px solid #919599;
          width: 85%;
          height: 0;
          position: absolute;
          left: 0;
          top: 5 / @rem;
        }
      }
    }
  }
  div.two {
    padding: 10 / @rem;
    h4 {
      font-size: 18 / @rem;
      margin-bottom: 10 / @rem;
      color: #fd851d;
    }
    p {
      font-size: 12 / @rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: #666;
      &.two-pic {
        margin-top: 25 / @rem;
      }
      img {
        width: 100%;
      }
    }
    .two-pic {
      width: 100%;
      img {
        width: 100%;
      }
    }
  }
  div.two:last-child {
    border-right: none;
  }
  div.three {
    width: 49%;
    display: inline-block;
    border-right: none;
    padding: 10 / @rem;
    h4 {
      font-size: 18 / @rem;
      margin-bottom: 10 / @rem;
      color: #48a6ff;
    }
    p {
      font-size: 12 / @rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: #666;
      &.two-pic {
        margin-top: 25 / @rem;
      }
      img {
        width: 100%;
      }
    }
  }
}
</style>
