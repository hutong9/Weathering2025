<template>
  <div>
    <div class="navbar bg-[#102693] text-primary-content">
      <div class="container mx-auto">
        <div class="navbar-start w-full">
          <details class="dropdown" ref="target">
            <summary tabindex="0" role="button" class="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </summary>
            <ul class="menu menu-sm dropdown-content z-[1] shadow bg-[#102693] text-primary-content rounded-box w-52">
              <li>
                <NuxtLink @click="close" class="text-base leading-loose" to="/">首页</NuxtLink>
              </li>

              <li>
                <NuxtLink @click="close" class="text-base leading-loose" to="/abstract">摘要征集</NuxtLink>
              </li>


              <li>
                <NuxtLink @click="close" class="text-base leading-loose" to="/registered">会议注册</NuxtLink>
              </li>
              <li>
                <NuxtLink @click="close" class="text-base leading-loose" to="/organization">组织机构</NuxtLink>
              </li>
              <!-- <li>
                <NuxtLink class="text-base leading-loose" to="/date">重要日期</NuxtLink>
              </li> -->

              <li>
                <NuxtLink @click="close" class="text-base" to="/theme">会议板块</NuxtLink>
              </li>


              <li>
                <NuxtLink @click="close" class="text-base leading-loose" to="/schedule">会议日程</NuxtLink>
              </li>

              <li>
                <NuxtLink @click="close" class="text-base leading-loose" to="/exhibition">招商函</NuxtLink>
              </li>

              <li>
                <NuxtLink @click="close" class="text-base leading-loose" to="/traffic">交通指南</NuxtLink>
              </li>
              <li>
                <NuxtLink @click="close" class="text-base leading-loose" to="/hotel">酒店预订</NuxtLink>
              </li>
              <li>
                <NuxtLink @click="close" class="text-base leading-loose" to="/about">关于延安</NuxtLink>
              </li>
              <!-- <li>
              <a>Parent</a>
              <ul class="p-2">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </li> -->
            </ul>
          </details>

          <a class="btn btn-ghost text-base sm:text-2xl ">
            <!-- <img src="/img/logo.png" alt="" class="sm:h-16 h-10"> -->
            WEATHERING 2025</a>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal px-1">
            <li>
              <NuxtLink class="text-base nav-link" to="/">首页</NuxtLink>
            </li>

            <li>
              <NuxtLink class="text-base nav-link" to="/abstract">摘要征集</NuxtLink>
            </li>


            <li>
              <NuxtLink class="text-base nav-link" to="/registered">会议注册</NuxtLink>
            </li>
            <li>
              <NuxtLink class="text-base nav-link" to="/organization">组织机构</NuxtLink>
            </li>
            <!-- <li>
              <NuxtLink class="text-base nav-link" to="/date">重要日期</NuxtLink>
            </li> -->

            <li>
              <NuxtLink class="text-base nav-link" to="/theme">会议专题</NuxtLink>
            </li>



            <li>
              <NuxtLink class="text-base nav-link" to="/schedule">会议日程</NuxtLink>
            </li>

            <li>
              <NuxtLink class="text-base nav-link" to="/exhibition">招商函</NuxtLink>
            </li>


            <li>
              <NuxtLink class="text-base nav-link" to="/traffic">交通指南</NuxtLink>
            </li>
            <li>
              <NuxtLink class="text-base nav-link" to="/hotel">酒店预订</NuxtLink>
            </li>
            <li>
              <NuxtLink class="text-base nav-link" to="/about">关于延安</NuxtLink>
            </li>

            <!-- 下拉导航开始 -->
            <!-- <li>
              <details>
                <summary>Parent</summary>
                <ul class="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </details>
            </li> -->
          </ul>
        </div>
        <!-- <div class="navbar-end">
          <a class="btn">参会注册</a>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { onClickOutside } from '@vueuse/core'

const target = ref(null)

function close(params) {
  // 移除 target 元素上的属性
  target.value.removeAttribute('open')
}

onClickOutside(target, () => {
  close()
})
</script>

<style scoped>
.nav-link {
  color: rgb(255, 255, 255);
}

.nav-link:hover,
.nav-link:focus,
.nav-link:active {
  color: #6690ff;
}
</style>
