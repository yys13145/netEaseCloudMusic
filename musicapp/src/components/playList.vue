<template>
    <div class="playlist">
        <div class="playlist-top">
            <div class="left">
                <i class="iconfont icon-bofang"></i>
                <div class="title">播放全部</div>
                <div class="num">（共{{ playlist.tracks.length }}首）</div>
            </div>
            <div class="right">
                + 收藏 （{{ changeValue(playlist.subscribedCount) }}）
            </div>
        </div>

        <div class="list">
            <div class="playItem" v-for="(item,index) in playlist.tracks" :key="index">
                <div class="left">
                    <div class="index">{{ index+1 }}</div> 
                    <div class="content">
                        <div class="name">{{ item.name }}</div> 
                        <div class="anthor">
                            <span class="tag" v-for="(tag,index) in playlist.tags" :key="index">{{ tag }}</span>
                            <span>{{ item.al.name }}</span>
                        </div> 
                    </div> 
                </div>
                <div class="right">
                    <i class="iconfont icon-bofang" @click="setPlayCurrentIndex(index)"></i>
                    <i class="iconfont icon-androidgengduo"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
    props:['playlist'],
    methods:{
        changeValue(num){
            let result = num;
            if(num>100000000){
                result = (num/100000000).toFixed(2) + '亿'
            }else if(num>10000){
                result = (num/10000).toFixed(2) + '万'
            }

            return result
        },
        ...mapMutations(['setPlayCurrentIndex'])    
    },    
}
</script>

<style lang="less" scoped>
.playlist{
    width: 7.5rem;
    padding: 0 0.4rem;
    background: #fff;
    border-top-left-radius: 0.3rem;
    border-top-right-radius: 0.3rem;
    margin-top: 0.4rem;
    .playlist-top{
        display: flex;
        justify-content: space-between;
        height: 1rem;
        align-items: center;
        .left{
            display: flex;
            align-items: center;
            .icon-bofang{
                font-size: 0.5rem;
                margin-right: 0.2rem;
            }
            .title{
                font-size: 0.4rem;
                font-weight: 900;
            }
            .num{
                color: #ccc;
            }
        }
        .right{
            font-size: 0.24rem;
            color: #fff;
            background-color: orangered;
            line-height: 0.6rem;
            padding: 0.1rem;
            border-radius: 0.4rem;
        }
    }

    .list{
        .playItem{
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 0.8rem;
            margin: 0.1rem 0;
            .left{
                display: flex;
                align-items: center;
                .index{
                    color: #666;
                }
                .content{
                    margin-left: 0.4rem;
                }
                .name{
                    font-size: 0.3rem;
                    font-weight: 900;
                    margin-bottom: 0.1rem;
                }
                .anthor{
                    color: #666;
                }
                .tag{
                    font-size: 0.2rem;
                    color: orangered;
                    border: solid 1px orangered;
                    margin-right: 0.1rem;
                    border-radius: 0.1rem;
                }
            }
            .right{
                .iconfont{
                    font-size: 20px;
                    color: #ccc;
                    margin-right: 0.2rem;
                }
            }
        }
    }
}
 
</style>