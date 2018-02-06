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
              home: true, // 是否显示主页功能区
              'funcs': [
                {
                  name: '删除库位',
                  font: 'fa fa-trash-o',
                  href: '/funcs/location/remove'
                },
                {
                  name: '编辑库位',
                  font: 'fa fa-plus',
                  href: '/funcs/location/edit'
                },
                {
                  name: '新增库位',
                  font: 'fa fa-plus',
                  href: '/funcs/location/add'
                },
                {
                  name: '出库',
                  font: 'fa fa-circle',
                  href: '/funcs/location/out'
                },
                {
                  name: '入库',
                  font: 'fa fa-circle-o',
                  href: '/funcs/location/in'
                }
              ],
              data: {
                name: '库位',
                home: true, // 是否显示在home页card区
                type: 'table', // 数据展现的类型
                settings: true,
                keyword: '',
                length: 0,
                pagesize: 0,
                page: 1,
                uri: '/location/read',
                contents: []
              }
            }
          }
        }
      },
      home: {
        apps: {},
        cards: {}
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
          'location': {
            'name': '库位',
            'type': 'checkbox',
            'contents': {
              'no': {
                'label': 'No',
                'value': 'No',
                'checked': true
              },
              'first': {
                'label': '状态',
                'value': 'First',
                'checked': true
              },
              'second': {
                'label': '名称',
                'value': 'Second',
                'checked': true
              },
              'third': {
                'label': '订单号',
                'value': 'Third',
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
      test: [
        {
          a: 1,
          b: 2,
          d: {}
        }
      ]
    },
    actions,
    mutations,
    getters
  })
}
