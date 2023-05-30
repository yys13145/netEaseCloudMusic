<template>
    <div class="playMusic">
        <div class="bg" :style="{backgroundImage:  `url(${playDetail.al.picUrl})`  }"></div>
        <div class="playTop">
            <div class="back" @click="$emit('back')">
                <i class="iconfont icon-zuojiantou"></i>
            </div> 
            <div class="center">
                <div class="title">
                    <marquee behavior="scroll" direction="left"> {{ playDetail.al.name }}</marquee>
                </div>
            </div>
            <div class="share">
                <i class="iconfont icon-fenxiang"></i>
            </div> 
        </div>
        <div class="playContent" v-show="!isShowLyric">
            <img class="needle" :class="{active:!pause}" src="@/assets/needle-ab.png">
            <img class="disc" src="@/assets/disc-plus.png">
            <img class="playImg" :src="playDetail.al.picUrl">
        </div>
        <div class="playLyric" v-show="isShowLyric" ref="playLyric">
            <p :class="{active:(currentTime*1000 >= item.pre && currentTime*1000 <item.time)}" v-for="(item,i) in  $store.getters.lyricList" :key="i">{{item.lyric}}</p>
        </div>
        <div class="progress"></div>
        <div class="playFooter">
            <i class="iconfont icon-24gl-repeat2"></i>
            <i class="iconfont icon-shangyishoushangyige" @click="goPlay(-1)"></i>
            <i v-show="pause" class="iconfont icon-bofang" style="font-size: 40px;" @click="play"></i>
            <i v-show="!pause" class="iconfont icon-zanting" style="font-size: 40px;" @click="play"></i>
            <i class="iconfont icon-xiayigexiayishou" @click="goPlay(1)"></i>
            <i class="iconfont icon-24gl-playlistHeart"></i>
        </div>
    </div>
</template>

<script>
import { watch } from 'vue'
import { mapState } from 'vuex'
export default{
    props:['playDetail','pause','play'],
    data(){
        return{
            isShowLyric: true
        }
    },
    computed:{
        ...mapState(['lyric','currentTime','playCurrentIndex','playlist']),
    },
    methods:{
        goPlay(num){
            let index = this.playCurrentIndex + num;
            if(index < 0){
                index = this.playlist.length - 1;
            }else if(index == this.playlist.length){
                index = 0;
            }
            this.$store.commit('setPlayCurrentIndex',index)
        },
    },
    watch:{
        currentTime:function(){
            let p = document.querySelector('p.active');
            this.$refs.playLyric.scrollTop = p.offsetTop;
        }
    }
}
</script>

<style lang="less" scoped>
.playMusic{
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #fff;
    .bg{
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-size: auto 100%;
        background-position: center;
        filter: blur(60px);
    }
    .playTop{
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: absolute;
        top: 0;
        left: 0;
        width: 7.5rem;
        height: 1.2rem;
        color: #fff;
        padding: 0 0.4rem;
        .iconfont{
            font-size: 32px;
            color: #fff;
        }
        marquee{
            width: 5rem;
        }
    }
    .playContent{
        position: absolute;
        width: 7.5rem;
        height: 7.5rem;
        top: 1.5rem;
        left: 0;
        .needle{
            width: 2.5rem;
            height: auto;
            position: absolute;
            left: 3.5rem;
            transform-origin: 0.3rem 0;
            transform: rotate(-10deg);
            transition: all 1s;
            z-index: 10;
        }
        .needle.active{
            width: 2.5rem;
            height: auto;
            position: absolute;
            left: 3.5rem;
            transform-origin: 0.3rem 0;
            transform: rotate(5deg);
            transition: all 1s;
            z-index: 10;
        }
        .disc{
            width: 5.5rem;
            height: auto;
            position: absolute;
            left: calc(50% - 2.75rem);
            top: 2.5rem;
        }
        .playImg{
            width: 3.4rem;
            height: 3.4rem;
            border-radius: 1.7rem;
            position: absolute;
            left: calc(50% - 1.7rem);
            top: 3.55rem;
        }
    }
    .playFooter{
        width: 7.5rem;
        height: 1.5rem;
        position: absolute;
        left: 0;
        bottom: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 0.4rem;
        .iconfont{
            font-size: 32px;
            color: #fff;
        }
    }
    .playLyric{
        position: absolute;
        width: 7.5rem;
        height: 8rem;
        top: calc(50% - 4rem);
        left: 0;
        overflow: scroll;
        text-align: center;
        color: #fff;
        .active{
            color: red;
        }
    }
}
</style>