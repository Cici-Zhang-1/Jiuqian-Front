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
          url: '/home',
          img: 'fa fa-home',
          show: true,
          component: 'navbar-item'
        },
        {
          id: 'Apps',
          name: '应用',
          url: '/apps',
          img: 'fa fa-th',
          show: true,
          active: false,
          component: 'navbar-item'
        },
        {
          id: 'App',
          name: '',
          img: 'fa fa-folder',
          url: '/app',
          show: false,
          funcs: [],
          component: 'navbar-dropdown'
        },
        {
          id: 'Myself',
          name: '我的',
          url: '/myself',
          img: 'fa fa-user',
          show: true,
          component: 'navbar-item'
        }
      ],
      apps: {
        /* database: {
          name: '成品库',
          font: 'fa fa-database',
          size: '',
          children: {
            location: {
              name: '库位',
              font: 'fa fa-align-justify',
              size: 'fa-2x',
              href: '/app/location',
              home: true, // 是否显示主页功能区
              funcs: [
                {
                  name: '删除库位',
                  font: 'fa fa-trash-o',
                  href: '/funcs/location/remove'
                },
                {
                  name: '编辑库位',
                  font: 'fa fa-pencil-square-o',
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
        } */
      },
      myself: {
        name: '张闯创',
        telephone: '15171454523',
        department: '软件开发',
        funcs: [
          {
            myOrder: {
              name: '我的订单',
              img: 'fa fa-folder',
              url: '/order/myOrder'
            },
            myDealer: {
              name: '我的客户',
              img: 'fa fa-users',
              url: '/dealer/myDealer'
            }
          },
          {
            mySettings: {
              name: '设置',
              img: 'fa fa-cogs',
              url: '/setting/mySettings'
            },
            signout: {
              name: '退出',
              img: 'fa fa-sign-out',
              url: '/sign/in'
            }
          }
        ]
      },
      settings: {
        table: {
          location: {
            name: '库位',
            type: 'checkbox',
            contents: {
              id: {
                label: 'Id',
                value: 'Id',
                checked: true
              },
              status: {
                label: '状态',
                value: 'Status',
                checked: true
              },
              sn: {
                label: '名称',
                value: 'Sn',
                checked: true
              },
              order: {
                label: '订单号',
                value: 'Order',
                checked: true
              }
            }
          }
        }
      },
      configs: {
        name: '九千',
        logo: '',
        url: '/'
      },
      activeLine: null,
      reload: false,
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
