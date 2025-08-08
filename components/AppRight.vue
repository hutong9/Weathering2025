<!--
 * @Author: hutong9 470048408@qq.com
 * @Date: 2024-03-14 11:04:17
 * @LastEditors: HuTong 470048408@qq.com
 * @LastEditTime: 2025-08-08 19:06:45
 * @FilePath: \Weathering2025\components\AppRight.vue
 * @Description: 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
-->
<template>
  <div class="col-span-3 shadow-lg">
    <!-- 快捷方式开始 -->
    <div class="">
      <button class="btn btn-block btn-outline btn-primary mb-4 text-2xl">
        <a href="/registered">参会注册</a>
      </button>
      <button class="btn btn-block btn-outline btn-secondary mb-4 text-2xl">
        <a href="http://weathering.meeting666.com/UserCentral/Index/Login">在线投稿</a>
      </button>
      <button class="btn btn-block btn-outline btn-accent mb-4 text-2xl">
        <a href="https://kaili.kailimice.cn/f/BeWyUE">酒店预订</a>
      </button>
    </div>
    <!-- 快捷方式结束 -->
    <!-- 联系我们开始 -->
    <div>
      <button class="flex items-center justify-start btn btn-block bg-[#102693] text-white text-2xl hover:bg-blue-600">
        <span class="mr-2">联系我们</span>
      </button>
      <div class="p-4">
        <p><b>学术咨询：</b></p>
        <p><b>韦刚健</b> 13660143620，<br>&emsp;&emsp;&emsp;&ensp;gjwei@gig.ac.cn</p>
        <p class="text_con"><b>贺茂勇</b> 180 9118 8568，<br>&emsp;&emsp;&emsp;&ensp;hemy@ieecas.cn</p>
        <p><b>陈开运</b> 135 7228 1864，<br>&emsp;&emsp;&emsp;&ensp;kychen@nwu.edu.cn</p>

        <div class="divider"></div>
        <p><b>注册咨询：</b></p>
        <p><b>王安琪</b> 133 4159 1706,<br>&emsp;&emsp;&emsp;&ensp;2577091349@qq.com</p>
        <div class="divider"></div>
        <p><b>酒店咨询：</b></p>
        <p><b>贾&emsp;佩</b> 153 9804 6729,<br>&emsp;&emsp;&emsp;&ensp;liwenzhu@kailimice.cn</p>
        <div class="divider"></div>
        <p><b>招商咨询：</b></p>
        <p><b>徐&emsp;阳</b> 155 2952 3916，<br>&emsp;&emsp;&emsp;&ensp;xuyang@ieecas.cn</p>

      </div>
    </div>
    <!-- 重要日期开始 -->
    <div>
      <button class="flex items-center justify-start btn btn-block bg-[#102693] text-white text-2xl hover:bg-blue-600">
        <span class="mr-2">重要日期</span>
      </button>
      <div class="p-4">
        <p><b>2025年9月18日</b> 投稿截止日期</p>
        <div class="divider"></div>
        <p><b>2025年9月30日</b> 评审结果公布日期</p>
        <div class="divider"></div>




        <p><b>2024年10月17日</b> 现场报到日期</p>
        <div class="divider"></div>



      </div>
    </div>


  </div>
</template>
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