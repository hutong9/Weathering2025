<template>
  <div class="w-full">
    <!-- banner开始 -->
    <img class="w-full" src="/img/banner_index.jpg" alt="2025第二届“大陆风化前沿学术讨论会" />
    <!-- 轮播图、简介开始 -->

    <div>
      <app-countdown />
    </div>

    <div class="container mx-auto sm:py-4 pb-4 animate__animated animate__bounceInUp">
      <div class="md:flex gap-4">

        <div class="grid grid-cols-2 sm:grid-cols-4 md:flex gap-0 sm:gap-4 container mx-auto justify-center ">

          <!-- <a href="./registered">
            <div class="card md:w-56 md:h-40 m-2 md:m-0 bg-secondary text-primary-content hover:bg-purple-900"
              data-aos="fade-up">
              <div class="card-body">
                <h2 class="card-title">我要注册</h2>
                <p>优惠截止日期：2024年5月10日</p>
              </div>
            </div>
          </a> -->

          <a href="/abstract">
            <div class="card md:w-72 md:h-40 m-2 md:m-0 relative" :style="{
              backgroundImage: `url(${backgroundImageUrl2})`, backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center'
            }" data-aos="fade-up">
              <div class="card-body md:py-20">
                <h2 class="card-title text-white">我要报告</h2>
                <p class="text-white">截止日期：2025年10月30日</p>
              </div>
            </div>
          </a>




          <a href="/registered">
            <div class="card md:w-72 md:h-40 m-2 md:m-0 relative " :style="{
              backgroundImage: `url(${backgroundImageUrl})`, backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center'
            }" data-aos="fade-up">
              <div class="card-body md:py-20">
                <h2 class="card-title text-white">我要注册</h2>
                <p class="text-white">报到日期：2025年11月07日</p>
              </div>
            </div>
          </a>



          <a href="/hotel">
            <div class="card md:w-72 md:h-40 m-2 md:m-0 relative" :style="{
              backgroundImage: `url(${backgroundImageUrl3})`, backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center'
            }" data-aos="fade-up">
              <div class="card-body md:py-20">
                <h2 class="card-title text-white">酒店预订</h2>
                <p class="text-white">截止日期：2025年10月31日</p>
              </div>
            </div>
          </a>

          <a href="/schedule">
            <div class="card md:w-72 md:h-40 m-2 md:m-0 relative" :style="{
              backgroundImage: `url(${backgroundImageUrl4})`, backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center'
            }" data-aos="fade-up">
              <div class="card-body md:py-20">
                <h2 class="card-title text-white">会议日程</h2>
                <p class="text-white">公布日期：2025年11月03日</p>
              </div>
            </div>
          </a>




          <!-- <a href="/abstract">
            <div class="card md:w-56 md:h-40 m-2 md:m-0 bg-primary text-primary-content hover:bg-green-800"
              data-aos="fade-up">
              <div class="card-body">
                <h2 class="card-title">我要投稿</h2>
                <p>投稿截止日期：2024年5月10日</p>
              </div>
            </div>
          </a>

          <a href="/hotel">
            <div class="card md:w-56 md:h-40 m-2 md:m-0 bg-green-600 text-primary-content hover:bg-error"
              data-aos="fade-up">
              <div class="card-body">
                <h2 class="card-title">酒店预定</h2>
                <p>预定截止日期：2024年5月10日</p>
              </div>
            </div>
          </a>

          <a href="./schedule">
            <div class="card md:w-56 md:h-40 m-2 md:m-0 bg-error text-primary-content hover:bg-primary">
              <div class="card-body">
                <h2 class="card-title">会议日程</h2>
                <p>现场报到日期：2024年5月10日</p>
              </div>
            </div>
          </a> -->
        </div>



      </div>

    </div>

    <!-- 会议简介开始 -->
    <div class="bg-[#102693] ">
      <div class="container mx-auto md:py-10 w-full p-6">
        <h2 class="text-3xl font-bold text-white text-center m-4 sm:m-10 animate__animated animate__bounceInUp">会议简介
        </h2>


        <div class="container mx-auto">
          <p class="text-white animate__animated animate__bounceInUp text-2xl">
            　　“大陆风化前沿学术讨论会”由中国矿物岩石地球化学学会地表与生物地球化学专业委员会发起，旨在<b>针对大陆风化领域的前沿科学问题开展深入讨论，</b>推动多学科交叉地球系统科学研究，促进重大科学问题的凝练与攻关。该会议每两年举办一次，首届会议已由南京大学表生地球化学教育部重点实验室于2023年在海南保亭成功举办。会议涵盖了风化研究方法指标、风化机制多时-空尺度研究、风化与行星系统演化、风化与灾害、资源、环境等方面的50余个话题，来自国内外40余个科研机构的180余名代表参会。
          </p>

          <p class="text-white animate__animated animate__bounceInUp text-2xl">
            　　经由会议决定，由中国科学院地球环境研究所组织召开第二届“大陆风化前沿学术讨论会”，将于<b>2025年11月7-10日</b>在<b>陕西省延安市</b>举行，深度讨论大陆风化前沿科学问题。
          </p>
        </div>
      </div>
    </div>



    <!-- 会议主题 -->


    <!-- 会议简介开始 -->
    <div class=" ">
      <div class="container mx-auto md:py-10 w-full p-6">
        <h2 class="text-3xl font-bold  text-center m-4 sm:m-10 animate__animated animate__bounceInUp">会议背景</h2>
        <div class="container mx-auto">
          <p class="animate__animated animate__bounceInUp">
            　　大陆风化通过吸收和释放CO<sub>2</sub>，在维持地球宜居气候和调控地球历史演化中起到重要作用。富挥发分的风化产物影响俯冲和岩浆作用等固体地球过程，在大陆地壳的生长和演化过程中发挥了重要作用，而大陆地壳不但支撑了陆生生态系统，大陆风化还提供了土壤和松散沉积物，成为众多生命的载体；风化作用还是影响水圈化学组成最重要的要素之一，进而影响了生命演进过程中的生化策略。因此，风化是海陆生态系统多种关键营养元素的重要来源，进而控制有机碳埋藏，影响大气氧气的积累，为动物演化提供先决条件;更重要的是，风化作用还与当前人类的生存直接相关。驱动人类出现的新生代变冷气候背景可能与风化CO<sub>2</sub>消耗有关；风化作用通过破坏造岩矿物而释放元素,深刻影响地球元素循环，参与人类赖以生存的诸多内生和表生矿产资源的形成，并与土壤和水体中众多金属污染密切相关;风化作用是孕育滑坡泥石流自然灾害前提条件之一,并且影响人造工程体的使用寿命与遗存。在全球变暖背景下，人工加强风化CO<sub>2</sub>矿化技术可能是人类实现碳中和的必要路径。
          </p>

          <p class=" animate__animated animate__bounceInUp">
            　　风化作用与宜居要素的紧密联系在本质上与地球圈层相互作用有关。生命的出现是圈层相互作用的结果，生命的演进适应地球圈层系统演化，生命本身也参与圈层相互作用。同时，大陆风化是岩石/矿物在水、气、生作用下的破碎分解过程，因而成圈层相互作用的重要纽带，记录了圈层相互作用的历史。
          </p>

          <p class=" animate__animated animate__bounceInUp">
            　　多圈层相互作用下的风化研究必然涉及多学科。在很长时间内，中国风化研究群体分散在各个专门的学科群体中，包括自然地理学、土壤学、矿物学、构造地貌学、沉积与古环境学、地表地球化学、古海洋学、土壤与水环境科学等。但是，风化研究更需要学科交叉，需要地球系统科学思维路径。本质上,风化研究气候、大气成分、构造、地貌、岩性、生物等要素与风化过程之间相互作用与反馈的机理和过程，是实践地球系统科学的重要切入点。
          </p>


          <p class=" animate__animated animate__bounceInUp">
            　　近年来，通过第二次青藏高原科考、基金委重大项目、国家重点研发项目等大型项目，中国风化研究群体已经具备相当规模，人才储备深厚，有望成为中国的优势研究领域。适时召开的大陆风化前沿讨论会(通过本专辑)，可以进一步凝聚大陆风化研究队伍、推动多学科交叉地球系统科学研究、促进重大科学问题的凝练与攻关。因此，在中国矿物岩石地球化学协会地表与生物地球化学专业委员会的支持下，有针对性地发起了本次讨论会(专辑)，并希望发展成为系列会议(专辑)。
          </p>

          <p class=" animate__animated animate__bounceInUp">
            　　本次会议的议题，综合考虑国际上大陆风化领域的前沿性和引领性，整体上分为以下板块，分别如下:
          </p>

          <br>

          <app-theme />






        </div>
      </div>
    </div>


    <!-- 会议形式 -->

    <!-- 会议形式开始 -->
    <div class=" ">
      <div class="container mx-auto md:py-10 w-full p-6">
        <h2 class="text-3xl font-bold  text-center m-4 sm:m-10 animate__animated animate__bounceInUp">会议形式
        </h2>
        <div class="container mx-auto">
          <p class="animate__animated animate__bounceInUp">
            本次会议包括：学术讨论和野外考察两个环节。
          </p>

          <!-- 学术讨论部分 -->
          <div class="animate__animated animate__bounceInUp mt-6">
            <h3 class="text-xl font-bold mb-4">1、学术讨论（11月8-9日）</h3>
            <div class="ml-4">
              <p class="font-semibold mb-2">会议讨论形式：</p>
              <div class="ml-4 space-y-3">
                <p>
                  <span
                    class="font-medium">1）</span>本次会议旨在深度讨论大陆风化前沿科学问题，不鼓励已有成果展示，报告人做不超过十分钟的背景介绍，着重介绍研究问题的重要性、阐述科学问题的本质、面临的研究难点和未来可能的解决方案。
                </p>
                <p>
                  <span class="font-medium">2）</span>本次会议提倡学术民主，鼓励不同学术观点的碰撞和交流，希望与会者在宽松、活泼、和谐的研讨氛围中畅所欲言、各抒己见。
                </p>
              </div>
            </div>
          </div>

          <!-- 野外考察部分 -->
          <div class="animate__animated animate__bounceInUp mt-8">
            <h3 class="text-xl font-bold mb-4">2、野外考察（11月10日）</h3>
            <div class="ml-4 space-y-3">
              <div class="bg-gray-50 p-4 rounded-lg">
                <p class="font-semibold mb-3">行程安排：</p>
                <div class="space-y-2 ml-2">
                  <p class="flex items-start">
                    <span class="font-medium mr-2">08:30</span>
                    <span>从延安会议酒店出发，预计10:30抵达洛川</span>
                  </p>
                  <p class="flex items-start">
                    <span class="font-medium mr-2">10:30-14:00</span>
                    <span>考察路线：洛川黑木沟黄土 → 古土壤经典剖面 → 参观科学家精神教育基地展厅 → 陕西黄土高原地球关键带国家野外科学观测研究站 → 考察镇站之宝野外现场</span>
                  </p>
                  <p class="flex items-start">
                    <span class="font-medium mr-2">14:00</span>
                    <span>从洛川返回延安，预计16:00抵达会议酒店</span>
                  </p>
                </div>
              </div>

              <div class="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4">
                <p class="font-bold text-blue-900">
                  ⚠️ 重要提醒：如确认参加野外考察环节，请务必提前扫描下方二维码进行登记！
                </p>
                <p class="mt-2 text-sm text-gray-600">信息收集二维码</p>
                <div class="flex justify-center">
                  <img src="/img/640.png" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>









    <!-- 重要日期 -->
    <!-- <app-date /> -->
    <br>
    <app-news />
    <!-- <sponsor /> -->




  </div>
</template>

<script setup>

import { ref } from 'vue';

const backgroundImageUrl = ref('/img/002.png');
const backgroundImageUrl2 = ref('/img/003.png');
const backgroundImageUrl3 = ref('/img/004.png');
const backgroundImageUrl4 = ref('/img/005.png');

</script>

<style scoped>
p {
  font-size: 16px;
  line-height: 30px;
  /* text-align: justify;
  padding: 10px 0; */

}

.text_p {
  line-height: 16px;
}

.container {
  width: 100%;
  padding-right: 0.5rem;
  padding-left: 0.5rem;
}

.card-body {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  gap: 0rem;
  justify-content: center;
  align-items: center;
  height: 100%;
  text-align: center;
}

.card {
  min-height: 10rem;
  background-color: #f3f4f6;
}

@media (min-width: 768px) {
  .md\:h-40 {
    height: 10rem;
  }
}
</style>
