/* eslint-disable no-undef */
var __Modules = {
  Lead: ['线索'],
  Customer: ['客户', ['Lead']],
  CustomerSea: ['公海', ['Customer']],
  Contact: ['联系人', ['Customer']],
  Competitor: ['竞争对手', ''],
  Opportunity: ['商机', ['Customer']],
  SalesOrder: ['订单', ['Customer']],
  Contract: ['合同', ['SalesOrder']],
  Receipt: ['收款', ['SalesOrder']],
  Expense: ['费用', ['SalesOrder']],
  Invoice: ['发票', ['Expense', 'Receipt']],
  Product: ['产品', []],
  FollowUp: ['跟进纪录', []],
  WorkOrder: ['服务工单', ['Customer']],
  Equipment: ['设备'],
  WorkPlan: ['工作报告'],
  Attendance: ['考勤'],
  _KB: ['知识库'],
  _Approval: ['审批流程'],
  _DataAnalytics: ['数据分析'],
  _DataReport: ['报表']
}
var __ByGroup = {
  Customer: ['客户管理', ['Lead', 'Customer', 'CustomerSea', 'Contact', 'Competitor']],
  Sales: ['销售管理', ['Opportunity', 'SalesOrder', 'Contract', 'Receipt', 'Expense', 'Invoice', 'Product']],
  Service: ['服务管理', ['WorkOrder', 'Equipment']],
  Office: ['办公', ['Attendance', 'WorkPlan', 'FollowUp', '_KB']],
  System: ['系统支持', ['_Approval', '_DataAnalytics', '_DataReport']]
}

$(document).ready(function () {
  for (var k in __ByGroup) {
    var ms = __ByGroup[k]
    var g = $('<div class="col-lg-3 col-md-6 col-sm-6 col-12"></div>').appendTo('#modules')
    $('<h5>' + ms[0] + '</h5>').appendTo(g)
    var list = $('<ul></ul>').appendTo(g)
    $(ms[1]).each(function () {
      var m = __Modules[this]
      var m_rels = m[1]
      m = $('<li><div class="custom-control custom-checkbox"><input type="checkbox" class="custom-control-input" id="' + this + '"><label class="custom-control-label" for="' + this + '">' + m[0] + '</label></div><li>').appendTo(list)
      if (this.substr(0, 1) == '_') m.find('input').prop('checked', true)
      m.find('input').click(function () {
        if ($(this).prop('checked')) {
          $(m_rels).each(function () {
            var $rel = $('#' + this)
            if (!$rel.prop('checked')) $rel.trigger('click')
          })
        }
      })
    })
  }

  $('#coSubmit').click(function () {
    var ms = []
    $('#modules input:checked').each(function () {
      ms.push($(this).attr('id'))
    })
    var _data = {
      name: $('#coName').val(),
      number: $('#coNumber').val(),
      memo: $('#coMemo').val(),
      modules: ms.join('/')
    }
    if (!_data.name) { $('#coName').addClass('error').focus(); return }
    if (!_data.number) { $('#coNumber').addClass('error').focus(); return }

    $.post('/api/sites/requirement', (_data), function () {
      alert('信息已提交')
    })
  })
})