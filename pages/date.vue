<!--
 * @Author: hutong9 470048408@qq.com
 * @Date: 2024-01-02 15:36:13
 * @LastEditors: hutong9 470048408@qq.com
 * @LastEditTime: 2024-01-03 16:54:25
 * @FilePath: \isscg-19g:\网站开发\cme-6.com.cn\cme\pages\date.vue
 * @Description: 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
-->
<template>
  <div>

    <!-- 主体左侧开始 -->
    <app-banner />

    <div class="container mx-auto px-4">
      <div class="sm:grid grid-flow-row-dense grid-cols-12 grid-rows-1 gap-8 py-5 sm:py-20">

        <!-- 主体左侧开始 -->

        <div class="col-span-9 shadow-lg ">
          <app-date />
        </div>
        <!-- 主体右侧开始 -->
        <app-right />

      </div>

    </div>

  </div>
</template>