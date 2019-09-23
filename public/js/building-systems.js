/* eslint-disable no-undef */
var __Modules = {
  Lead: ['线索'],
  Customer: ['客户', ['Lead']],
  CustomerSea: ['公海', ['Customer']],
  Contact: ['联系人', ['Customer']],
  Competitor: ['竞争对手'],
  Opportunity: ['商机', ['Customer']],
  SalesOrder: ['订单', ['Customer']],
  Contract: ['合同', ['Order']],
  Receipt: ['收款'],
  Expense: ['费用'],
  Product: ['产品'],
  FollowUp: ['跟进'],
  WorkOrder: ['工单'],
  WorkPlan: ['工作报告'],
  _KB: ['知识库'],
  _Approval: ['审批流程'],
  _DataAnalytics: ['数据分析'],
  _DataReport: ['报表']
}
var __ByGroup = {
  Customer: ['客户管理', ['Lead', 'Customer', 'CustomerSea', 'Contact', 'Competitor']],
  Sales: ['销售管理', ['Opportunity', 'SalesOrder', 'Contract', 'Receipt', 'Expense', 'Product']],
  Service: ['服务管理', ['WorkOrder']],
  System: ['支持', ['_KB', '_Approval', '_DataAnalytics', '_DataReport']]
}

$(document).ready(function () {
  for (var k in __ByGroup) {
    var ms = __ByGroup[k]
    var g = $('<div class="col-lg-3 col-md-6 col-sm-6 col-12"></div>').appendTo('#modules')
    $('<h5>' + ms[0] + '</h5>').appendTo(g)
    var list = $('<ul></ul>').appendTo(g)
    $(ms[1]).each(function () {
      var m = __Modules[this]
      m = $('<li><div class="custom-control custom-checkbox"><input type="checkbox" class="custom-control-input" id="' + this + '"><label class="custom-control-label" for="' + this + '">' + m[0] + '</label></div><li>').appendTo(list)
      if (this.substr(0, 1) == '_') m.find('input').prop('checked', true)
    })
  }
})