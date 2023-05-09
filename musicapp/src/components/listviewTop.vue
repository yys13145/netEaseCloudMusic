[]<template>
    <div class="listViewTop">
        <img class="bg" :src="playlist.coverImgUrl">
        <div class="listViewTopNav">
            <div class="back">
                <i class="iconfont icon-zuojiantou"></i>
                <div class="title">歌单</div>
            </div> 
            <div class="right">
                <i class="iconfont icon-sousuo search"></i>
                <i class="iconfont icon-liebiao"></i>
            </div>
        </div> 
    </div> 
</template>

<script>
export default {
    props:['playlist']
}
</script>
<style lang="less" scoped>
.listViewTop{
    width: 7.5rem;
    padding: 0 0.4rem;
    .bg{
        position: fixed;
        top: 0;
        left: 0;
        width: 7.5rem;
        height: auto;
        z-index: -1;
        filter: blur(40px);
    }
    .listViewTopNav{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 1.2rem;
        font-size: 0.4rem;
        .title{
            margin-left: 0.4rem;
        }
        .search{
            margin-right: 0.4rem;
        }
        .iconfont{
            font-size: 32px;
            color: #fff;
        }
        .back,.right{
            display: flex;
            color: #fff;
        }
    }
}
</style>