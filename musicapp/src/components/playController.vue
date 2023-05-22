<template>
    <div class="playController">
        <div class="left">
            <img :src="playlist[playCurrentIndex].al.picUrl">
            <div class="content">
                <div class="title">{{ playlist[playCurrentIndex].al.name }}</div>
                <div class="tip">横滑可以切换上下首</div>
            </div>
        </div>
        <div class="right">
            <i class="iconfont icon-bofang"></i>
            <i class="iconfont icon-24gl-playlistHeart"></i>
        </div>
    </div>
</template>

<script>
 
import { mapState,mapMutations } from 'vuex'
export default{
    computed:{
        ...mapState(['playlist','playCurrentIndex'])
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
