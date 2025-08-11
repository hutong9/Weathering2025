<!--
 * @Author: hutong9 470048408@qq.com
 * @Date: 2024-03-14 11:04:17
 * @LastEditors: HuTong 470048408@qq.com
 * @LastEditTime: 2025-08-11 16:59:21
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
      <p><b>方式：</b>请登录 <a href="http://isotope2024.com">http://isotope2024.com</a> 上传“摘要”。</p>
      <p><b>温馨提示：</b>请参考附件摘要模板。摘要以提供论文的内容梗概为目的，句式力求 简明扼要、慎用长句。摘要结构建议包括：研究目的、研究方法、主要结果和结
        论等（内容要具体明确，勿使用空洞的语句）。摘要不能是结论的简单重复，尽
        量不要使用变量符号、公式、参考文献，不宜用缩略词。
      </p>
      <br />

      <div class="text-center p-4">
        <button class="btn btn-primary m-4 text-xl">
          <a href="/摘要模板.doc" download="/摘要模板.doc">模板下载</a></button><br />
        <button class="btn btn-secondary text-xl">
          <a href="http://weathering.meeting666.com/UserCentral/Index/Login">摘要提交</a>
        </button>
      </div>
    </div>

    <div class="">
      <!-- 主体左侧 -->
      <button class="flex items-center justify-start btn btn-block bg-[#102693] text-white text-2xl hover:bg-blue-600">
        <span class="mr-2">《地球环境学报》征稿启事</span>
      </button>
    </div>

    <div class="p-4 sm:p-10">
      <p>
        <b>征稿范围：</b>第十三届全国同位素地质年代学与同位素地球化学学术讨论会论文
      </p>
      <p><b>稿件要求及注意事项：</b></p>
      <p>1. 论文必须是未经正式出版的研究成果，不存在一稿多投现象。作者保证投稿文章的合法性（无抄袭、剽窃、侵权等学术不端行为）。</p>
      <p>2. 稿件语言：中文或英文均可。</p>
      <p>3. 稿件类型：研究论文（article）、综述（review）、观点（perspective）等均可。</p>
      <p>4. 稿件格式：按照科技论文撰写格式要求，具体可参照《地球环境学报》官网（ <a href="http://jee.ieecas.cn/">http://jee.ieecas.cn/</a>）“投稿须知”及近期已发表文章。
      </p>
      <p>5. 投稿途径：所有稿件要求通过期刊官网在线投稿，投稿时稿件类型请务必选择“第十三届全国同位素地质年代学与同位素地球化学学术讨论会”，以方便稿件归类处理。</p>
      <p>6. 论文最终录用与否，将视审稿结果而定。</p>
      <p>7. 投稿日期：即日起至2024年10月31日；专刊出版时间：暂定2025年6月（最终根据来稿进度确定）。</p>

      <br />
      <h3 class="text-center text-xl p-4"><b>《地球环境学报》简介</b></h3>
      <p>
        《地球环境学报》（以下简称“学报”）2010年8月创刊，CN：61-1482/X，ISSN：1674-9901，文种为中英文，双月刊，大16开，公开发行。学报聚焦于报道全球变化研究，尤其是亚太环境与全球变化相结合的研究成果，旨在促进地球系统科学发展，为解决人类面临的重大气候、环境问题及可持续发展提供科学依据和交流平台。学报刊发反映地球环境科学领域研究的新成就、新技术、新方法文章，涵盖第四纪地质学、环境地质学、环境科学、自然地理学、地球化学、环境考古学、可持续发展等相关学科。学报主要栏目有研究论文、综述、研究亮点、科普等。主编：安芷生（中国科学院院士），副主编：丁仲礼（中国科学院院士）、刘征宇（美国地球物理学会会士）、唐孝炎（中国工程院院士）、周卫健（中国科学院院士），执行主编：谭亮成（研究员）。学报目前收录情况如下：CSCD中国科学引文数据库来源期刊，中国科技核心期刊，JST日本科学技术振兴机构数据库，《世界期刊影响力指数（WJCI）报告》，中国科协《地学领域高质量科技期刊分级目录》入选期刊（T2），《中国学术期刊影响因子年报》统计源期刊，中国核心期刊（遴选）数据库，中文科技期刊数据库，中国学术期刊网络出版总库等。此外，学报2023年荣获第七届陕西省科技期刊优秀期刊奖，2022年荣获“西牛计划”之“精品中文科技期刊”，2020年荣获第六届陕西省科技期刊特色期刊奖，2018年荣获第五届陕西省科技期刊优秀期刊奖。
      </p>

      <p><b>编辑部联系方式：</b></p>
      <p><b>邮箱：</b>jee@ieecas.cn</p>
      <p><b>电话：</b>029-62336252</p>
      <p><b>网址： </b><a href="http://jee.ieecas.cn">http://jee.ieecas.cn</a></p>



    </div>



  </div>
</template>
