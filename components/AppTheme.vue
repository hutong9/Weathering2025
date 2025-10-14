<template>
  <div class="col-span-9 shadow-lg">
    <div class="">
      <!-- 主体左侧考试 -->
      <button class="flex items-center justify-start btn btn-block bg-[#102693] text-white text-2xl hover:bg-blue-600">
        <span class="mr-2">会议专题</span>
      </button>
    </div>
    <div class="py-4 sm:p-10">
      <!-- 手风琴容器 -->
      <div class="space-y-3">
        <!-- 板块一 -->
        <div class="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          <button @click="toggleAccordion(1)"
            class="w-full px-6 py-4 bg-[#102693] text-white flex items-center justify-between hover:bg-blue-700 transition-all">
            <div class="flex items-center gap-3">
              <span class="text-xl font-bold">板块一</span>
              <span class="text-lg">风化研究方法指标</span>
            </div>
            <svg class="w-6 h-6 transform transition-transform duration-300"
              :class="{ 'rotate-180': activeAccordion === 1 }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          <div v-show="activeAccordion === 1" class="bg-gray-50 px-6 py-5 border-t border-gray-200">
            <!-- 召集人信息 -->
            <div class="mb-5 pb-4 border-b-2 border-blue-100">
              <div class="flex items-start gap-2">
                <div class="flex items-center gap-2 mt-1">
                  <svg class="w-5 h-5 text-[#102693]" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z">
                    </path>
                  </svg>
                  <span class="text-gray-700 font-bold text-base">召集人：</span>
                </div>
                <div class="flex flex-wrap gap-2">
                  <span
                    class="px-3 py-1 bg-blue-50 text-gray-800  rounded-lg border border-blue-200 font-medium">张飞</span>
                  <span
                    class="px-3 py-1 bg-blue-50 text-gray-800  rounded-lg border border-blue-200 font-medium">王志兵</span>
                  <span
                    class="px-3 py-1 bg-blue-50 text-gray-800  rounded-lg border border-blue-200 font-medium">钟君</span>
                  <span
                    class="px-3 py-1 bg-blue-50 text-gray-800  rounded-lg border border-blue-200 font-medium">李文帅</span>
                  <span
                    class="px-3 py-1 bg-blue-50 text-gray-800  rounded-lg border border-blue-200 font-medium">孙贺</span>
                </div>
              </div>
            </div>
            <!-- 专题讨论列表 -->
            <div class="space-y-3">
              <div
                class="bg-white rounded-xl p-5 shadow-sm hover:shadow-md border border-gray-100 hover:border-blue-200 transition-all duration-300 group">
                <div class="flex items-start gap-3">
                  <div
                    class="flex-shrink-0 w-8 h-8 bg-[#102693] rounded-lg flex items-center justify-center text-white font-bold  shadow-sm">
                    1.1
                  </div>
                  <div class="flex-1">
                    <h4 class="font-bold text-[#102693] text-base mb-3 group-hover:text-blue-700 transition-colors">
                      风化研究指标方法</h4>
                    <div class="flex items-center flex-wrap gap-2">
                      <span class=" text-gray-500 font-medium">主持人：</span>
                      <span
                        class="px-3 py-1 bg-gray-50 text-gray-700  rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-colors">李思亮</span>
                      <span
                        class="px-3 py-1 bg-gray-50 text-gray-700  rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-colors">韦刚健</span>
                      <span
                        class="px-3 py-1 bg-gray-50 text-gray-700  rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-colors">王志兵</span>
                      <span
                        class="px-3 py-1 bg-gray-50 text-gray-700  rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-colors">于兆杰</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="bg-white rounded-xl p-5 shadow-sm hover:shadow-md border border-gray-100 hover:border-blue-200 transition-all duration-300 group">
                <div class="flex items-start gap-3">
                  <div
                    class="flex-shrink-0 w-8 h-8 bg-[#102693] rounded-lg flex items-center justify-center text-white font-bold  shadow-sm">
                    1.2
                  </div>
                  <div class="flex-1">
                    <h4 class="font-bold text-[#102693] text-base mb-3 group-hover:text-blue-700 transition-colors">
                      风化Li同位素指标</h4>
                    <div class="flex items-center flex-wrap gap-2">
                      <span class=" text-gray-500 font-medium">主持人：</span>
                      <span
                        class="px-3 py-1 bg-gray-50 text-gray-700  rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-colors">赵志琦</span>
                      <span
                        class="px-3 py-1 bg-gray-50 text-gray-700  rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-colors">张飞</span>
                      <span
                        class="px-3 py-1 bg-gray-50 text-gray-700  rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-colors">孙贺</span>
                      <span
                        class="px-3 py-1 bg-gray-50 text-gray-700  rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-colors">张俊文</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="bg-white rounded-xl p-5 shadow-sm hover:shadow-md border border-gray-100 hover:border-blue-200 transition-all duration-300 group">
                <div class="flex items-start gap-3">
                  <div
                    class="flex-shrink-0 w-8 h-8 bg-[#102693] rounded-lg flex items-center justify-center text-white font-bold  shadow-sm">
                    1.3
                  </div>
                  <div class="flex-1">
                    <h4 class="font-bold text-[#102693] text-base mb-3 group-hover:text-blue-700 transition-colors">
                      非传统稳定同位素新指标与方法</h4>
                    <div class="flex items-center flex-wrap gap-2">
                      <span class=" text-gray-500 font-medium">主持人：</span>
                      <span
                        class="px-3 py-1 bg-gray-50 text-gray-700  rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-colors">黄方</span>
                      <span
                        class="px-3 py-1 bg-gray-50 text-gray-700  rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-colors">金章东</span>
                      <span
                        class="px-3 py-1 bg-gray-50 text-gray-700  rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-colors">李文帅</span>
                      <span
                        class="px-3 py-1 bg-gray-50 text-gray-700  rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-colors">吴非</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="bg-white rounded-xl p-5 shadow-sm hover:shadow-md border border-gray-100 hover:border-blue-200 transition-all duration-300 group">
                <div class="flex items-start gap-3">
                  <div
                    class="flex-shrink-0 w-8 h-8 bg-[#102693] rounded-lg flex items-center justify-center text-white font-bold  shadow-sm">
                    1.4
                  </div>
                  <div class="flex-1">
                    <h4 class="font-bold text-[#102693] text-base mb-3 group-hover:text-blue-700 transition-colors">
                      风化与文物保护</h4>
                    <div class="flex items-center flex-wrap gap-2">
                      <span class=" text-gray-500 font-medium">主持人：</span>
                      <span
                        class="px-3 py-1 bg-gray-50 text-gray-700  rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-colors">刘小波</span>
                      <span
                        class="px-3 py-1 bg-gray-50 text-gray-700  rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-colors">武发思</span>
                      <span
                        class="px-3 py-1 bg-gray-50 text-gray-700  rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-colors">杨海清</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 板块二 -->
        <div class="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          <button @click="toggleAccordion(2)"
            class="w-full px-6 py-4 bg-[#102693] text-white flex items-center justify-between hover:bg-blue-700 transition-all">
            <div class="flex items-center gap-3">
              <span class="text-xl font-bold">板块二</span>
              <span class="text-lg">风化机制现代过程研究</span>
            </div>
            <svg class="w-6 h-6 transform transition-transform duration-300"
              :class="{ 'rotate-180': activeAccordion === 2 }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          <div v-show="activeAccordion === 2" class="bg-gray-50 px-6 py-5 border-t border-gray-200">
            <div class="mb-5 pb-4 border-b-2 border-blue-100">
              <div class="flex items-start gap-2">
                <div class="flex items-center gap-2 mt-1">
                  <svg class="w-5 h-5 text-[#102693]" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z">
                    </path>
                  </svg>
                  <span class="text-gray-700 font-bold text-base">召集人：</span>
                </div>
                <div class="flex flex-wrap gap-2">
                  <span
                    class="px-3 py-1 bg-blue-50 text-gray-800  rounded-lg border border-blue-200 font-medium">汪进</span>
                  <span
                    class="px-3 py-1 bg-blue-50 text-gray-800  rounded-lg border border-blue-200 font-medium">陈春梅</span>
                  <span
                    class="px-3 py-1 bg-blue-50 text-gray-800  rounded-lg border border-blue-200 font-medium">刘文景</span>
                  <span
                    class="px-3 py-1 bg-blue-50 text-gray-800  rounded-lg border border-blue-200 font-medium">李超</span>
                  <span
                    class="px-3 py-1 bg-blue-50 text-gray-800  rounded-lg border border-blue-200 font-medium">李来峰</span>
                </div>
              </div>
            </div>
            <div class="space-y-3">
              <div
                class="bg-white rounded-xl p-5 shadow-sm hover:shadow-md border border-gray-100 hover:border-blue-200 transition-all duration-300 group">
                <div class="flex items-start gap-3">
                  <div
                    class="flex-shrink-0 w-8 h-8 bg-[#102693] rounded-lg flex items-center justify-center text-white font-bold  shadow-sm">
                    2.1
                  </div>
                  <div class="flex-1">
                    <h4 class="font-bold text-[#102693] text-base mb-3 group-hover:text-blue-700 transition-colors">
                      风化机理新认识</h4>
                    <div class="flex items-center flex-wrap gap-2">
                      <span class=" text-gray-500 font-medium">主持人：</span>
                      <span
                        class="px-3 py-1 bg-gray-50 text-gray-700  rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-colors">刘文景</span>
                      <span
                        class="px-3 py-1 bg-gray-50 text-gray-700  rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-colors">陈春梅</span>
                      <span
                        class="px-3 py-1 bg-gray-50 text-gray-700  rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-colors">李来峰</span>
                      <span
                        class="px-3 py-1 bg-gray-50 text-gray-700  rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-colors">李子波</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="bg-white rounded-xl p-5 shadow-sm hover:shadow-md border border-gray-100 hover:border-blue-200 transition-all duration-300 group">
                <div class="flex items-start gap-3">
                  <div
                    class="flex-shrink-0 w-8 h-8 bg-[#102693] rounded-lg flex items-center justify-center text-white font-bold  shadow-sm">
                    2.2
                  </div>
                  <div class="flex-1">
                    <h4 class="font-bold text-[#102693] text-base mb-3 group-hover:text-blue-700 transition-colors">
                      有机碳风化研究进展</h4>
                    <div class="flex items-center flex-wrap gap-2">
                      <span class=" text-gray-500 font-medium">主持人：</span>
                      <span
                        class="px-3 py-1 bg-gray-50 text-gray-700  rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-colors">徐志方</span>
                      <span
                        class="px-3 py-1 bg-gray-50 text-gray-700  rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-colors">崔行骞</span>
                      <span
                        class="px-3 py-1 bg-gray-50 text-gray-700  rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-colors">汪进</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="bg-white rounded-xl p-5 shadow-sm hover:shadow-md border border-gray-100 hover:border-blue-200 transition-all duration-300 group">
                <div class="flex items-start gap-3">
                  <div
                    class="flex-shrink-0 w-8 h-8 bg-[#102693] rounded-lg flex items-center justify-center text-white font-bold  shadow-sm">
                    2.3
                  </div>
                  <div class="flex-1">
                    <h4 class="font-bold text-[#102693] text-base mb-3 group-hover:text-blue-700 transition-colors">
                      碳酸盐风化</h4>
                    <div class="flex items-center flex-wrap gap-2">
                      <span class=" text-gray-500 font-medium">主持人：</span>
                      <span
                        class="px-3 py-1 bg-gray-50 text-gray-700  rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-colors">曾思博</span>
                      <span
                        class="px-3 py-1 bg-gray-50 text-gray-700  rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-colors">章程</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="bg-white rounded-xl p-5 shadow-sm hover:shadow-md border border-gray-100 hover:border-blue-200 transition-all duration-300 group">
                <div class="flex items-start gap-3">
                  <div
                    class="flex-shrink-0 w-8 h-8 bg-[#102693] rounded-lg flex items-center justify-center text-white font-bold  shadow-sm">
                    2.4
                  </div>
                  <div class="flex-1">
                    <h4 class="font-bold text-[#102693] text-base mb-3 group-hover:text-blue-700 transition-colors">
                      从源到汇风化过程</h4>
                    <div class="flex items-center flex-wrap gap-2">
                      <span class=" text-gray-500 font-medium">主持人：</span>
                      <span
                        class="px-3 py-1 bg-gray-50 text-gray-700  rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-colors">杨守业</span>
                      <span
                        class="px-3 py-1 bg-gray-50 text-gray-700  rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-colors">李超</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 板块三 -->
        <div class="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          <button @click="toggleAccordion(3)"
            class="w-full px-6 py-4 bg-[#102693] text-white flex items-center justify-between hover:bg-blue-700 transition-all">
            <div class="flex items-center gap-3">
              <span class="text-xl font-bold">板块三</span>
              <span class="text-lg">第四纪气候变化与大陆风化</span>
            </div>
            <svg class="w-6 h-6 transform transition-transform duration-300"
              :class="{ 'rotate-180': activeAccordion === 3 }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          <div v-show="activeAccordion === 3" class="bg-gray-50 px-6 py-5 border-t border-gray-200">
            <div class="mb-5 pb-4 border-b-2 border-blue-100">
              <div class="flex items-start gap-2">
                <div class="flex items-center gap-2 mt-1">
                  <svg class="w-5 h-5 text-[#102693]" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z">
                    </path>
                  </svg>
                  <span class="text-gray-700 font-bold text-base">召集人：</span>
                </div>
                <div class="flex flex-wrap gap-2">
                  <span
                    class="px-3 py-1 bg-blue-50 text-gray-800  rounded-lg border border-blue-200 font-medium">张海伟</span>
                  <span
                    class="px-3 py-1 bg-blue-50 text-gray-800  rounded-lg border border-blue-200 font-medium">王欢业</span>
                  <span
                    class="px-3 py-1 bg-blue-50 text-gray-800  rounded-lg border border-blue-200 font-medium">李涛</span>
                  <span
                    class="px-3 py-1 bg-blue-50 text-gray-800  rounded-lg border border-blue-200 font-medium">章泽科</span>
                </div>
              </div>
            </div>
            <div class="space-y-3">
              <div
                class="bg-white rounded-xl p-5 shadow-sm hover:shadow-md border border-gray-100 hover:border-blue-200 transition-all duration-300 group">
                <div class="flex items-start gap-3">
                  <div
                    class="flex-shrink-0 w-8 h-8 bg-[#102693] rounded-lg flex items-center justify-center text-white font-bold  shadow-sm">
                    3.1
                  </div>
                  <div class="flex-1">
                    <h4 class="font-bold text-[#102693] text-base mb-3 group-hover:text-blue-700 transition-colors">
                      大陆风化与气候重建的同位素新方法</h4>
                    <div class="flex items-center flex-wrap gap-2">
                      <span class=" text-gray-500 font-medium">主持人：</span>
                      <span
                        class="px-3 py-1 bg-gray-50 text-gray-700  rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-colors">刘向军</span>
                      <span
                        class="px-3 py-1 bg-gray-50 text-gray-700  rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-colors">李涛</span>
                      <span
                        class="px-3 py-1 bg-gray-50 text-gray-700  rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-colors">高远</span>
                      <span
                        class="px-3 py-1 bg-gray-50 text-gray-700  rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-colors">沙丽娟</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="bg-white rounded-xl p-5 shadow-sm hover:shadow-md border border-gray-100 hover:border-blue-200 transition-all duration-300 group">
                <div class="flex items-start gap-3">
                  <div
                    class="flex-shrink-0 w-8 h-8 bg-[#102693] rounded-lg flex items-center justify-center text-white font-bold  shadow-sm">
                    3.2
                  </div>
                  <div class="flex-1">
                    <h4 class="font-bold text-[#102693] text-base mb-3 group-hover:text-blue-700 transition-colors">
                      第四纪年代学与风化侵蚀</h4>
                    <div class="flex items-center flex-wrap gap-2">
                      <span class=" text-gray-500 font-medium">主持人：</span>
                      <span
                        class="px-3 py-1 bg-gray-50 text-gray-700  rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-colors">程鹏</span>
                      <span
                        class="px-3 py-1 bg-gray-50 text-gray-700  rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-colors">张海伟</span>
                      <span
                        class="px-3 py-1 bg-gray-50 text-gray-700  rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-colors">董国成</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="bg-white rounded-xl p-5 shadow-sm hover:shadow-md border border-gray-100 hover:border-blue-200 transition-all duration-300 group">
                <div class="flex items-start gap-3">
                  <div
                    class="flex-shrink-0 w-8 h-8 bg-[#102693] rounded-lg flex items-center justify-center text-white font-bold  shadow-sm">
                    3.3
                  </div>
                  <div class="flex-1">
                    <h4 class="font-bold text-[#102693] text-base mb-3 group-hover:text-blue-700 transition-colors">
                      气候环境多指标重建与机制</h4>
                    <div class="flex items-center flex-wrap gap-2">
                      <span class=" text-gray-500 font-medium">主持人：</span>
                      <span
                        class="px-3 py-1 bg-gray-50 text-gray-700  rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-colors">王欢业</span>
                      <span
                        class="px-3 py-1 bg-gray-50 text-gray-700  rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-colors">章泽科</span>
                      <span
                        class="px-3 py-1 bg-gray-50 text-gray-700  rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-colors">马小林</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 板块四 -->
        <div class="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          <button @click="toggleAccordion(4)"
            class="w-full px-6 py-4 bg-[#102693] text-white flex items-center justify-between hover:bg-blue-700 transition-all">
            <div class="flex items-center gap-3">
              <span class="text-xl font-bold">板块四</span>
              <span class="text-lg">新生代构造抬升与大陆风化</span>
            </div>
            <svg class="w-6 h-6 transform transition-transform duration-300"
              :class="{ 'rotate-180': activeAccordion === 4 }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          <div v-show="activeAccordion === 4" class="bg-gray-50 px-6 py-5 border-t border-gray-200">
            <div class="mb-5 pb-4 border-b-2 border-blue-100">
              <div class="flex items-start gap-2">
                <div class="flex items-center gap-2 mt-1">
                  <svg class="w-5 h-5 text-[#102693]" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z">
                    </path>
                  </svg>
                  <span class="text-gray-700 font-bold text-base">召集人：</span>
                </div>
                <div class="flex flex-wrap gap-2">
                  <span
                    class="px-3 py-1 bg-blue-50 text-gray-800  rounded-lg border border-blue-200 font-medium">杨一博</span>
                  <span
                    class="px-3 py-1 bg-blue-50 text-gray-800  rounded-lg border border-blue-200 font-medium">于兆杰</span>
                  <span
                    class="px-3 py-1 bg-blue-50 text-gray-800  rounded-lg border border-blue-200 font-medium">杨承帆</span>
                  <span
                    class="px-3 py-1 bg-blue-50 text-gray-800  rounded-lg border border-blue-200 font-medium">李石磊</span>
                  <span
                    class="px-3 py-1 bg-blue-50 text-gray-800  rounded-lg border border-blue-200 font-medium">吝祎勃</span>
                  <span
                    class="px-3 py-1 bg-blue-50 text-gray-800  rounded-lg border border-blue-200 font-medium">李乐</span>
                </div>
              </div>
            </div>
            <div class="space-y-3"></div>
            <div
              class="bg-white rounded-xl p-5 shadow-sm hover:shadow-md border border-gray-100 hover:border-blue-200 transition-all duration-300 group">
              <div class="flex items-start gap-3">
                <div
                  class="flex-shrink-0 w-8 h-8 bg-[#102693] rounded-lg flex items-center justify-center text-white font-bold  shadow-sm">
                  4.1
                </div>
                <div class="flex-1">
                  <h4 class="font-bold text-[#102693] text-base mb-3 group-hover:text-blue-700 transition-colors">
                    山脉抬升与侵蚀风化及气候互馈</h4>
                  <div class="flex items-center flex-wrap gap-2">
                    <span class=" text-gray-500 font-medium">召集人：</span>
                    <span
                      class="px-3 py-1 bg-gray-50 text-gray-700  rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-colors">杨一博</span>
                    <span
                      class="px-3 py-1 bg-gray-50 text-gray-700  rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-colors">田云涛</span>
                    <span
                      class="px-3 py-1 bg-gray-50 text-gray-700  rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-colors">杨江海</span>
                    <span
                      class="px-3 py-1 bg-gray-50 text-gray-700  rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-colors">聂军胜</span>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="bg-white rounded-xl p-5 shadow-sm hover:shadow-md border border-gray-100 hover:border-blue-200 transition-all duration-300 group">
              <div class="flex items-start gap-3">
                <div
                  class="flex-shrink-0 w-8 h-8 bg-[#102693] rounded-lg flex items-center justify-center text-white font-bold  shadow-sm">
                  4.2
                </div>
                <div class="flex-1">
                  <h4 class="font-bold text-[#102693] text-base mb-3 group-hover:text-blue-700 transition-colors">
                    从陆到海的硅酸盐风化连续体</h4>
                  <div class="flex items-center flex-wrap gap-2">
                    <span class=" text-gray-500 font-medium">召集人：</span>
                    <span
                      class="px-3 py-1 bg-gray-50 text-gray-700  rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-colors">杨承帆</span>
                    <span
                      class="px-3 py-1 bg-gray-50 text-gray-700  rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-colors">于兆杰</span>
                    <span
                      class="px-3 py-1 bg-gray-50 text-gray-700  rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-colors">罗敏</span>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="bg-white rounded-xl p-5 shadow-sm hover:shadow-md border border-gray-100 hover:border-blue-200 transition-all duration-300 group">
              <div class="flex items-start gap-3">
                <div
                  class="flex-shrink-0 w-8 h-8 bg-[#102693] rounded-lg flex items-center justify-center text-white font-bold  shadow-sm">
                  4.3
                </div>
                <div class="flex-1">
                  <h4 class="font-bold text-[#102693] text-base mb-3 group-hover:text-blue-700 transition-colors">
                    有机碳-硫化物-碳酸盐-硅酸盐的碳源汇效应</h4>
                  <div class="flex items-center flex-wrap gap-2">
                    <span class=" text-gray-500 font-medium">召集人：</span>
                    <span
                      class="px-3 py-1 bg-gray-50 text-gray-700  rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-colors">李石磊</span>
                    <span
                      class="px-3 py-1 bg-gray-50 text-gray-700  rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-colors">胡利民</span>
                    <span
                      class="px-3 py-1 bg-gray-50 text-gray-700  rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-colors">曾思博</span>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="bg-white rounded-xl p-5 shadow-sm hover:shadow-md border border-gray-100 hover:border-blue-200 transition-all duration-300 group">
              <div class="flex items-start gap-3">
                <div
                  class="flex-shrink-0 w-8 h-8 bg-[#102693] rounded-lg flex items-center justify-center text-white font-bold  shadow-sm">
                  4.4
                </div>
                <div class="flex-1">
                  <h4 class="font-bold text-[#102693] text-base mb-3 group-hover:text-blue-700 transition-colors">
                    新技术驱动下的数值模拟和沉积记录进展</h4>
                  <div class="flex items-center flex-wrap gap-2">
                    <span class=" text-gray-500 font-medium">召集人：</span>
                    <span
                      class="px-3 py-1 bg-gray-50 text-gray-700  rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-colors">李乐</span>
                    <span
                      class="px-3 py-1 bg-gray-50 text-gray-700  rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-colors">吝祎勃</span>
                    <span
                      class="px-3 py-1 bg-gray-50 text-gray-700  rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-colors">白江昊</span>
                    <span
                      class="px-3 py-1 bg-gray-50 text-gray-700  rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-colors">邓凯</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 板块五 -->
        <div class="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          <button @click="toggleAccordion(5)"
            class="w-full px-6 py-4 bg-[#102693] text-white flex items-center justify-between hover:bg-blue-700 transition-all">
            <div class="flex items-center gap-3">
              <span class="text-xl font-bold">板块五</span>
              <span class="text-lg">深时尺度风化研究</span>
            </div>
            <svg class="w-6 h-6 transform transition-transform duration-300"
              :class="{ 'rotate-180': activeAccordion === 5 }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          <div v-show="activeAccordion === 5" class="bg-gray-50 px-6 py-5 border-t border-gray-200">
            <div class="mb-5 pb-4 border-b-2 border-blue-100">
              <div class="flex items-start gap-2">
                <div class="flex items-center gap-2 mt-1">
                  <svg class="w-5 h-5 text-[#102693]" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z">
                    </path>
                  </svg>
                  <span class="text-gray-700 font-bold text-base">召集人：</span>
                </div>
                <div class="flex flex-wrap gap-2">
                  <span
                    class="px-3 py-1 bg-blue-50 text-gray-800  rounded-lg border border-blue-200 font-medium">黄康俊</span>
                  <span
                    class="px-3 py-1 bg-blue-50 text-gray-800  rounded-lg border border-blue-200 font-medium">沈俊</span>
                  <span
                    class="px-3 py-1 bg-blue-50 text-gray-800  rounded-lg border border-blue-200 font-medium">曹程</span>
                  <span
                    class="px-3 py-1 bg-blue-50 text-gray-800  rounded-lg border border-blue-200 font-medium">陈吉涛</span>
                </div>
              </div>
            </div>
            <div class="space-y-3">
              <div
                class="bg-white rounded-xl p-5 shadow-sm hover:shadow-md border border-gray-100 hover:border-blue-200 transition-all duration-300 group">
                <div class="flex items-start gap-3">
                  <div
                    class="flex-shrink-0 w-8 h-8 bg-[#102693] rounded-lg flex items-center justify-center text-white font-bold  shadow-sm">
                    5.1
                  </div>
                  <div class="flex-1">
                    <h4 class="font-bold text-[#102693] text-base mb-3 group-hover:text-blue-700 transition-colors">
                      非传统同位素示踪风化作用</h4>
                    <div class="flex items-center flex-wrap gap-2">
                      <span class=" text-gray-500 font-medium">主持人：</span>
                      <span
                        class="px-3 py-1 bg-gray-50 text-gray-700  rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-colors">陈天宇</span>
                      <span
                        class="px-3 py-1 bg-gray-50 text-gray-700  rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-colors">黄康俊</span>
                      <span
                        class="px-3 py-1 bg-gray-50 text-gray-700  rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-colors">马龙</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="bg-white rounded-xl p-5 shadow-sm hover:shadow-md border border-gray-100 hover:border-blue-200 transition-all duration-300 group">
                <div class="flex items-start gap-3">
                  <div
                    class="flex-shrink-0 w-8 h-8 bg-[#102693] rounded-lg flex items-center justify-center text-white font-bold  shadow-sm">
                    5.2
                  </div>
                  <div class="flex-1">
                    <h4 class="font-bold text-[#102693] text-base mb-3 group-hover:text-blue-700 transition-colors">
                      大陆风化与气候演变</h4>
                    <div class="flex items-center flex-wrap gap-2">
                      <span class=" text-gray-500 font-medium">主持人：</span>
                      <span
                        class="px-3 py-1 bg-gray-50 text-gray-700  rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-colors">郭庆军</span>
                      <span
                        class="px-3 py-1 bg-gray-50 text-gray-700  rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-colors">王相力</span>
                      <span
                        class="px-3 py-1 bg-gray-50 text-gray-700  rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-colors">陈吉涛</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="bg-white rounded-xl p-5 shadow-sm hover:shadow-md border border-gray-100 hover:border-blue-200 transition-all duration-300 group">
                <div class="flex items-start gap-3">
                  <div
                    class="flex-shrink-0 w-8 h-8 bg-[#102693] rounded-lg flex items-center justify-center text-white font-bold  shadow-sm">
                    5.3
                  </div>
                  <div class="flex-1">
                    <h4 class="font-bold text-[#102693] text-base mb-3 group-hover:text-blue-700 transition-colors">
                      深部碳循环的环境气候效应</h4>
                    <div class="flex items-center flex-wrap gap-2">
                      <span class=" text-gray-500 font-medium">主持人：</span>
                      <span
                        class="px-3 py-1 bg-gray-50 text-gray-700  rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-colors">沈俊</span>
                      <span
                        class="px-3 py-1 bg-gray-50 text-gray-700  rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-colors">王水炯</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="bg-white rounded-xl p-5 shadow-sm hover:shadow-md border border-gray-100 hover:border-blue-200 transition-all duration-300 group">
                <div class="flex items-start gap-3">
                  <div
                    class="flex-shrink-0 w-8 h-8 bg-[#102693] rounded-lg flex items-center justify-center text-white font-bold  shadow-sm">
                    5.4
                  </div>
                  <div class="flex-1">
                    <h4 class="font-bold text-[#102693] text-base mb-3 group-hover:text-blue-700 transition-colors">
                      岩溶/碳酸盐风化与碳循环</h4>
                    <div class="flex items-center flex-wrap gap-2">
                      <span class=" text-gray-500 font-medium">主持人：</span>
                      <span
                        class="px-3 py-1 bg-gray-50 text-gray-700  rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-colors">白晓永</span>
                      <span
                        class="px-3 py-1 bg-gray-50 text-gray-700  rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-colors">曹程</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="bg-white rounded-xl p-5 shadow-sm hover:shadow-md border border-gray-100 hover:border-blue-200 transition-all duration-300 group">
                <div class="flex items-start gap-3">
                  <div
                    class="flex-shrink-0 w-8 h-8 bg-[#102693] rounded-lg flex items-center justify-center text-white font-bold  shadow-sm">
                    5.5
                  </div>
                  <div class="flex-1">
                    <h4 class="font-bold text-[#102693] text-base mb-3 group-hover:text-blue-700 transition-colors">
                      化石有机碳风化及其生物地球化学循环</h4>
                    <div class="flex items-center flex-wrap gap-2">
                      <span class=" text-gray-500 font-medium">主持人：</span>
                      <span
                        class="px-3 py-1 bg-gray-50 text-gray-700  rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-colors">沈冰</span>
                      <span
                        class="px-3 py-1 bg-gray-50 text-gray-700  rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-colors">罗根明</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="bg-white rounded-xl p-5 shadow-sm hover:shadow-md border border-gray-100 hover:border-blue-200 transition-all duration-300 group">
                <div class="flex items-start gap-3">
                  <div
                    class="flex-shrink-0 w-8 h-8 bg-[#102693] rounded-lg flex items-center justify-center text-white font-bold  shadow-sm">
                    5.6
                  </div>
                  <div class="flex-1">
                    <h4 class="font-bold text-[#102693] text-base mb-3 group-hover:text-blue-700 transition-colors">
                      深时尺度风化模型和大数据</h4>
                    <div class="flex items-center flex-wrap gap-2">
                      <span class=" text-gray-500 font-medium">主持人：</span>
                      <span
                        class="px-3 py-1 bg-gray-50 text-gray-700  rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-colors">李高军</span>
                      <span
                        class="px-3 py-1 bg-gray-50 text-gray-700  rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-colors">刘永岗</span>
                      <span
                        class="px-3 py-1 bg-gray-50 text-gray-700  rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-colors">刘鹤</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 板块六 -->
        <div class="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          <button @click="toggleAccordion(6)"
            class="w-full px-6 py-4 bg-[#102693] text-white flex items-center justify-between hover:bg-blue-700 transition-all">
            <div class="flex items-center gap-3">
              <span class="text-xl font-bold">板块六</span>
              <span class="text-lg">风化与地球和行星系统演化</span>
            </div>
            <svg class="w-6 h-6 transform transition-transform duration-300"
              :class="{ 'rotate-180': activeAccordion === 6 }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          <div v-show="activeAccordion === 6" class="bg-gray-50 px-6 py-5 border-t border-gray-200">
            <div class="mb-5 pb-4 border-b-2 border-blue-100">
              <div class="flex items-start gap-2">
                <div class="flex items-center gap-2 mt-1">
                  <svg class="w-5 h-5 text-[#102693]" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z">
                    </path>
                  </svg>
                  <span class="text-gray-700 font-bold text-base">召集人：</span>
                </div>
                <div class="flex flex-wrap gap-2">
                  <span
                    class="px-3 py-1 bg-blue-50 text-gray-800  rounded-lg border border-blue-200 font-medium">田恒次</span>
                  <span
                    class="px-3 py-1 bg-blue-50 text-gray-800  rounded-lg border border-blue-200 font-medium">王枫</span>
                  <span
                    class="px-3 py-1 bg-blue-50 text-gray-800  rounded-lg border border-blue-200 font-medium">魏广祎</span>
                  <span
                    class="px-3 py-1 bg-blue-50 text-gray-800  rounded-lg border border-blue-200 font-medium">贺茂勇</span>
                </div>
              </div>
            </div>
            <div class="space-y-3">
              <div
                class="bg-white rounded-xl p-5 shadow-sm hover:shadow-md border border-gray-100 hover:border-blue-200 transition-all duration-300 group">
                <div class="flex items-start gap-3">
                  <div
                    class="flex-shrink-0 w-8 h-8 bg-[#102693] rounded-lg flex items-center justify-center text-white font-bold  shadow-sm">
                    6.1
                  </div>
                  <div class="flex-1">
                    <h4 class="font-bold text-[#102693] text-base mb-3 group-hover:text-blue-700 transition-colors">
                      月球和行星表面风化</h4>
                    <div class="flex items-center flex-wrap gap-2">
                      <span class=" text-gray-500 font-medium">主持人：</span>
                      <span
                        class="px-3 py-1 bg-gray-50 text-gray-700  rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-colors">李阳</span>
                      <span
                        class="px-3 py-1 bg-gray-50 text-gray-700  rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-colors">许英奎</span>
                      <span
                        class="px-3 py-1 bg-gray-50 text-gray-700  rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-colors">刘嘉成</span>
                      <span
                        class="px-3 py-1 bg-gray-50 text-gray-700  rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-colors">肖智勇</span>
                      <span
                        class="px-3 py-1 bg-gray-50 text-gray-700  rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-colors">田恒次</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="bg-white rounded-xl p-5 shadow-sm hover:shadow-md border border-gray-100 hover:border-blue-200 transition-all duration-300 group">
                <div class="flex items-start gap-3">
                  <div
                    class="flex-shrink-0 w-8 h-8 bg-[#102693] rounded-lg flex items-center justify-center text-white font-bold  shadow-sm">
                    6.2
                  </div>
                  <div class="flex-1">
                    <h4 class="font-bold text-[#102693] text-base mb-3 group-hover:text-blue-700 transition-colors">
                      地球早期与深部风化过程</h4>
                    <div class="flex items-center flex-wrap gap-2">
                      <span class=" text-gray-500 font-medium">主持人：</span>
                      <span
                        class="px-3 py-1 bg-gray-50 text-gray-700  rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-colors">王枫</span>
                      <span
                        class="px-3 py-1 bg-gray-50 text-gray-700  rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-colors">陈欣阳</span>
                      <span
                        class="px-3 py-1 bg-gray-50 text-gray-700  rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-colors">邢恺晨</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="bg-white rounded-xl p-5 shadow-sm hover:shadow-md border border-gray-100 hover:border-blue-200 transition-all duration-300 group">
                <div class="flex items-start gap-3">
                  <div
                    class="flex-shrink-0 w-8 h-8 bg-[#102693] rounded-lg flex items-center justify-center text-white font-bold  shadow-sm">
                    6.3
                  </div>
                  <div class="flex-1">
                    <h4 class="font-bold text-[#102693] text-base mb-3 group-hover:text-blue-700 transition-colors">
                      生物风化与关键元素循环</h4>
                    <div class="flex items-center flex-wrap gap-2">
                      <span class=" text-gray-500 font-medium">主持人：</span>
                      <span
                        class="px-3 py-1 bg-gray-50 text-gray-700  rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-colors">魏广祎</span>
                      <span
                        class="px-3 py-1 bg-gray-50 text-gray-700  rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-colors">李子波</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 板块七 -->
        <div class="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          <button @click="toggleAccordion(7)"
            class="w-full px-6 py-4 bg-[#102693] text-white flex items-center justify-between hover:bg-blue-700 transition-all">
            <div class="flex items-center gap-3">
              <span class="text-xl font-bold">板块七</span>
              <span class="text-lg">风化与灾害、资源、环境</span>
            </div>
            <svg class="w-6 h-6 transform transition-transform duration-300"
              :class="{ 'rotate-180': activeAccordion === 7 }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          <div v-show="activeAccordion === 7" class="bg-gray-50 px-6 py-5 border-t border-gray-200">
            <div class="mb-5 pb-4 border-b-2 border-blue-100">
              <div class="flex items-start gap-2">
                <div class="flex items-center gap-2 mt-1">
                  <svg class="w-5 h-5 text-[#102693]" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z">
                    </path>
                  </svg>
                  <span class="text-gray-700 font-bold text-base">召集人：</span>
                </div>
                <div class="flex flex-wrap gap-2">
                  <span
                    class="px-3 py-1 bg-blue-50 text-gray-800  rounded-lg border border-blue-200 font-medium">贺茂勇</span>
                  <span
                    class="px-3 py-1 bg-blue-50 text-gray-800  rounded-lg border border-blue-200 font-medium">张会平</span>
                  <span
                    class="px-3 py-1 bg-blue-50 text-gray-800  rounded-lg border border-blue-200 font-medium">韩文霞</span>
                  <span
                    class="px-3 py-1 bg-blue-50 text-gray-800  rounded-lg border border-blue-200 font-medium">侯可军</span>
                </div>
              </div>
            </div>
            <div class="space-y-3">
              <div
                class="bg-white rounded-xl p-5 shadow-sm hover:shadow-md border border-gray-100 hover:border-blue-200 transition-all duration-300 group">
                <div class="flex items-start gap-3">
                  <div
                    class="flex-shrink-0 w-8 h-8 bg-[#102693] rounded-lg flex items-center justify-center text-white font-bold  shadow-sm">
                    7.1
                  </div>
                  <div class="flex-1">
                    <h4 class="font-bold text-[#102693] text-base mb-3 group-hover:text-blue-700 transition-colors">
                      风化与环境</h4>
                    <div class="flex items-center flex-wrap gap-2">
                      <span class=" text-gray-500 font-medium">主持人：</span>
                      <span
                        class="px-3 py-1 bg-gray-50 text-gray-700  rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-colors">刘承帅</span>
                      <span
                        class="px-3 py-1 bg-gray-50 text-gray-700  rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-colors">闫俊华</span>
                      <span
                        class="px-3 py-1 bg-gray-50 text-gray-700  rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-colors">韩文霞</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="bg-white rounded-xl p-5 shadow-sm hover:shadow-md border border-gray-100 hover:border-blue-200 transition-all duration-300 group">
                <div class="flex items-start gap-3">
                  <div
                    class="flex-shrink-0 w-8 h-8 bg-[#102693] rounded-lg flex items-center justify-center text-white font-bold  shadow-sm">
                    7.2
                  </div>
                  <div class="flex-1">
                    <h4 class="font-bold text-[#102693] text-base mb-3 group-hover:text-blue-700 transition-colors">
                      风化与灾害</h4>
                    <div class="flex items-center flex-wrap gap-2">
                      <span class=" text-gray-500 font-medium">主持人：</span>
                      <span
                        class="px-3 py-1 bg-gray-50 text-gray-700  rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-colors">张会平</span>
                      <span
                        class="px-3 py-1 bg-gray-50 text-gray-700  rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-colors">侯可军</span>
                      <span
                        class="px-3 py-1 bg-gray-50 text-gray-700  rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-colors">卢银</span>
                      <span
                        class="px-3 py-1 bg-gray-50 text-gray-700  rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-colors">唐亚明</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="bg-white rounded-xl p-5 shadow-sm hover:shadow-md border border-gray-100 hover:border-blue-200 transition-all duration-300 group">
                <div class="flex items-start gap-3">
                  <div
                    class="flex-shrink-0 w-8 h-8 bg-[#102693] rounded-lg flex items-center justify-center text-white font-bold  shadow-sm">
                    7.3
                  </div>
                  <div class="flex-1">
                    <h4 class="font-bold text-[#102693] text-base mb-3 group-hover:text-blue-700 transition-colors">
                      风化与资源成矿</h4>
                    <div class="flex items-center flex-wrap gap-2">
                      <span class=" text-gray-500 font-medium">主持人：</span>
                      <span
                        class="px-3 py-1 bg-gray-50 text-gray-700  rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-colors">温汉捷</span>
                      <span
                        class="px-3 py-1 bg-gray-50 text-gray-700  rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-colors">张西营</span>
                      <span
                        class="px-3 py-1 bg-gray-50 text-gray-700  rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-colors">王春连</span>
                      <span
                        class="px-3 py-1 bg-gray-50 text-gray-700  rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-colors">贺茂勇</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 板块八 -->
        <div class="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          <button @click="toggleAccordion(8)"
            class="w-full px-6 py-4 bg-[#102693] text-white flex items-center justify-between hover:bg-blue-700 transition-all">
            <div class="flex items-center gap-3">
              <span class="text-xl font-bold">板块八</span>
              <span class="text-lg">增强岩石风化固碳</span>
            </div>
            <svg class="w-6 h-6 transform transition-transform duration-300"
              :class="{ 'rotate-180': activeAccordion === 8 }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          <div v-show="activeAccordion === 8" class="bg-gray-50 px-6 py-5 border-t border-gray-200">
            <div class="mb-5 pb-4 border-b-2 border-blue-100">
              <div class="flex items-start gap-2">
                <div class="flex items-center gap-2 mt-1">
                  <svg class="w-5 h-5 text-[#102693]" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z">
                    </path>
                  </svg>
                  <span class="text-gray-700 font-bold text-base">召集人：</span>
                </div>
                <div class="flex flex-wrap gap-2">
                  <span
                    class="px-3 py-1 bg-blue-50 text-gray-800  rounded-lg border border-blue-200 font-medium">刘媛媛</span>
                  <span
                    class="px-3 py-1 bg-blue-50 text-gray-800  rounded-lg border border-blue-200 font-medium">李真</span>
                  <span
                    class="px-3 py-1 bg-blue-50 text-gray-800  rounded-lg border border-blue-200 font-medium">李子波</span>
                  <span
                    class="px-3 py-1 bg-blue-50 text-gray-800  rounded-lg border border-blue-200 font-medium">陈旸</span>
                </div>
              </div>
            </div>
            <!-- 专题讨论列表 -->
            <div class="space-y-3">
              <div
                class="bg-white rounded-xl p-5 shadow-sm hover:shadow-md border border-gray-100 hover:border-blue-200 transition-all duration-300 group">
                <div class="flex items-start gap-3">
                  <div
                    class="flex-shrink-0 w-8 h-8 bg-[#102693] rounded-lg flex items-center justify-center text-white font-bold  shadow-sm">
                    8.1
                  </div>
                  <div class="flex-1">
                    <h4 class="font-bold text-[#102693] text-base mb-3 group-hover:text-blue-700 transition-colors">
                      增强岩石风化技术与MRV体系</h4>
                    <div class="flex items-center flex-wrap gap-2">
                      <span class=" text-gray-500 font-medium">主持人：</span>
                      <span
                        class="px-3 py-1 bg-gray-50 text-gray-700  rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-colors">李高军</span>
                      <span
                        class="px-3 py-1 bg-gray-50 text-gray-700  rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-colors">赵良</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="bg-white rounded-xl p-5 shadow-sm hover:shadow-md border border-gray-100 hover:border-blue-200 transition-all duration-300 group">
                <div class="flex items-start gap-3">
                  <div
                    class="flex-shrink-0 w-8 h-8 bg-[#102693] rounded-lg flex items-center justify-center text-white font-bold  shadow-sm">
                    8.2
                  </div>
                  <div class="flex-1">
                    <h4 class="font-bold text-[#102693] text-base mb-3 group-hover:text-blue-700 transition-colors">
                      增强岩石风化国际前沿</h4>
                    <div class="flex items-center flex-wrap gap-2">
                      <span class=" text-gray-500 font-medium">主持人：</span>
                      <span
                        class="px-3 py-1 bg-gray-50 text-gray-700  rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-colors">Patrick
                        J. Frings</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="w-full flex flex-col justify-center py-8 space-y-3">
        <span class="text-lg text-[#102693] font-semibold">
          本次会议将从以上议题中评选出当前大陆风化领域的10大重点科学问题，并在专辑中给予优先介绍。
        </span>
        <span class="text-lg text-[#102693] font-semibold">
          如对专辑投稿感兴趣，请联系我们。
        </span>
        <span class="text-lg text-[#102693] font-semibold">
          张飞，159 9127 2535
        </span>
        <span class="text-lg text-[#102693] font-semibold">
          邮箱：zhangfei@ieecas.cn
        </span>
        <span class="text-lg text-[#102693] font-semibold">
          汪进，132 5998 1015
        </span>
        <span class="text-lg text-[#102693] font-semibold">
          邮箱：wangjin09@ieecas.cn
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.collapse-title {
  width: 100%;
  padding: 1rem;
  margin: 0.5rem;
  padding-inline-end: 0.5rem
}
</style>

<script>
export default {
  data() {
    return {
      activeAccordion: null,
    };
  },
  methods: {
    toggleAccordion(index) {
      // 如果点击的是当前已展开的板块,则收起；否则展开新板块
      this.activeAccordion = this.activeAccordion === index ? null : index;
    },
  },
};
</script>
