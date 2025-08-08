<template>

  <div class="col-span-9 shadow-lg ">
    <div class="">
      <!-- 主体左侧 -->
      <button class="flex items-center justify-start btn btn-block bg-[#102693] text-white text-2xl hover:bg-blue-600 ">
        <span class="mr-2">会议注册</span>
      </button>

    </div>
    <div class="p-4 sm:p-10">
      <p><b class="text-xl">一、注册费标准：</b></p>

      <!-- <table class="MsoTableGrid" style="width:508.95pt">
        <tbody>
          <tr>
            <td valign="top" class>注册类型</td>
            <td valign="top" class>前期注册（2024年5月24日前）</td>
            <td valign="top" class>后期注册（2024年5月24日后）</td>
          </tr>
          <tr>
            <td valign="top" class>学生代表（不含博后）</td>
            <td valign="top" class>1800 元/人</td>
            <td valign="top" class>2200 元/人</td>
          </tr>
          <tr>
            <td valign="top" class>正式代表（学会会员）</td>
            <td valign="top" class>2200 元/人</td>
            <td valign="top" class>2400 元/人</td>
          </tr>
          <tr>
            <td valign="top" class>正式代表（非会员）</td>
            <td valign="top" class>2400 元/人</td>
            <td valign="top" class>2600 元/人</td>
          </tr>
          <tr>
            <td valign="top" class>随行人员</td>
            <td valign="top" class>600元/人</td>
            <td valign="top" class>800元/人</td>
          </tr>
        </tbody>
      </table> -->

      <div class="overflow-x-auto">
        <table class="table">
          <!-- head -->
          <thead>
            <tr>

              <th>注册类型</th>
              <th>注册费（包含现场注册）</th>

            </tr>
          </thead>
          <tbody>
            <!-- row 1 -->
            <tr class="hover">

              <td>学生代表（不含博后）</td>
              <td>1800 元/人</td>

            </tr>
            <!-- row 2 -->
            <tr class="hover">

              <td>正式代表</td>

              <td>2400 元/人</td>
            </tr>
            <!-- row 3 -->
            <tr class="hover">
              <td>随行人员</td>
              <td>1800 元/人</td>

            </tr>
            <!-- row 4 -->

          </tbody>
        </table>
      </div>






      <p><b>备注：</b></p>

      <p>1）学生凭有效学生证；</p>
      <p>2）会议注册费委托西安凯立会议会展有限公司统一收取，发票由西安凯立会议会展有限公司开具。</p>

      <p><b class="text-xl">二、付费方式：</b></p>
      <p>本次会议注册费用可通过银行汇款和微信、支付宝、银联卡在线支付多种方式缴纳会议注册费。会议注册费转款账户如下：</p>
      <p><b>会议注册费转款账户：</b></p>
      <p><b>名称：</b>西安凯立会议会展有限公司</p>
      <p><b>帐号：</b>3700 1104 0920 0001 245</p>
      <p><b>开户行：</b>中国工商银行股份有限公司西安土门支行</p>
      <p><b>汇款单必须备注：</b><b style="color: red;">姓名+手机号+大陆风化</b></p>
      <p><b>温馨提示：</b></p>
      <p style="color: red;">1）请务必填写附言，以免无法确认。附言格式：姓名+手机号+同位素，团队注册请注明：单位名称+手机号+同位素。</p>
      <p style="color: red;">2）网上报名注册必须上传汇款凭证和所需要发票的信息。</p>
      <p style="color: red;">3）参会人已缴纳的会议注册费在 10 月10 日之后均不予退还，但可转让给他人作为会议注册费使用。</p>

    </div>

    <div class="text-center">
      <a href="http://weathering.meeting666.com/UserCentral/Index/Login"><button
          class="btn btn-active bg-[#102693] btn-primary  text-white text-xl">个人注册</button></a><br><br>
      <a href="http://weathering.meeting666.com/UserCentral/Index/groupLogin"> <button
          class="btn btn-active bg-[#102693] btn-primary  text-white text-xl">团队注册</button></a>
    </div>
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
  color: white;
  background: #102693;
}

table td {
  border-bottom: 1px solid #888;
  border-right: 1px solid #888;
  font-size: 16px;
  padding: 10px
}
</style>