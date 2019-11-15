var __Modules = {
  Activity: [
    '市场活动',
    '企业为探寻更多的潜在客户，通过线下/线上活动获得更多的客户关注和线索及客户资源'
  ],
  Lead: [
    '销售线索',
    '销售线索是与客户初次接触获得的原始信息，可以是从展会中获得的名片，通过推广活动获得的电话号码，或是会议、广告、外部购买等渠道获得的客户简单信息，然后通过管理和跟进可以转化为客户'
  ],
  LeadPool: [
    '线索池',
    '将线索通过按不同行业不同地区或是其它的方式组合一起，即成为线索池，如上海区线索池、北京区线索池、教育行业线索池、金融行业线索池等',
    ['Lead']
  ],
  Competitor: [
    '竞争对手',
    '商业竞争日趋激烈，销售过程中，每个商机都可能存在多个对手参与竞争，因此关注每个竞争对手的动态及其销售活动，并及时进行积极应对是赢得商机的重要手段'
  ],
  Account: [
    '客户',
    '客户是指与企业业务有往来企业、团体或个人，是企业的重要资源，可以通过线索转化而来，或是销售挖掘等多种渠道获取'
  ],
  AccountPool: [
    '公海',
    '按不同行业不同地区或是按某种相同特性组合一起的客户分组，即成为公海，如上海区公海、北京区公海、教育行业公海等',
    ['Account']
  ],
  Contact: [
    '联系人',
    '即与企业直接联系的客户方相关人员。如果是企业客户，联系人是您与企业联系沟通的人。如果是个人客户，联系人可以是与客户有关系的沟通联系人',
    ['Account']
  ],
  Visit: [
    '拜访',
    '为了更好的维护好客户关系，销售需定期拜访客户，了解客户需求或是产品使用情况等信息',
    ['Account']
  ],
  Product: [
    '产品',
    '产品是企业向客户提供的各种有价值的物品、服务、信息、人力、组织等，或它们的组合，可以是有形的或者无形的。但是他们均可以被某种单位或单位组合进行度量，同时表明价值。产品作为企业提供服务的核心，整个企业的营销业务是围绕着产品展开的'
  ],
  PriceManual: [
    '价格手册',
    '价目表是企业在向客户销售产品时，基于不同类型客户所销售的产品的不同和所销售的产品的折扣的不同所定义的产品列表',
    ['Product']
  ],
  Opportunity: [
    '商机',
    '商机是与客户做一笔生意的跟进过程，如果是企业客户，一个完整的销售周期大概包括产品咨询、报价、方案评估及最后的赢单或输单',
    ['Account']
  ],
  SalesOrder: [
    '销售订单',
    '销售订单是企业与客户之间签订的一种销售协议，销售订单实现企业与客户之间的沟通，实现客户对企业待售货物的一种请求，同时也是企业对客户的一种销售承诺。通过订单信息的维护与管理，实现企业对销售的计划性控制，使企业的销售活动、生产活动、采购活动处于有序、流畅、高效的状态',
    ['Account']
  ],
  Contract: [
    '合同',
    '合同是销售过程中的一个重要组成部分，是营销活动中常见的一项法律活动，为了确定各自的权利和义务而订立的各自遵守的条文。因为合同在法律上的各种特性，所以合同管理为销售过程管理的重中之重',
    ['SalesOrder']
  ],
  Invoice: [
    '发票',
    '发票开具是指法律、法规的规定在何种情况下开具发票，基于证明商品和资金所有权转移的需要、进行会计核算的需要和进行税收管理的需要，发票应在发生经营业务确认营业收入时由收款方向付款方开具，特殊情况下，由付款方向收款方开具',
    ['SalesOrder']
  ],
  ReturnMoney: [
    '回款',
    '回款是企业营销活动重要环节，针对特定销售订单，记录实际收到的款项',
    ['SalesOrder']
  ],
  Quotation: [
    '报价单',
    '报价单是企业在销售过程当中，向客户提供的产品报价清单，也为销售订单提供了一个基本的价格信息',
    ['Account']
  ],
  Refund: [
    '退款',
    '退款是在企业的实际营销过程中，出现因为各种原因对客户进行退款的情况',
    ['ReturnMoney']
  ],
  WareHouse: [
    '仓库',
    '仓库是对仓储货物的容器，目的是为企业保证产品的完好无损，确保生产、经营活动的正常进行，并在此基础上对各类货物的活动状况进行分类记录，以明确的图表方式表达仓储货物在数量、品质方面的状况，以及所在的地理位置、部门、订单归属和仓储分散程度等情况的综合管理形式'
  ],
  Inventory: [
    '库存',
    '库存是仓库中实际储存的产品，控制合理的库存水平，即用最少的投资和最少的库存管理费用，维持合理的库存，以满足企业的需求和减少缺货损失',
    ['WareHouse']
  ],
  InboundOrder: [
    '入库单',
    '入库单是对采购实物入库数量的确认，也是对采购人员和供应商的一种监控，如果缺乏实物入库的控制，不能防止采购人员与供应商串通舞弊，虚报采购量、实物短少的风险。它是企业内部管理和控制的重要凭证',
    ['Inventory']
  ],
  OutboundOrder: [
    '发货单',
    '发货单是企业或公司把产品发到指定的人或公司并作为提货、出门、运输、验收等过程的票务单据，是企业或公司体现销售额的重要依据之一',
    ['InboundOrder']
  ],
  ReturnForm: [
    '退货单',
    '退货单一般用于客户进货的商品，因错误或质量等问题，需退回企业的单据'
  ],
  WorkOrder: [
    '工单',
    '工单是根据不同组织、部门和外部客户的需求，需要有针对的管理、维护和追踪一系列的问题和请求',
    ['Account']
  ],

  _WorkPlan: ['工作报告'],
  _KB: ['知识库'],
  _Approval: ['审批流程'],
  _DataAnalytics: ['数据分析'],
  _DataReport: ['自定义报表'],
  _UserMrg: ['用户管理'],
  _DeptMrg: ['部门管理'],
  _RoleMrg: ['权限管理'],
  _Entity: ['实体管理'],
  _Trigger: ['业务规则执行'],
  _Audit: ['数据审计'],
  _RecycleBin: ['回收站']
}
var __ByGroup = {
  Marketing: ['市场活动', 'Activity,Lead,LeadPool,Competitor'],
  Account: ['客户管理', 'Account,AccountPool,Contact,Visit'],
  Sales: ['销售自动化', 'Opportunity,Quotation,SalesOrder,Contract,Invoice,ReturnMoney,Refund,Product,PriceManual'],
  Service: ['库存管理', 'Inventory,InboundOrder,OutboundOrder,ReturnForm,WareHouse'],
  Support: ['数据与流程', '_Approval,_Trigger,_KB,_DataReport,_DataAnalytics'],
  System: ['系统管理', '_UserMrg,_DeptMrg,_RoleMrg,_Entity,_Audit,_RecycleBin'],
}

$(document).ready(function () {
  for (var k in __ByGroup) {
    var ms = __ByGroup[k]
    var g = $('<div class="col-lg-4 col-md-6 col-sm-6 col-12"></div>').appendTo('#modules')
    $('<h5>' + ms[0] + '</h5>').appendTo(g)
    var list = $('<ul></ul>').appendTo(g)
    $(ms[1].split(',')).each(function () {
      var m = __Modules[this]
      if (!m) return
      var m_rels = m[2]
      m = $('<li><div class="custom-control custom-checkbox" title="' + (m[1] || m[0]) + '"><input type="checkbox" class="custom-control-input" id="' + this + '"><label class="custom-control-label" for="' + this + '">' + m[0] + '</label></div><p>' + (m[1] || m[0]) + '</p><li>').appendTo(list)
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

  var sbtn = $('#coSubmit').click(function () {
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

    sbtn.attr({ disabled: true }).html('<i class="fa fa-spinner fa-spin"></i>')
    $.post('/api/sites/requirement', (_data), function () {
      setTimeout(function () { sbtn.html('<i class="fa fa-check"></i> 信息已提交') }, 500)
    })
  })
})
