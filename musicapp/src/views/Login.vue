<template>
    <div class="login">
      <div class="searchTopNav">
          <div class="back" @click="$router.back()">
              <i class="iconfont icon-zuojiantou"></i>
          </div> 
          <div class="right">
            登录
          </div>
      </div> 

      <div class="content">
        <input class="item" placeholder="请输入账号" v-model="name">
        <input  class="item" placeholder="请输入密码" v-model="password">
        <button  class="item" >登录</button>
      </div>

    </div>
  </template>

<script>
import { search } from '@/api/index.js'
export default {
    data: function(){
        return {
          name: '',
          password: ''
        }
    },
    methods: {
        
    }
}
</script>
<style lang="less" scoped>
.login{
   
    .searchTopNav{
        display: flex;
        align-items: center;
        width: 100%;
        height: 1.2rem;
        position: fixed;
        top: 0;
        left: 0;
        .iconfont{
            font-size: 28px;
            color: #000;
        }
        .right{
            padding: 0 0 0 0.2rem;
            flex: 1;
            text-align: center;  
        }
    } 
    
    .content{
      position: relative;
      top: 1.4rem;
      left: 0;
      display: flex;
      flex-direction: column;
      .item{
        margin: 0.15rem 0.2rem;
      }
      button{
        background: red;
        border: none;
        color: #fff;
        height: 0.5rem;
        border-radius: 2px;
      }
    }
}
</style>
  