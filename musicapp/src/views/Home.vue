<template>
  <div class="home">
    <top-nav></top-nav>
    <swiper class="swiper-container"
        :pagination="{ clickable: true }"
        :autoplay="{ autoplay: true }"
        loop>
        <swiper-slide><img src="@/assets/banner.png" alt=""></swiper-slide>
        <swiper-slide><img src="@/assets/banner.png" alt=""></swiper-slide>
        <swiper-slide><img src="@/assets/banner.png" alt=""></swiper-slide>
        
    </swiper>
  </div> 
</template>

<script>
// @ is an alias to /src
import topNav from '@/components/topNav.vue'

import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/swiper-bundle.css";

import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay])

export default {
  name: 'Home',
  components: {
    topNav,
    Swiper,
    SwiperSlide
  }
}
</script>

<style>
.swiper-container{
  width: 7.1rem;
  height: 3rem;
  border-radius: 0.1rem;
}
.swiper-pagination-bullet-active{
  background-color: red;
}
</style>
