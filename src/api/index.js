/**
 * Created by chuangchuangzhang on 2018/2/3.
 */
import $ from 'jquery'

const configs = {
  site_url: 'http://localhost/jiuqian'
}

const getJSON = function (uri, data = {}) {
  const promise = new Promise(function (resolve, reject) {
    $.ajax({
      async: true,
      type: 'GET',
      url: configs.site_url + uri,
      data: { ...data },
      dataType: 'json',
      success: function (data) {
        resolve(data)
      },
      error: function (XMLHttpRequest, textStatus, errorThrown) {
        reject(new Error(textStatus))
      }
    })
  })
  return promise
}

export function fetchJsonByUri (uri) {
  return getJSON(uri).then(function (json) {
    return json
  })
}

export function fetchJsonByParams ({ uri, data }) {
  return getJSON(uri, data).then(function (json) {
    return json
  })
}
