<template>
  <router-view/>
</template>

<style lang="less">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "微软雅黑";
}
// 阿里图标css文件
@font-face {
  font-family: "iconfont"; /* Project id 3254442 */
  src: url('//at.alicdn.com/t/font_3254442_cm42nuy2fcm.woff2?t=1647499538952') format('woff2'),
       url('//at.alicdn.com/t/font_3254442_cm42nuy2fcm.woff?t=1647499538952') format('woff'),
       url('//at.alicdn.com/t/font_3254442_cm42nuy2fcm.ttf?t=1647499538952') format('truetype');
}

.iconfont {
  font-family: "iconfont" !important;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-liebiao:before {
  content: "\e600";
}

.icon-sousuo:before {
  content: "\e62f";
}

.icon-tuijian1:before {
  content: "\e680";
}

.icon-danlieliebiao:before {
  content: "\e6e4";
}

.icon-bofang:before {
  content: "\e624";
}

.icon-zanting:before {
  content: "\e629";
}

.icon-gedan:before {
  content: "\e66a";
}

.icon-paihangbang:before {
  content: "\e8b3";
}

.icon-paihangbang1:before {
  content: "\e63b";
}

.icon-paihangbang2:before {
  content: "\e6dd";
}

.icon-tuijian:before {
  content: "\ff87";
}
</style>
