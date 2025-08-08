<!--
 * @Author: hutong9 470048408@qq.com
 * @Date: 2024-03-14 11:04:17
 * @LastEditors: hutong9 470048408@qq.com
 * @LastEditTime: 2024-06-01 23:27:41
 * @FilePath: \isotope2024-master\components\AppSchedule.vue
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
    <!-- <div class="p-4 sm:p-10">
      <div>
        <iframe src="https://cdn.meeting666.com/book/web/viewer.html?file=6.pdf" width="100%" height="1000px"
          allow="fullscreen"></iframe>
      </div>
    </div> -->





  </div>
</template>

<style scoped>
table {
  text-align: center;
  border-top: 1px solid #888;
  border-left: 1px solid #888;
  border-spacing: 0;
  background-color: #fff;
  width: 100%;
  margin: 20px 0;

}

table th {
  border-bottom: 1px solid #888;
  border-right: 1px solid #888;
  font-size: 16px;
  /* color: white;
  background: #102693; */
}

table td {
  border-bottom: 1px solid #888;
  border-right: 1px solid #888;
  font-size: 16px;
  padding: 10px
}
</style>
