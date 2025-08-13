<!--
 * @Author: HuTong 470048408@qq.com
 * @Date: 2025-08-08 13:15:19
 * @LastEditors: HuTong 470048408@qq.com
 * @LastEditTime: 2025-08-11 12:03:38
 * @FilePath: \Weathering2025\components\AppTraffic.vue
 * @Description: 
 * 
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved. 
-->
<template>
  <div class="col-span-9 shadow-lg">
    <div class="">
      <!-- 主体左侧考试 -->
      <button class="flex items-center justify-start btn btn-block bg-[#102693] text-white text-2xl hover:bg-blue-600">
        <span class="mr-2">交通指南</span>
      </button>
    </div>
    <div class="p-4 sm:p-10">
      <p>
        <b class="text-xl">会议地址：</b>延安万达锦华酒店
      </p>
      <br />
      <p><b class="text-xl">延安南泥湾机场——万达锦华酒店</b></p>
      <p>
        公共交通：可乘坐机场巴士 2 号线、3 号线或机场巴士石油小区线到延河大桥站下车。之后可换乘 K27 路公交车，在环湖西路中段下车，步行 300 米到达酒店。全程耗时约 1 小时左右，具体取决于公交换乘等待时间和路况。
      </p>
      <p>打车：距离约 18 公里，耗时约 25 分钟，费用大概在 40 - 50 元左右，具体费用以实际行程为准。</p>
      <br />

      <p><b class="text-xl">延安站——万达锦华酒店</b></p>
      <p>
        公共交通：步行 200 米在火车站乘坐 K302 路或 K206 路公交车，3 站后在延河大桥下车，同站换乘 K27 路，乘坐 10 站在环湖西路中段下车，步行 300 米到达酒店。全程耗时约 40 分钟 - 1
        小时，受公交运行时间影响较大。
      </p>
      <p>打车：距离约 6.8 公里，耗时约 15 分钟，费用大约在 15 - 25 元左右，具体根据实际打车价格而定。</p>
      <br />

      <p><b class="text-xl">延安北站——万达锦华酒店</b></p>
      <p>
        公共交通：可先乘坐 302 路公交车到交警一大队站，换乘 K11 路到汽车南站・火车站，再换乘 K302 路或 K206 路到延河大桥站，最后换乘 K27 路到达环湖西路中段站，步行前往酒店。全程耗时约 1.5 - 2
        小时。
      </p>
      <p>打车：距离约 20 公里，耗时约 30 分钟，打车费用大概在 50 - 60 元左右，具体费用视实际情况而定。</p>
    </div>


    <!-- hidden sm:block -->
    <!-- <iframe class="w-full" style="height: 1000px"
      src="https://ditu.amap.com/dir?type=car&policy=2&from%5Blnglat%5D=116.3246%2C39.966577&from%5Bname%5D=endpoint&from%5Bid%5D=1710917313000-to&to%5Badcode%5D=610111&to%5Bname%5D=%E8%A5%BF%E5%AE%89%E5%9B%BD%E9%99%85%E4%BC%9A%E5%B1%95%E4%B8%AD%E5%BF%83%E4%BC%9A%E8%AE%AE%E6%A5%BC&to%5Bid%5D=B0FFMHT61M-from&to%5Bpoitype%5D=140000&to%5Blnglat%5D=109.04318599999999%2C34.334005&to%5Bmodxy%5D=109.042513%2C34.333307&src=mypage&callnative=0&innersrc=uriapi"
      frameborder="0"></iframe> -->

  </div>
</template>

<script setup>
// 使用setup语法糖，确保组件正确渲染
</script>
