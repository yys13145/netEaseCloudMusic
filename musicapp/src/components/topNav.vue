<template>
  <div class="topNav">
    <div class="topLeft">
      <i class="iconfont icon-liebiao"></i>
    </div>
    <div class="topCenter">
      <span class="navBtn">我的</span>
      <span class="navBtn active">发现</span>
      <span class="navBtn">云村</span>
      <span class="navBtn">视频</span>
    </div>
    <div class="topRight">
      <i class="iconfont icon-sousuo" @click="$router.push('/searchview')"></i>
    </div>
  </div>
</template>

<style lang="less" scoped>
.topNav{
   width: 7.5rem;
   height: 1rem;
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 0 0.2rem;
   .iconfont{
     font-size: 28px;
   }
   .topCenter{
      font-size: 18px;
      width: 4.5rem;
      display: flex;
      justify-content: space-around;
   }
   .active{
      font-weight: 900;
   }
}
</style>
