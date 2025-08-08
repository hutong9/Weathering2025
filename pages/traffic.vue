<!--
 * @Author: hutong9 470048408@qq.com
 * @Date: 2024-01-02 15:37:29
 * @LastEditors: hutong9 470048408@qq.com
 * @LastEditTime: 2024-01-05 12:14:55
 * @FilePath: \isscg-19g:\网站开发\cme-6.com.cn\cme\pages\traffic.vue
 * @Description: 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
-->
<template>
  <div>
    <!-- 主体左侧开始 -->
    <app-banner />

    <div class="container mx-auto px-4">
      <div
        class="container mx-auto sm:grid grid-flow-row-dense grid-cols-12 grid-rows-1 gap-8 py-5 sm:py-20">
        <!-- 主体左侧开始 -->

        <app-traffic />
        <!-- 主体右侧开始 -->
        <app-right />
      </div>
    </div>
  </div>
</template>
