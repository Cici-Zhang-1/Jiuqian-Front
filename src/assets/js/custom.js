// 定制js
'use strict'
import $ from 'jquery'

var getData = function (sourceData, key) {
  return sourceData[key]
}

var settingSave = function (This, $form) {
  // This.$root.$data.settings.tables.btOrders.checkLists.first.checked = false
  $form.each(function (index) {
    let savePath = $(this).data('save-path').split('/')
    let currentSetting = This.$root.$data
    for (let index in savePath) {
      currentSetting = getData(currentSetting, savePath[index])
    }
    $(this).find('input,select,textarea').each(function (ii) {
      if ($(this).is('input') && this.type === 'checkbox') {
        currentSetting[this.name]['checked'] = $(this).prop('checked')
      }
    })
  })
}

export {settingSave}
