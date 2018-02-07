/**
 * Created by chuangchuangzhang on 2018/2/6.
 */
let baseUrl = ''

if (process.env.NODE_ENV === 'development') {
  baseUrl = 'http://localhost/jiuqian'
} else if (process.env.NODE_ENV === 'production') {
  baseUrl = 'http://localhost/jiuqian'
}

export {
  baseUrl
}
