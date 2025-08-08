<!--
 * @Author: hutong9 470048408@qq.com
 * @Date: 2023-12-14 13:31:38
 * @LastEditors: hutong9 470048408@qq.com
 * @LastEditTime: 2024-01-08 15:43:45
 * @FilePath: \isscg-19g:\网站开发\cme-6.com.cn\cme\layouts\default.vue
 * @Description: 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->

<template>
  <div class="app-layout">
    <div class="app-header">
      <AppHeader />
    </div>

    <div class="app-main">
      <slot></slot>
    </div>

    <div class="app-footer">
      <AppFooter />
    </div>
  </div>
</template>

<style scoped>
.app-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* 让布局至少占满一屏高度 */
}

.app-header,
.app-footer {
  flex-shrink: 0; /* 不随内容的增多而缩小 */
  background-color: #f0f0f0; /* 调整颜色或样式 */
}

.app-main {
  flex-grow: 1; /* 占据剩余空间 */
}
</style>
