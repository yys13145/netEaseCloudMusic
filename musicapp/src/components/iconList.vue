<template>
    <div class="iconList">
        <div class="iconItem">
             <i class="iconfont icon-tuijian1"></i>
            <span>每日推荐</span>
        </div>
        <div class="iconItem">
             <i class="iconfont icon-tuijian"></i>
            <span>私人FM</span>
        </div>
        <div class="iconItem">
             <i class="iconfont icon-gedan"></i>
            <span>歌单</span>
        </div>
        <div class="iconItem">
             <i class="iconfont icon-paihangbang"></i>
            <span>排行榜</span>
        </div>
    </div>
</template>

<style lang="less" scoped>
.iconList{
    display: flex;
    justify-content: space-around;
    padding: 0.4rem;
    .iconItem{
        display: flex;
        flex-direction: column;
        align-items: center;
        .iconfont{
            font-size: 32px;
            color: red;
        }
    }
}
</style>
