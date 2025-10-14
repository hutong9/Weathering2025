<!--
 * @Author: hutong9 470048408@qq.com
 * @Date: 2024-03-14 11:04:17
 * @LastEditors: HuTong 470048408@qq.com
 * @LastEditTime: 2025-10-14 15:57:40
 * @FilePath: \Weathering2025\components\AppRight.vue
 * @Description: 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
-->
<template>
  <div class="col-span-3 shadow-lg">
    <!-- 快捷方式开始 -->
    <div class="">
      <button class="btn btn-block btn-outline btn-primary mb-4 text-2xl">
        <a href="http://weathering.meeting666.com/UserCentral/Index/Login">参会注册</a>
      </button>
      <button class="btn btn-block btn-outline btn-secondary mb-4 text-2xl">
        <a href="https://conf.kailimice.cn/f/yW1etN">报告提交</a>
      </button>
      <button class="btn btn-block btn-outline btn-accent mb-4 text-2xl">
        <a href="https://conf.kailimice.cn/f/cfXUjW">酒店预订</a>
      </button>
    </div>
    <!-- 快捷方式结束 -->
    <!-- 联系我们开始 -->
    <div>
      <button class="flex items-center justify-start btn btn-block bg-[#102693] text-white text-2xl hover:bg-blue-600">
        <span class="mr-2">联系我们</span>
      </button>
      <div class="p-4">
        <p><b>会务咨询：</b></p>
        <p><b>张&emsp;飞</b> 159 9127 2535，<br>&emsp;&emsp;&emsp;&ensp;zhangfei@ieecas.cn</p>
        <p><b>汪&emsp;进</b> 132 5998 1015，<br>&emsp;&emsp;&emsp;&ensp;wangjin09@ieecas.cn</p>


        <div class="divider"></div>
        <p><b>注册咨询：</b></p>
        <p><b>司绍诚</b> 185 1179 6774,<br>&emsp;&emsp;&emsp;&ensp; sisc@chd.edu.cn</p>


        <div class="divider"></div>
        <p><b>交通咨询：</b></p>
        <p><b>谢丹妮</b> 188 0010 9021,<br>&emsp;&emsp;&emsp;&ensp; dannixie@chd.edu.cn</p>


        <div class="divider"></div>
        <p><b>酒店咨询：</b></p>
        <p><b>郭丹洁</b> 181 9254 1626,<br>&emsp;&emsp;&emsp;&ensp;danjieguo@kailimice.cn</p>
        <div class="divider"></div>
        <p><b>招商咨询：</b></p>
        <p><b>杨&emsp;群</b> 15109234031，<br>&emsp;&emsp;&emsp;&ensp;yangqun@kailimice.cn</p>

      </div>
    </div>
    <!-- 重要日期开始 -->
    <div>
      <button class="flex items-center justify-start btn btn-block bg-[#102693] text-white text-2xl hover:bg-blue-600">
        <span class="mr-2">重要日期</span>
      </button>
      <div class="p-4">
        <p><b>2025年10月24日</b> 投稿截止日期</p>
        <div class="divider"></div>
        <p><b>2025年10月30日</b> 评审结果公布日期</p>
        <div class="divider"></div>




        <p><b>2025年11月07日</b> 现场报到日期</p>
        <div class="divider"></div>



      </div>
    </div>


  </div>
</template>

<script setup>
// 使用setup语法糖，确保组件正确渲染
</script>

<style scoped>
p {
  text-align: left;
}

.divider {
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: stretch;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  height: 0.5rem;
  white-space: nowrap;
}

/* .text_cont {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

.text_cont span {
  white-space: nowrap;
} */
</style>