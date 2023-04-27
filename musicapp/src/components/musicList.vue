<template>
    <div class="musicList">
        <div class="top">
            <div class="title">发现好歌单</div>
            <div class="more">查看更多</div>
        </div>
        <div class="mList">
            <swiper class="swiper-container"
                :slides-per-view="3"
                :space-between="10"
                :autoplay="{ autoplay: true }"
                loop>
                <swiper-slide class="swiper-slide" v-for="(item,index) in imgsList" :key="index">
                    <img :src="item.picUrl" alt="">
                    <div class="name">{{item.name}}</div>
                    <div class="count">
                        <i class="iconfont icon-bofang"></i>
                        {{changeValue(item.playCount)}}
                        </div>
                </swiper-slide>
            </swiper>
        </div>
    </div>  
</template>
<script>

import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";

import { reactive,onMounted } from 'vue'
import { getMusicList } from '@/api/index'

import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay])
 
export default{
    name: 'musicList',
    components: {
        Swiper,
        SwiperSlide
    },
    setup(){
        let imgsList = reactive([]);

        let changeValue = (num) => {
            let result = num;
            if(num>100000000){
                result = (num/100000000).toFixed(2) + '亿'
            }else if(num>10000){
                result = (num/10000).toFixed(2) + '万'
            }

            return result
        }
        
        onMounted(async()=>{
            let res = await getMusicList();
            imgsList = imgsList.push(...res.data.result);
        })
        return{
           imgsList,
           changeValue
        }
    }
}
</script>

<style lang="less" scoped>
.musicList{
    width: 7.5rem;
    padding: 0 0.4rem;
    .top{
        display: flex;
        justify-content: space-between;
        .title{
            font-size: 0.4rem;
            font-weight: 900;
        }
        .more{
            border: solid 1px #ccc;
            padding: 0.04rem;
            border-radius: 0.2rem;
            font-size: 0.24rem;
        }
    }
    .mList{
        margin: 0.2rem 0;
        .swiper-container{
            width: 100%;
            height: 3rem;
            .swiper-slide{
                display: flex;
                flex-direction: column;
                position: relative;
                .name{
                    height: 0.6rem;
                    width: 100%;
                    font-size: 0.24rem;
                }
                img{
                    border-radius: 0.1rem;
                }
                .count{
                    position: absolute;
                    right: 0.1rem;
                    top: 0.1rem;
                    color: #ccc;
                }
            }
        }
    }
}
</style>