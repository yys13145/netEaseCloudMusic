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

        <div class="history">
            <div class="historyLeft">历史</div>
            <div class="historyRight">
                <div class="item" v-for="item in keywordList" :key="item">{{ item }}</div>
            </div>
        </div>
    </div> 
</template>

<script>
export default {
    data: function(){
        return {
            placeholder: '请输入',
            keyword: '',
            keywordList: []
        }
    },
    beforeMount(){
        this.keywordList = localStorage.keywordList ? JSON.parse(localStorage.keywordList) : [];
    },
    methods: {
        add(){
            this.keywordList.push(this.keyword);
            localStorage.keywordList = JSON.stringify(this.keywordList);
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
}
</style>