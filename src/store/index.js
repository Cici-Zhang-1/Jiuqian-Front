import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

export function createStore () {
  return new Vuex.Store({
    state: {
      navbars: [
        {
          id: 'Home',
          name: '首页',
          'href': '/home',
          'font': 'fa fa-home',
          'size': 'fa-2x',
          'show': true,
          'component': 'navbar-item'
        },
        {
          id: 'Apps',
          name: '应用',
          'href': '/apps',
          'font': 'fa fa-th',
          'size': 'fa-2x',
          'show': true,
          'active': false,
          'component': 'navbar-item'
        },
        {
          id: 'App',
          name: '',
          'font': 'fa fa-folder',
          'size': 'fa-2x',
          'href': '/app',
          'show': false,
          'funcs': [],
          'component': 'navbar-dropdown'
        },
        {
          id: 'Myself',
          name: '我的',
          'href': '/myself',
          'font': 'fa fa-user',
          'size': 'fa-2x',
          'show': true,
          'component': 'navbar-item'
        }
      ],
      apps: {
        'order': {
          'name': '订单',
          'font': 'fa fa-folder',
          'size': '',
          'children': {
            'createOrder': {
              'name': '新建订单',
              'font': 'fa fa-plus',
              'size': 'fa-2x',
              'href': '/app/createOrder',
              'funcs': [
                {
                  'name': 'Add',
                  'font': 'fa fa-plus',
                  'href': '/app/order/add'
                },
                {
                  'name': 'Delete',
                  'font': 'fa fa-minus',
                  'href': '/app/order/remove'
                }
              ]
            },
            'dataUpload': {
              'name': '数据上传',
              'font': 'fa fa-upload',
              'size': 'fa-2x',
              'href': '/app/dataUpload',
              'funcs': [
                {
                  'name': 'Save',
                  'font': 'fa fa-plus',
                  'href': '/app/dataUpload/save'
                },
                {
                  'name': 'Modify',
                  'font': 'fa fa-minus',
                  'href': '/app/dataUpload/modify'
                }
              ]
            },
            'waitDismantle': {
              'name': '等待拆单',
              'font': 'fa fa-plus',
              'size': 'fa-2x',
              'href': '/app/waitDismantle'
            },
            'orders': {
              'name': '订单列表',
              'font': 'fa fa-upload',
              'size': 'fa-2x',
              'href': '/app/orders'
            },
            'draws': {
              'name': '图纸库',
              'font': 'fa fa-plus',
              'size': 'fa-2x',
              'href': '/app/draws'
            },
            'abnomity': {
              'name': '异性板块',
              'font': 'fa fa-upload',
              'size': 'fa-2x',
              'href': '/app/abnormity'
            }
          }
        },
        'service': {
          'name': '客服',
          'font': 'fa fa-female',
          'size': '',
          'children': {
            'waitCheck': {
              'name': '等待核价',
              'font': 'fa fa-plus',
              'size': 'fa-2x',
              'href': '/app/waitCheck'
            },
            'waitQuote': {
              'name': '等待报价',
              'font': 'fa fa-upload',
              'size': 'fa-2x',
              'href': '/app/waitQuote'
            }
          }
        }
      },
      home: {
        'apps': {
          'createOrder': {
            'name': '新建订单',
            'font': 'fa fa-plus',
            'size': 'fa-2x',
            'href': '/app/createOrder'
          },
          'dataUpload': {
            'name': '数据上传',
            'font': 'fa fa-upload',
            'size': 'fa-2x',
            'href': '/app/dataUpload'
          },
          'createOrder1': {
            'name': '新建订单',
            'font': 'fa fa-plus',
            'size': 'fa-2x',
            'href': '/'
          },
          'dataUpload1': {
            'name': '数据上传',
            'font': 'fa fa-upload',
            'size': 'fa-2x',
            'href': '/'
          },
          'createOrder2': {
            'name': '新建订单',
            'font': 'fa fa-plus',
            'size': 'fa-2x',
            'href': '/'
          },
          'dataUpload2': {
            'name': '数据上传',
            'font': 'fa fa-upload',
            'size': 'fa-2x',
            'href': '/'
          },
          'createOrder3': {
            'name': '新建订单',
            'font': 'fa fa-plus',
            'size': 'fa-2x',
            'href': '/'
          },
          'dataUpload3': {
            'name': '数据上传',
            'font': 'fa fa-upload',
            'size': 'fa-2x',
            'href': '/'
          }
        },
        'cards': {
          'messages': {
            'name': '信息',
            'type': 'list',
            'contents': [
              {
                'no': 1,
                'message': '09/20 10:13:12 张三新建订单x2018010001',
                'href': '/'
              },
              {
                'no': 2,
                'message': '09/20 10:13:12 张三新建订单x2018010001',
                'href': '/'
              },
              {
                'no': 3,
                'message': '09/20 10:13:12 张三新建订单x2018010001',
                'href': '/'
              },
              {
                'no': 4,
                'message': '09/20 10:13:12 张三新建订单x2018010001',
                'href': '/'
              }
            ]
          },
          'btOrders': {
            'name': 'BT订单',
            'type': 'table',
            'settings': '/settings/table/btOrders',
            'contents': [
              {
                'no': 1,
                'first': 'Sammy',
                'second': 'Kalens',
                'third': 'Nill',
                'fourth': 'Jill',
                'fifth': 'Susan'
              },
              {
                'no': 2,
                'first': 'Sammy',
                'second': 'Kalen',
                'third': 'Nill',
                'fourth': 'Jill',
                'fifth': 'Mingming'
              },
              {
                'no': 3,
                'first': 'Sammy',
                'second': 'Kalen',
                'third': 'Nill',
                'fourth': 'Jill',
                'fifth': 'Susan'
              },
              {
                'no': 4,
                'first': 'Sammy',
                'second': 'Kalen',
                'third': 'Nill',
                'fourth': 'Jill',
                'fifth': 'Susan'
              },
              {
                'no': 5,
                'first': 'Sammy',
                'second': 'Kalen',
                'third': 'Nill',
                'fourth': 'Jill',
                'fifth': 'Susan'
              }
            ]
          }
        }
      },
      myself: {
        'name': '张闯创',
        'telephone': '15171454523',
        'department': '软件开发',
        'funcs': [
          {
            'myOrder': {
              'name': '我的订单',
              'font': 'fa fa-folder',
              'href': '/order/myOrder'
            },
            'myDealer': {
              'name': '我的客户',
              'font': 'fa fa-users',
              'href': '/dealer/myDealer'
            }
          },
          {
            'mySettings': {
              'name': '设置',
              'font': 'fa fa-cogs',
              'href': '/setting/mySettings'
            },
            'signout': {
              'name': '退出',
              'font': 'fa fa-sign-out',
              'href': '/sign/in'
            }
          }
        ]
      },
      'settings': {
        'table': {
          'btOrders': {
            'name': 'BT订单',
            'type': 'checkbox',
            'contents': {
              'no': {
                'label': 'No',
                'value': 'No',
                'checked': true
              },
              'first': {
                'label': 'First',
                'value': 'First',
                'checked': true
              },
              'second': {
                'label': 'Second',
                'value': 'Second',
                'checked': true
              },
              'third': {
                'label': 'Third',
                'value': 'Third',
                'checked': true
              },
              'fourth': {
                'label': 'Fourth',
                'value': 'Fourth',
                'checked': true
              },
              'fifth': {
                'label': 'Fifth',
                'value': 'Fifth',
                'checked': true
              }
            }
          }
        }
      },
      configs: {
        'name': '九千',
        'logo': '',
        'href': '/'
      },
      test: {
        checked: false
      }
    },
    actions,
    mutations,
    getters
  })
}
