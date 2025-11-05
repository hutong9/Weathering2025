<!--
 * @Author: HuTong 470048408@qq.com
 * @Date: 2025-08-08 13:15:19
 * @LastEditors: HuTong 470048408@qq.com
 * @LastEditTime: 2025-11-05 12:14:56
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
    <div class="p-4 sm:p-10 bg-white">
      <!-- 会议地点 -->
      <div class="mb-8 bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border-l-4 border-blue-600">
        <h2 class="text-2xl font-bold text-blue-900 mb-4 flex items-center">
          <svg class="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clip-rule="evenodd" />
          </svg>
          （一）会议地点
        </h2>
        <div class="space-y-2 text-gray-700 leading-relaxed">
          <p class="flex items-start">
            <span class="font-semibold text-blue-700 min-w-24">会议时间：</span>
            <span>2025年11月7-10日（7日注册报到，8-9日学术研讨，10日野外考察）</span>
          </p>
          <p class="flex items-start">
            <span class="font-semibold text-blue-700 min-w-24">会议地点：</span>
            <span>延安万达锦华酒店</span>
          </p>
          <p class="flex items-start">
            <span class="font-semibold text-blue-700 min-w-24">会议地址：</span>
            <span>陕西省延安市宝塔区延安高新区科技城方塔路18号</span>
          </p>
        </div>
      </div>

      <!-- 会议交通 -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-blue-900 mb-6 flex items-center">
          <svg class="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
            <path
              d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
          </svg>
          （二）会议交通
        </h2>

        <!-- 参会行程路线 -->
        <div class="mb-8">
          <h3 class="text-xl font-bold text-gray-800 mb-4 pl-4 border-l-4 border-blue-500">1、参会行程路线</h3>

          <!-- 直达延安 -->
          <div class="mb-6">
            <h4 class="text-lg font-semibold text-blue-800 mb-3 bg-blue-100 px-4 py-2 rounded">✈️ 直达延安</h4>
            <div class="space-y-3 pl-4">
              <div class="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p class="font-semibold text-gray-800 mb-2">🚆 延安火车站→延安市万达锦华酒店</p>
                <p class="text-gray-600 pl-4">总路程6.2 km，打车约15分钟（费用:预计12元）</p>
              </div>
              <div class="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p class="font-semibold text-gray-800 mb-2">✈️ 延安南泥湾机场→延安市万达锦华酒店</p>
                <p class="text-gray-600 pl-4">总路程16 km，打车约25分钟（费用:预计52元）</p>
              </div>
            </div>
          </div>

          <!-- 中转西安 -->
          <div class="mb-6">
            <h4 class="text-lg font-semibold text-blue-800 mb-3 bg-blue-100 px-4 py-2 rounded">🔄 中转西安</h4>
            <div class="bg-red-50 border-l-4 border-red-500 p-4 mb-4 rounded">
              <p class="text-red-700">
                <span class="font-bold">⚠️ 重要温馨提示：</span>从西安至延安乘坐城际/高铁用时更短，且更加舒适便捷！！
              </p>
            </div>

            <!-- 西安站 -->
            <div class="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-4">
              <p class="font-semibold text-gray-800 mb-3">🚄 西安站</p>
              <div class="pl-4 space-y-2 text-gray-700">
                <p>• 城际/动车:（西安站乘坐）:2小时30分钟，票价：86-91元/人</p>
                <p>• 普通火车:（西安站乘坐）:3小时26分钟，票价:50.5元/人</p>
              </div>
            </div>

            <!-- 落地西安咸阳国际机场 -->
            <div class="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-4">
              <p class="font-semibold text-gray-800 mb-3">✈️ 落地西安咸阳国际机场</p>
              <div class="pl-4 space-y-3 text-gray-700">
                <p>会务组将于11月7日提供两班（12:00-12:30之间、15:30-16:00之间）自西安咸阳国际机场至延安的接驳大巴（全程4小时）。</p>
                <div class="bg-white p-3 rounded border border-blue-200">
                  <p class="font-semibold text-blue-800 mb-2">📍 接站点:</p>
                  <ul class="space-y-1 text-sm">
                    <li class="flex items-start">
                      <span class="text-blue-600 mr-2">•</span>
                      <span>(1)T2航站楼接机口（大巴停车场方向出口），接机人:陈晨:15596600450</span>
                    </li>
                    <li class="flex items-start">
                      <span class="text-blue-600 mr-2">•</span>
                      <span>(2)T3航站楼接机口（大巴停车场方向出口），接机人:汪泓涛:17731027375</span>
                    </li>
                    <li class="flex items-start">
                      <span class="text-blue-600 mr-2">•</span>
                      <span>(3)T5航站楼接机口（大巴停车场方向出口），接机人:周广鹏:15291845504</span>
                    </li>
                  </ul>
                </div>
                <div class="bg-white p-3 rounded border border-blue-200">
                  <p class="font-semibold text-blue-800 mb-2">🚌 上车点:</p>
                  <p class="text-sm">西安咸阳国际机场大巴停车场（地上），跟车人员：杨潇潇:18706754323、苏圣博:13891261538</p>
                </div>
              </div>
            </div>

            <!-- 到达西安北站 -->
            <div class="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <p class="font-semibold text-gray-800 mb-3">🚄 到达西安北站</p>
              <div class="pl-4 space-y-3">
                <div class="bg-blue-50 border-l-4 border-blue-500 p-3 rounded">
                  <p class="text-blue-700">
                    <span class="font-semibold">💡 提示：</span>到达后需前往西安站乘坐前往延安的高铁，考虑到交通拥堵问题，推荐乘坐公共交通进行市内便捷换乘。
                  </p>
                </div>
                <div class="bg-white p-3 rounded border border-gray-200">
                  <p class="font-semibold text-gray-800 mb-2">🚇 西安北站→西安站参考路线如下：</p>
                  <div class="text-sm text-gray-700 space-y-1 pl-2">
                    <p>• 打车：总路程17.3km，约30分钟（费用:预计30元）</p>
                    <p>• 地铁：西安北站乘坐4号线-西安站C出站口-上到地面安检口进站（进站口分南进站口和北进站口，请按站内指引乘坐）（约30分钟，费用4元）</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <!-- 路线图展示 -->
        <div class="mb-8">
          <h3 class="text-xl font-bold text-gray-800 mb-4 pl-4 border-l-4 border-purple-500">路线图参考</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- 打车路线图 -->
            <div
              class="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
              <div class="bg-gradient-to-r from-purple-500 to-purple-600 px-4 py-3">
                <h4 class="text-white font-semibold flex items-center">
                  <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                    <path
                      d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
                  </svg>
                  🚖 打车路线图
                </h4>
              </div>
              <div class="p-4 bg-gray-50">
                <img src="/img/dache.png" alt="打车路线图"
                  class="w-full h-auto rounded shadow-sm hover:scale-105 transition-transform duration-300">
              </div>
            </div>

            <!-- 地铁路线图 -->
            <div
              class="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
              <div class="bg-gradient-to-r from-blue-500 to-blue-600 px-4 py-3">
                <h4 class="text-white font-semibold flex items-center">
                  <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                      clip-rule="evenodd" />
                  </svg>
                  🚇 地铁路线图
                </h4>
              </div>
              <div class="p-4 bg-gray-50">
                <img src="/img/ditie.png" alt="地铁路线图"
                  class="w-full h-auto rounded shadow-sm hover:scale-105 transition-transform duration-300">
              </div>
            </div>
          </div>
        </div>

        <!-- 返程安排 -->
        <div class="mb-8">
          <h3 class="text-xl font-bold text-gray-800 mb-4 pl-4 border-l-4 border-green-500">2、返程安排</h3>
          <div class="bg-green-50 p-5 rounded-lg border border-green-200">
            <div class="space-y-3 text-gray-700">
              <p class="flex items-start">
                <span class="text-green-600 mr-2 mt-1">🚌</span>
                <span>会务组将于 <span class="font-bold text-green-700">11月10日（下午17:30）</span> 和 <span
                    class="font-bold text-green-700">11月11日（上午9:00）</span> 各提供一班返回西安咸阳国际机场的大巴。</span>
              </p>
              <p class="flex items-start">
                <span class="text-green-600 mr-2 mt-1">📍</span>
                <span><span class="font-semibold">乘车点：</span>延安万达锦华酒店</span>
              </p>
              <p class="flex items-start">
                <span class="text-green-600 mr-2 mt-1">⏰</span>
                <span><span class="font-semibold">返程时间：</span>11月10日下午17:30准时发车、11月11日上午9:00准时发车</span>
              </p>
            </div>
          </div>
        </div>

        <!-- 注意事项 -->
        <div class="mb-6">
          <h3 class="text-xl font-bold text-gray-800 mb-4 pl-4 border-l-4 border-orange-500">3、注意事项</h3>
          <div class="bg-orange-50 p-5 rounded-lg border border-orange-200">
            <ol class="space-y-3 text-gray-700">
              <li class="flex items-start">
                <span class="font-semibold text-orange-600 mr-3 flex-shrink-0">1.</span>
                <span>司机将严格按照预定时间，提前在指定停车场等候。请您落地后，根据工作人员的指引，前往指定停车场与司机会合。</span>
              </li>
              <li class="flex items-start">
                <span class="font-semibold text-orange-600 mr-3 flex-shrink-0">2.</span>
                <span>如需乘坐机场接驳大巴，请注意落客平台限时停留时间为8分钟，不适宜大巴长时间等候。请务必在大巴停车场处上车。车辆将严格按照规定时间发车，请大家合理安排行程。</span>
              </li>
              <li class="flex items-start">
                <span class="font-semibold text-orange-600 mr-3 flex-shrink-0">3.</span>
                <span>如有特殊接送需求（西安北站），请联系会务组工作人员（谢丹妮：18800109021）。</span>
              </li>
            </ol>
          </div>
        </div>
      </div>


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
