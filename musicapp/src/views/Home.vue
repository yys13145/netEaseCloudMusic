<template>
  <div class="home">
    <top-nav></top-nav>
    <swiper class="swiper-container"
        :pagination="{ clickable: true }"
        :autoplay="{ autoplay: true }"
        loop>
        <swiper-slide v-for="(item,index) in imgs" :key="index">
          <img :src="item.pic" alt="">{{imgs.length}}
        </swiper-slide>
    </swiper>
    <icon-list></icon-list>
    <music-list></music-list>
  </div> 
</template>

<script>
// @ is an alias to /src
import topNav from '@/components/topNav.vue'
import iconList from '@/components/iconList.vue'
import musicList from '@/components/musicList.vue'

import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/swiper-bundle.css";

import {getBanner} from '@/api/index'

import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
import { reactive } from 'vue';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay])

export default {
  name: 'Home',
  components: {
    topNav,
    iconList,
    musicList,
    Swiper,
    SwiperSlide
  },
  data(){
    return{
      imgs:[]
    }
  },
  async mounted(){
    let res = await getBanner(2);
    this.imgs = res.data.banners;
  }
}
</script>

<style lang="less">
.swiper-container{
  width: 7.1rem;
  height: 3rem;
  border-radius: 0.1rem;
  img{
    width: 100%;
    height: 100%;
  }
}
.swiper-pagination-bullet-active{
  background-color: red;
}
</style>
