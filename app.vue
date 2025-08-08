<!--
 * @Author: HuTong 470048408@qq.com
 * @Date: 2025-08-08 13:15:19
 * @LastEditors: HuTong 470048408@qq.com
 * @LastEditTime: 2025-08-08 13:23:04
 * @FilePath: \Weathering2025\app.vue
 * @Description: 
 * 
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved. 
-->
<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: '2025第二届“大陆风化前沿学术讨论会”',

  meta: [
    {
      name: 'description',
      content:
        '由中国科学院地球环境研究所承办的2025第二届“大陆风化前沿学术讨论会”将于2025年10月17-20日在陕西省延安市举行。',
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1.0',
      //     "width=device-width, initial-scale=0, user-scalable=yes,shrink-to-fit=no",
    },
    {
      name: 'keywords',
      content: '大陆风化前沿学术讨论会,第二届大陆风化,大陆风化,第二届大陆风化前沿学术讨论会',
    },
  ],

  link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
  {
    rel: 'stylesheet',
    href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css', // 替换为你的CDN CSS链接
  },],

  // bodyAttrs: {
  //   class: 'test',
  // },
  script: [
    {
      src: 'https://widget.qweather.net/standard/static/js/he-standard-common.js?v=2.0',
      async: true,
    },
  ],
});
</script>

<style>
p {
  font-size: 16px;
  line-height: 30px;
  text-align: justify;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

/* @media only screen and (max-width: 600px) {
  p {
    font-size: 14px; 
    line-height: 1.5; 
  }
} */
</style>
