<template>
    <div class="playController">
        <div class="left" @click="showPlay = !showPlay">
            <img :src="playlist[playCurrentIndex].al.picUrl">
            <div class="content">
                <div class="title">{{ playlist[playCurrentIndex].al.name }}</div>
                <div class="tip">横滑可以切换上下首</div>
            </div>
        </div>
        <div class="right">
            <i  v-show="pause" class="iconfont icon-bofang" @click="play"></i>
            <i  v-show="!pause"  class="iconfont icon-zanting" @click="play"></i>
            <i class="iconfont icon-24gl-playlistHeart"></i>
        </div>
        <play-music @back="showPlay=false" v-show="showPlay" :pause="pause" :play="play" :playDetail="playlist[playCurrentIndex]"></play-music>
        <audio ref="audio" :src="`https://music.163.com/song/media/outer/url?id=${playlist[playCurrentIndex].id}.mp3`"></audio>
    </div>
</template>

<script>
 
import { mapState } from 'vuex'
import playMusic from '@/components/playMusic.vue'
import store from '@/store/index.js'

export default{
    computed:{
        ...mapState(['playlist','playCurrentIndex'])
    },
    components:{
        playMusic
    },
    data(){
        return{
            pause: true,
            showPlay: false
        }
    },
    mounted(){
        console.log(this.playlist[this.playCurrentIndex])
        this.$store.dispatch('reqLyric',{id:this.playlist[this.playCurrentIndex].id})
    },
    methods:{
        play(){
            if(this.$refs.audio.paused){
                this.$refs.audio.play();
                this.pause = false;
            }else{
                this.$refs.audio.pause();
                this.pause = true;
            }
        }
    }
}
</script>

<style lang="less" scoped>
.playController{
    width: 7.5rem;
    height: 1.2rem;
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    border-top: solid 1px #ccc;
    .left{
        display: flex;
        padding: 0 0.4rem;
        img{
            width: 0.8rem;
            height: 0.8rem;
            border-radius: 0.4rem;
        }
        .content{
            padding: 0 0.4rem;
            .tip{
                font-size: 0.2rem;
                color: #999;
            }
        }
    }
    .right{
        .iconfont{
            font-size: 32px;
            padding: 0 0.2rem;
        }
    }
}
</style>
