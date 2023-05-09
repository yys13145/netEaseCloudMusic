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
/* CDN 服务仅供平台体验和调试使用，平台不承诺服务的稳定性，企业客户需下载字体包自行发布使用并做好备份。 */
@font-face {
  font-family: 'iconfont';  /* Project id 3254442 */
  src: url('//at.alicdn.com/t/c/font_3254442_g180o0tdc5g.woff2?t=1683613717360') format('woff2'),
       url('//at.alicdn.com/t/c/font_3254442_g180o0tdc5g.woff?t=1683613717360') format('woff'),
       url('//at.alicdn.com/t/c/font_3254442_g180o0tdc5g.ttf?t=1683613717360') format('truetype');
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

.icon-zuojiantou:before {
  content: "\e625";
}
</style>
