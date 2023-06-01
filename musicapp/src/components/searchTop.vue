[]<template>
    <div class="listViewTop">
        <div class="listViewTopNav">
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
                <div v-for="item in keywordList" :key="item">{{ item }}</div>
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
.listViewTop{
    width: 7.5rem;
    padding: 0 0.4rem;
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