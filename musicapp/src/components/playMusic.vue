<template>
    <div class="playMusic">
        <div class="bg" :style="{backgroundImage:  `url(${playDetail.al.picUrl})`  }"></div>
        <div class="playTop"></div>
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
}
</style>