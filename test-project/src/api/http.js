import axios from 'axios'

const service = axios.create({
  // baseURL:process.env.NODE_ENV==='production'?"":"api/" , //生产环境为"",本地环境为api/
  baseURL:'/',
  timeout: 20000,
})
let requestUrl = [] //保存节流请求
let saveTime = 900 //节流时间
let loading = null
//request 拦截器
//service.headers['Content-Type'] = 'application/x-www-form-urlencoded';
service.interceptors.request.use((config) => {
  if (config.method.toUpperCase() == "POST") {
    config.headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  }else{
    // let urlT = ""
    // urlT = config.baseURL +config.url+ '?ous=' + (new Date()).getTime()
    // for(let key in config.params){
    //   urlT += '&'+key+'='+config.params[key]
    // }
    // config.url = urlT
  }
  return config
}, error => {
  Promise.reject(error)
})
//response 拦截器
service.interceptors.response.use(response => {
  // console.log("response",response)
  return response.data
}, error => {
  // console.log("error",error)
})
export default service
