<!--
 * @Author: HuTong 470048408@qq.com
 * @Date: 2025-08-08 13:15:19
 * @LastEditors: HuTong 470048408@qq.com
 * @LastEditTime: 2025-08-11 11:54:15
 * @FilePath: \Weathering2025\components\AppAbout.vue
 * @Description: 
 * 
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved. 
-->
<template>
  <div class="col-span-9 shadow-lg">
    <div class="">
      <!-- 主体左侧考试 -->
      <button class="flex items-center justify-start btn btn-block bg-[#102693] text-white text-2xl hover:bg-blue-600">
        <span class="mr-2">关于延安</span>
      </button>
    </div>
    <div class="p-4 sm:p-10">
      <!-- 请增加16章关于延安的照片 -->
      <div class="grid grid-cols-1 gap-1">
        <div v-for="i in 16" :key="i" class="bg-gray-100 rounded-lg p-4">
          <img :src="`/img/关于延安/${i}.jpg`" alt="延安" class="w-full h-full object-cover">
        </div>
      </div>

    </div>
  </div>
</template>
