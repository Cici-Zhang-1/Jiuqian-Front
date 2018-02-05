import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

export function createStore () {
  return new Vuex.Store({
    state: {
      navbars: [],
      apps: {
        'database': {
          'name': '成品库',
          'font': 'fa fa-database',
          'size': '',
          'children': {
            'location': {
              'name': '库位',
              'font': 'fa fa-align-justify',
              'size': 'fa-2x',
              'href': '/app/location',
              home: true,
              'funcs': [
                {
                  name: '入库',
                  font: 'fa fa-circle-o',
                  href: '/funcs/location/in'
                },
                {
                  name: '出库',
                  font: 'fa fa-circle',
                  href: '/funcs/location/out'
                },
                {
                  name: '新增库位',
                  font: 'fa fa-plus',
                  href: '/funcs/location/add'
                },
                {
                  name: '删除库位',
                  font: 'fa fa-trash-o',
                  href: '/funcs/location/remove'
                }
              ]
            }
          }
        }
      },
      home: {
        apps: {},
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
      settings: {
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
