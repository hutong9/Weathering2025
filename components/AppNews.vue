<!--
 * @Author: HuTong 470048408@qq.com
 * @Date: 2025-08-08 13:15:19
 * @LastEditors: HuTong 470048408@qq.com
 * @LastEditTime: 2025-10-27 13:38:17
 * @FilePath: \Weathering2025\components\AppNews.vue
 * @Description: 
 * 
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved. 
-->
<template>
  <div class="container mx-auto pb-10">
    <h2 class="text-3xl font-bold text-center  py-10 sm:pt-4">新闻资讯</h2>
    <div class="grid sm:grid-cols-2 gap-4">
      <div class="px-4 py-4"><img class=" object-cover object-center  md:mt-0 mt-12 hidden md:block"
          src="/img/banner8x3.jpg" alt="新闻资讯" /></div>
      <!-- 右侧开始 -->
      <div>
        <div class="max-w-2xl mx-auto mt-4">




          <div class="flex gap-3 bg-white border border-gray-300 rounded-xl overflow-hidden items-center justify-start">
            <div class="flex flex-col gap-2 py-2">
              <a href="/第二届大陆风化会议邀请函.pdf">
                <div class="inline-flex items-center">
                  <p class="text-xl hover:text-blue-800 pl-4">邀请函下载</p>
                  <img src="/img/new.gif" alt="新图标" class="ml-2 inline-block">
                  <img src="/img/hot.gif" alt="新图标" class="ml-2 inline-block">
                </div>
              </a>
              <p class="text-gray-400 pl-4">
                2025年10月27日
              </p>
            </div>
          </div>


          <div class="flex gap-3 bg-white border border-gray-300 rounded-xl overflow-hidden items-center justify-start">
            <div class="flex flex-col gap-2 py-2">
              <a href="/2号通知.pdf">
                <div class="inline-flex items-center">
                  <p class="text-xl hover:text-blue-800 pl-4">第二轮会议通知下载</p>
                  <img src="/img/new.gif" alt="新图标" class="ml-2 inline-block">
                  <img src="/img/hot.gif" alt="新图标" class="ml-2 inline-block">
                </div>
              </a>
              <p class="text-gray-400 pl-4">
                2025年10月14日
              </p>
            </div>
          </div>

          <!-- 邀请函 -->
          <div class="flex gap-3 bg-white border border-gray-300 rounded-xl overflow-hidden items-center justify-start">
            <div class="flex flex-col gap-2 py-2">
              <a href="/1号通知.pdf">
                <div class="inline-flex items-center">
                  <p class="text-xl hover:text-blue-800 pl-4">第一轮会议通知下载</p>
                  <!-- <img src="/img/new.gif" alt="新图标" class="ml-2 inline-block">
                  <img src="/img/hot.gif" alt="新图标" class="ml-2 inline-block"> -->
                </div>
              </a>
              <p class="text-gray-400 pl-4">
                2025年8月13日
              </p>
            </div>
          </div>









        </div>
      </div>
    </div>





  </div>
</template>

<style scoped>
.badge-secondary {
  background-color: red;
  color: white;
}
</style>