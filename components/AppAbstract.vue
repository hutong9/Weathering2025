<!--
 * @Author: hutong9 470048408@qq.com
 * @Date: 2024-03-14 11:04:17
 * @LastEditors: HuTong 470048408@qq.com
 * @LastEditTime: 2025-08-13 17:39:38
 * @FilePath: \Weathering2025\components\AppAbstract.vue
 * @Description: 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
-->
<template>
  <div class="col-span-9 shadow-lg">
    <div class="">
      <!-- 主体左侧 -->
      <button class="flex items-center justify-start btn btn-block bg-[#102693] text-white text-2xl hover:bg-blue-600">
        <span class="mr-2">摘要征集</span>
      </button>
    </div>
    <div class="p-4 sm:p-10">
      <p>
        <b>要求：</b>正文 5 号宋体，1.5 倍行距，不可插入图片，如有必要可插入一个表格，正文（包括表在内）不超过 1000 字。
      </p>
      <p><b>注意：</b>摘要请参考摘要模板</p>
      <p><b>方式：</b>请登录 <a
          href="https://weathering.meeting666.com/UserCentral/Index/Login">https://weathering.meeting666.com/UserCentral/Index/Login</a>
        上传“摘要”。</p>
      <p><b>温馨提示：</b>请参考附件摘要模板。摘要以提供论文的内容梗概为目的，句式力求 简明扼要、慎用长句。摘要结构建议包括：研究目的、研究方法、主要结果和结
        论等（内容要具体明确，勿使用空洞的语句）。摘要不能是结论的简单重复，尽
        量不要使用变量符号、公式、参考文献，不宜用缩略词。
      </p>
      <br />

      <div class="text-center p-4">
        <button class="btn btn-primary m-4 text-xl">
          <a href="/摘要模板.docx" download="/摘要模板.docx">模板下载</a></button><br />
        <button class="btn btn-secondary text-xl">
          <a href="http://weathering.meeting666.com/UserCentral/Index/Login">摘要提交</a>
        </button>
      </div>
    </div>

    <div class="">
      <!-- 主体左侧 -->
      <button class="flex items-center justify-start btn btn-block bg-[#102693] text-white text-2xl hover:bg-blue-600">
        <span class="mr-2">《地球化学》征稿启事</span>
      </button>
    </div>

    <div class="p-4 sm:p-10">
      <p>
        <b>征稿范围：</b>2025第二届“大陆风化前沿学术讨论会” 会议论文
      </p>
      <p><b>投稿要求及注意事项：</b></p>

      <h3 class="text-lg font-semibold mt-4 mb-2">投稿方式</h3>
      <p>在线投稿。</p>

      <h3 class="text-lg font-semibold mt-4 mb-2">作者信息</h3>
      <p>作者首次注册时应提供完善个人信息，包括手机号码、E-mail、QQ号码、邮编、地址等，同时提供第一作者简介，含姓名、性别、出生年月、职称、专业和研究方向等。</p>

      <h3 class="text-lg font-semibold mt-4 mb-2">内容要求</h3>
      <p>
        来稿要求论点明确、数据可靠、文字精炼。科研成果一般不超过10000字，研究简报不超过4000字。需附200-400字的中文摘要和500词左右的英文摘要，以及3-8个关键词。还应附作者单位的译名、作者姓名的汉语拼音和论文的分类号。文题、关键词、表题和图名都要有英文内容。
      </p>

      <h3 class="text-lg font-semibold mt-4 mb-2">格式要求</h3>
      <p>来稿须提供Microsoft Word文档。字母大小写、人名、地名全文应统一。图件需同时提供CorelDraw文档（cdr格式）和通用图件文档（tif或jpg格式），且要清晰、层次分明。</p>

      <h3 class="text-lg font-semibold mt-4 mb-2">数据要求</h3>
      <p>测试数据要注明测试者、测试方法、条件、精度及误差范围等，同位素地球化学和稀土元素地球化学论文要附原始数据。</p>

      <h3 class="text-lg font-semibold mt-4 mb-2">标题结构</h3>
      <p>文章标题结构层次一般分为二级或三级，各级标题用1、2、3……，1.1、1.2、1.3……表示，依次类推，顶格书写。文章题名应恰当、简明、醒目，一般不超过20字。</p>

      <h3 class="text-lg font-semibold mt-4 mb-2">参考文献</h3>
      <p>凡引用他人资料必须在正文和文后列出参考文献，前后对应。文后参考文献应是作者直接阅读过的、主要的、公开出版物上的文献，非公开出版物作脚注处理。参考文献著录格式采用（著者，出版年）制，各著录项按GB/T
        7714-2005和CAJ-CD B/T 1-2005的规定列出。</p>

      <h3 class="text-lg font-semibold mt-4 mb-2">审稿要求</h3>
      <p><b>审稿周期：</b>编辑部收到来稿后在3个月内向作者反馈稿件评审意见，3个月未接到反馈意见者，可将该稿改投他刊，但改投后需告知本刊编辑部。</p>
      <p><b>审稿流程：</b>稿件会按投稿栏目分配给责任编辑初审，初审后提交主任复审，复审通过后提交主编终审。</p>
      <p>
        <b>版权与修改：</b>依照《著作权法》，本刊有权对来稿进行文字修改、删节，对内容的修改需征得作者同意。稿件一经录用，所有版本版权即转让给本刊，作者不得再改投他刊。稿件刊出后，本刊将向作者收取发表费，并一次性付给作者印刷版、光盘版和网络版等版本的稿酬，同时赠送当期本刊1册。
      </p>



      <br />
      <h3 class="text-center text-xl p-4"><b>《地球环境学报》简介</b></h3>
      <p>
        　　《地球化学》杂志自1972年创刊以来，凭借国家新闻出版署的批准，一直由中国科学院主管，并得到中国科学院广州地球化学研究所和中国矿物岩石地球化学学会的共同主办。作为学术双月刊，其在国内刊号CN为44-1398/P，国际刊号ISSN为0379-1726。
      </p>

      <p>
        　　本杂志始终秉持积极探索、勇于创新的精神，致力于在地质领域交流最新的研究成果和学术进展。我们的报道重点涵盖近代地球化学及其主要分支学科，包括同位素地球化学、同位素地质年代学、矿床地球化学、有机地球化学、元素地球化学、环境地球化学、宇宙化学、海洋地球化学、实验地球化学、第四纪地球化学、构造地球化学及岩矿测试等。我们不仅发表具有创造性和综合性的科研成果，还提供研究简报、书刊简介、会议简讯，以及最新的地质科技信息研究动态和问题讨论等内容。
      </p>

      <p>　　通过这些丰富多样的栏目，《地球化学》杂志不仅促进了学术交流，还为地质科学领域的专家和学者提供了一个展示他们最新发现和思想的平台。这使得我们的期刊成为地质科学研究不可或缺的参考资源。</p>



      <p><b>编辑部联系方式：</b></p>
      <!-- <p><b>邮箱：</b>jee@ieecas.cn</p>
      <p><b>电话：</b>029-62336252</p> -->
      <p><b>网址： </b><a href="dqhx@gig.ac.cn">dqhx@gig.ac.cn</a></p>



    </div>



  </div>
</template>
