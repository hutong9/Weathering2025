<!--
 * @Author: HuTong 470048408@qq.com
 * @Date: 2025-08-08 13:15:19
 * @LastEditors: HuTong 470048408@qq.com
 * @LastEditTime: 2025-08-15 20:08:27
 * @FilePath: \Weathering2025\components\AppHotel.vue
 * @Description: 
 * 
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved. 
-->
<template>
  <div class="col-span-9 shadow-lg">
    <div class="">
      <!-- 主体左侧开始 -->
      <button class="flex items-center justify-start btn btn-block bg-[#102693] text-white text-2xl hover:bg-blue-600">
        <span class="mr-2">酒店预订</span>
      </button>
    </div>
    <!-- <div class="p-4 sm:p-10"></div> -->

    <!-- 天气开始 hidden sm:block-->
    <!-- <div class="hidden sm:block">
      <div class="flex items-center justify-center ">
        <iframe class="items-center" allowtransparency="true" frameborder="0" width="875" height="98" scrolling="no"
          src="//tianqi.2345.com/plugin/widget/index.htm?s=2&z=3&t=1&v=0&d=5&bd=0&k=&f=&ltf=009944&htf=cc0000&q=1&e=0&a=0&c=57036&w=875&h=98&align=center"></iframe>
      </div>
    </div> -->
    <!-- 天气结束 -->

    <section class="text-gray-600 body-font">
      <div class="container px-5 py-10 mx-auto">
        <div class="flex flex-col text-center w-full mb-10">

          <p class="text-2xl mx-auto leading-7 mb-8">
            <b>协议酒店：</b> 延安万达锦华酒店（主会场）
          </p>

          <img src="/img/hotel.png" alt="">

          <p class="mt-4 mx-auto  leading-7">
            <b>大床/标间价格：</b> 300元/晚
          </p>

          <p class=" mx-auto leading-7">
            会议期间食宿自理，如需团队预订也联系会务组代订。
          </p>

          <div class="text-center p-4">
            <button class="btn btn-active bg-[#102693] btn-primary  text-white text-xl">
              <a href="https://kaili.kailimice.cn/f/BeWyUE">酒店预订</a>
            </button>
          </div>

        </div>
      </div>



    </section>








  </div>

</template>
