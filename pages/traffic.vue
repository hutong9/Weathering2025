<!--
 * @Author: hutong9 470048408@qq.com
 * @Date: 2024-01-02 15:37:29
 * @LastEditors: HuTong 470048408@qq.com
 * @LastEditTime: 2025-08-13 09:27:07
 * @FilePath: \Weathering2025\pages\traffic.vue
 * @Description: 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
-->
<template>
  <div>
    <!-- 主体左侧开始 -->
    <app-banner />

    <div class="container mx-auto px-4">
      <div class="container mx-auto sm:grid grid-flow-row-dense grid-cols-12 grid-rows-1 gap-8 py-5 sm:py-20">
        <!-- 主体左侧开始 -->

        <app-traffic />
        <!-- 主体右侧开始 -->
        <app-right />
      </div>
    </div>
  </div>
</template>

<script setup>
// 使用setup语法糖，组件会自动注册
</script>
