[]<template>
    <div class="listViewTop">
        <img class="bg" :src="playlist.coverImgUrl" />
        <div class="listViewTopNav">
            <div class="back" @click="$router.back()">
                <i class="iconfont icon-zuojiantou"></i>
                <div class="title">歌单</div>
            </div> 
            <div class="right">
                <i class="iconfont icon-sousuo search"></i>
                <i class="iconfont icon-liebiao"></i>
            </div>
        </div> 

        <div class="content">
            <div class="contentLeft">
                <img :src="playlist.coverImgUrl" />
                <div class="count">
                    <i class="iconfont icon-bofang"></i>
                    {{changeValue(playlist.playCount)}}
                </div>
            </div>
            <div class="contentRight">
                <h3>{{ playlist.name }}</h3>
                <div class="author">
                    <img class="header" :src="playlist.creator.avatarUrl" />
                    <span>{{ playlist.creator.nickname }}</span> 
                </div>
                <div class="description">{{ playlist.description }}</div>
            </div>
        </div>

        <div class="iconList">
            <div class="iconItem">
                <i class="iconfont icon-pinglun"></i>
                <span>{{ playlist.commentCount }}</span> 
            </div>
            <div class="iconItem">
                <i class="iconfont icon-fenxiang"></i>
                <span>{{ playlist.shareCount }}</span> 
            </div>
            <div class="iconItem">
                <i class="iconfont icon-xiazai"></i>
                <span>下载</span> 
            </div>
            <div class="iconItem">
                <i class="iconfont icon-show_duoxuan"></i>
                <span>分享</span> 
            </div>
        </div>
    </div> 
</template>

<script>
export default {
    props:['playlist'],
    setup(props){
        console.log(props)
        let changeValue = (num) => {
            let result = num;
            if(num>100000000){
                result = (num/100000000).toFixed(2) + '亿'
            }else if(num>10000){
                result = (num/10000).toFixed(2) + '万'
            }

            return result
        }
        
        return{
           changeValue
        }
    }
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
    .content{
            display: flex;
            justify-content: space-between;
            padding: 0.6rem 0;
            .contentLeft{
                position: relative;
                img{
                    width: 2.8rem;
                    height: 2.8rem;
                    border-radius: 0.1rem;
                }
                .count{
                    position: absolute;
                    right: 0.1rem;
                    top: 0.1rem;
                    color: #ccc;
                    font-weight: bold;
                }
            }
            .contentRight{
                width: 3rem;
                h3{
                    color: #ccc;
                }
                .author{
                    display: flex;
                    align-items: center;
                    margin: 0.2rem 0;
                    img{
                        width: 0.6rem;
                        height: 0.6rem;
                        border-radius: 0.3rem;
                        margin-right: 0.2rem;
                    }
                    span{
                        color: #fff;
                        font-size: 0.26rem;
                    }
                }
                .description{
                    font-size: 0.24rem;
                    color: #ccc;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                }
            }
    }
    .iconList{
        display: flex;
        justify-content: space-around;
        .iconItem{
            display: flex;
            flex-direction: column;
            align-items: center;
            color: #fff;
            .iconfont{
                font-size: 32px;
                color: #fff;
            }
            span{
                font-size: 0.28rem;
                padding-top: 0.1rem;
            }
        }
    }
}
</style>