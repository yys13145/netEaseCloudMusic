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
        <div class="playContent">
            <img class="needle" :class="{active:!pause}" src="@/assets/needle-ab.png">
            <img class="disc" src="@/assets/disc-plus.png">
            <img class="playImg" :src="playDetail.al.picUrl">
        </div>
        <div class="playLyric"></div>
        <div class="progress"></div>
        <div class="playFooter">
            <i class="iconfont icon-24gl-repeat2"></i>
            <i class="iconfont icon-shangyishoushangyige"></i>
            <i v-show="pause" class="iconfont icon-bofang" style="font-size: 40px;" @click="play"></i>
            <i v-show="!pause" class="iconfont icon-zanting" style="font-size: 40px;" @click="play"></i>
            <i class="iconfont icon-xiayigexiayishou"></i>
            <i class="iconfont icon-24gl-playlistHeart"></i>
        </div>
    </div>
</template>

<script>
export default{
    props:['playDetail','pause','play']
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
}
</style>