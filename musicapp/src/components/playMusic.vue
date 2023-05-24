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
        <div class="playContent"></div>
        <div class="playLyric"></div>
        <div class="progress"></div>
        <div class="playFooter"></div>
    </div>
</template>

<script>
export default{
    props:['playDetail']
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
}
</style>