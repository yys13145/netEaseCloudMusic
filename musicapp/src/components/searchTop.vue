[]<template>
    <div class="searchTop">
        <div class="searchTopNav">
            <div class="back" @click="$router.back()">
                <i class="iconfont icon-zuojiantou"></i>
            </div> 
            <div class="right">
                 <input :placeholder="placeholder" v-model="keyword" @keydown.enter="add">
            </div>
        </div> 

        <div class="history" v-show="!playlist.length">
            <div class="historyLeft">历史</div>
            <div class="historyRight">
                <div class="item" v-for="item in keywordList" :key="item">{{ item }}</div>
            </div>
        </div>

        <div class="playlist" v-show="playlist.length">
            <div class="playlist-top">
                <div class="left">
                    <i class="iconfont icon-bofang"></i>
                    <div class="title">播放全部</div>
                    <div class="num">（共{{ playlist.length }}首）</div>
                </div>
            </div>

            <div class="list">
                <div class="playItem" v-for="(item,index) in playlist" :key="index">
                    <div class="left">
                        <div class="index">{{ index+1 }}</div> 
                        <div class="content">
                            <div class="name">{{ item.name }}</div> 
                            <div class="anthor">
                                <span class="tag" v-for="(tag,index) in playlist.tags" :key="index">{{ tag }}</span>
                                <span>{{ item.album.name }}</span>
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
    
    </div> 
</template>

<script>
import { search } from '@/api/index.js'
export default {
    data: function(){
        return {
            placeholder: '请输入',
            keyword: '',
            keywordList: [],
            playlist: []
        }
    },
    beforeMount(){
        this.keywordList = localStorage.keywordList ? JSON.parse(localStorage.keywordList) : [];
    },
    methods: {
        add: async function(){
            this.keywordList.push(this.keyword);
            this.keywordList = Array.from(new Set(this.keywordList));
            localStorage.keywordList = JSON.stringify(this.keywordList);
            let result = await search(this.keyword);
            console.log(result);
            this.playlist = result.data.result.songs;
        }
    }
}
</script>
<style lang="less" scoped>
.searchTop{
    width: 7.5rem;
    padding: 0 0.4rem;
    .searchTopNav{
        display: flex;
        align-items: center;
        width: 100%;
        height: 1.2rem;
        .iconfont{
            font-size: 28px;
            color: #000;
        }
        .right{
            padding: 0 0 0 0.2rem;
            flex: 1;
            input{
                width: 100%;
                height: 0.5rem;
                border: none;
                outline:none;
                border-bottom: 1px solid #ccc;
            }
            
        }
    } 
    .history{
        display: flex;
        .historyLeft{
            width: 1rem;
            font-weight: 900;
            margin: 0.1rem;
            padding: 0.1rem 0.2rem;
        }
        .historyRight{
            display: flex;
            flex: 1;
            flex-wrap: wrap;
            color: #666;
            .item{
                background-color: #eee;
                padding: 0.1rem 0.2rem;
                margin: 0.1rem;
                border-radius: 0.1rem;
            }
        }
    }

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
}
</style>