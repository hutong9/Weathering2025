<!--
 * @Author: hutong9 470048408@qq.com
 * @Date: 2024-03-14 11:04:17
 * @LastEditors: HuTong 470048408@qq.com
 * @LastEditTime: 2025-11-05 12:22:32
 * @FilePath: \Weathering2025\components\AppSchedule.vue
 * @Description: 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
-->
<template>
  <div class="col-span-9 shadow-lg">
    <div class="">
      <!-- 主体左侧考试 -->
      <button class="flex items-center justify-start btn btn-block bg-[#102693] text-white text-2xl hover:bg-blue-600">
        <span class="mr-2">会议日程</span>
      </button>
    </div>

    <div class="p-4 sm:p-10 bg-white">
      <!-- 标题区域 -->
      <div class="mb-8">
        <h2 class="text-3xl font-bold text-blue-900 mb-2 flex items-center">
          <svg class="w-8 h-8 mr-3" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd"
              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
              clip-rule="evenodd" />
          </svg>
          会议日程概览
        </h2>
        <div class="h-1 w-24 bg-blue-600"></div>
      </div>

      <!-- 日程表格 -->
      <div class="overflow-x-auto mb-8 rounded-lg shadow-md">
        <table class="schedule-table">
          <thead>
            <tr class="bg-blue-600 text-white">
              <th class="px-6 py-4 text-center font-semibold text-lg">日 期</th>
              <th class="px-6 py-4 text-center font-semibold text-lg">时 间</th>
              <th class="px-6 py-4 text-center font-semibold text-lg">内 容</th>
              <th class="px-6 py-4 text-center font-semibold text-lg">地 点</th>
            </tr>
          </thead>
          <tbody>
            <!-- 11月07日 - 报到 -->
            <tr class="hover:bg-blue-50 transition-colors border-b border-gray-200">
              <td class="px-6 py-4 text-center font-semibold text-blue-700 bg-blue-50">11月07日</td>
              <td class="px-6 py-4 text-center text-gray-700">全 天</td>
              <td class="px-6 py-4 text-center font-medium text-gray-800">报 到</td>
              <td class="px-6 py-4 text-center text-gray-700">延安万达锦华酒店大堂</td>
            </tr>
            <!-- 11月07日 - 见面冷餐会 -->
            <tr class="hover:bg-blue-50 transition-colors border-b border-gray-200">
              <td class="px-6 py-4 text-center font-semibold text-blue-700 bg-blue-50">11月07日</td>
              <td class="px-6 py-4 text-center text-gray-700">18:00开始</td>
              <td class="px-6 py-4 text-center font-medium text-gray-800">见面冷餐会</td>
              <td class="px-6 py-4 text-center text-gray-700">延安万达锦华酒店一楼 红色讲堂（1927厅）</td>
            </tr>
            <!-- 11月08日 - 开幕式 -->
            <tr class="hover:bg-blue-50 transition-colors border-b border-gray-200">
              <td class="px-6 py-4 text-center font-semibold text-blue-700 bg-blue-50" rowspan="4">11月08日</td>
              <td class="px-6 py-4 text-center text-gray-700 font-medium">08:30-12:00</td>
              <td class="px-6 py-4 text-center font-medium text-gray-800">开幕式和大会报告</td>
              <td class="px-6 py-4 text-center text-gray-700">红色讲堂坚持厅（1F）</td>
            </tr>
            <tr class="hover:bg-blue-50 transition-colors border-b border-gray-200">
              <td class="px-6 py-4 text-center text-gray-700">12:00-14:00</td>
              <td class="px-6 py-4 text-center text-gray-600">午 餐</td>
              <td class="px-6 py-4 text-center text-gray-700">锦华酒店一楼 北岸餐厅</td>
            </tr>
            <tr class="hover:bg-blue-50 transition-colors border-b border-gray-200">
              <td class="px-6 py-4 text-center text-gray-700 font-medium">14:00-18:00</td>
              <td class="px-6 py-4 text-center font-medium text-gray-800">专题报告</td>
              <td class="px-6 py-4 text-center text-gray-700">红色讲堂1935厅、1949厅（B1F）</td>
            </tr>
            <tr class="hover:bg-blue-50 transition-colors border-b-2 border-gray-300">
              <td class="px-6 py-4 text-center text-gray-700">18:00-20:00</td>
              <td class="px-6 py-4 text-center text-gray-600">晚 餐</td>
              <td class="px-6 py-4 text-center text-gray-700">锦华酒店一楼 北岸餐厅</td>
            </tr>
            <!-- 11月09日 -->
            <tr class="hover:bg-blue-50 transition-colors border-b border-gray-200">
              <td class="px-6 py-4 text-center font-semibold text-blue-700 bg-blue-50" rowspan="4">11月09日</td>
              <td class="px-6 py-4 text-center text-gray-700 font-medium">08:30-12:00</td>
              <td class="px-6 py-4 text-center font-medium text-gray-800">专题报告</td>
              <td class="px-6 py-4 text-center text-gray-700">红色讲堂1935厅、1949厅（B1F） 1921厅（1F）</td>
            </tr>
            <tr class="hover:bg-blue-50 transition-colors border-b border-gray-200">
              <td class="px-6 py-4 text-center text-gray-700">12:00-14:00</td>
              <td class="px-6 py-4 text-center text-gray-600">午 餐</td>
              <td class="px-6 py-4 text-center text-gray-700">锦华酒店一楼 北岸餐厅</td>
            </tr>
            <tr class="hover:bg-blue-50 transition-colors border-b border-gray-200">
              <td class="px-6 py-4 text-center text-gray-700 font-medium">14:00-18:00</td>
              <td class="px-6 py-4 text-center font-medium text-gray-800">专题报告</td>
              <td class="px-6 py-4 text-center text-gray-700">红色讲堂1935厅、1949厅（B1F） 1921厅（1F）</td>
            </tr>
            <tr class="hover:bg-blue-50 transition-colors">
              <td class="px-6 py-4 text-center text-gray-700">18:00-20:00</td>
              <td class="px-6 py-4 text-center text-gray-600">晚 餐</td>
              <td class="px-6 py-4 text-center text-gray-700">锦华酒店一楼 北岸餐厅</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- 温馨提示 -->
      <div class="bg-amber-50  border-amber-600 p-6 rounded shadow-md">
        <div class="flex items-start">
          <div class="flex-shrink-0">
            <svg class="w-6 h-6 text-amber-600 mt-1" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clip-rule="evenodd" />
            </svg>
          </div>
          <div class="ml-4">
            <h3 class="text-lg font-semibold text-amber-900 mb-2">温馨提示</h3>
            <p class="text-gray-700 leading-relaxed">
              本次会议旨在深度讨论大陆风化前沿科学问题，<span
                class="font-semibold text-amber-800">不鼓励已有成果展示</span>。报告人做不超过十分钟的背景介绍，着重介绍研究问题的重要性、阐述科学问题的本质、面临的研究难点和可能的解决方案，然后充分讨论。
            </p>
          </div>
        </div>
      </div>
    </div>





    <!-- <div class="p-4 sm:p-10">
      <div>
        <iframe src="https://cdn.meeting666.com/book/web/viewer.html?file=6.pdf" width="100%" height="1000px"
          allow="fullscreen"></iframe>
      </div>
    </div> -->





  </div>
</template>

<style scoped>
.schedule-table {
  width: 100%;
  border-collapse: collapse;
  background-color: #fff;
  overflow: hidden;
}

.schedule-table thead th {
  background: #2563eb;
  color: white;
  font-weight: 600;
  letter-spacing: 0.05em;
}

.schedule-table tbody tr {
  border-bottom: 1px solid #e5e7eb;
}

.schedule-table tbody tr:last-child {
  border-bottom: none;
}

.schedule-table tbody tr:hover {
  background-color: #eff6ff;
  transition: background-color 0.2s ease;
}

.schedule-table td,
.schedule-table th {
  padding: 1rem 1.5rem;
  text-align: center;
  vertical-align: middle;
}

/* 日期列特殊样式 */
.schedule-table td:first-child {
  font-weight: 600;
  background-color: #eff6ff;
  color: #1e40af;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .schedule-table {
    font-size: 0.875rem;
  }

  .schedule-table td,
  .schedule-table th {
    padding: 0.75rem 0.5rem;
  }
}
</style>
