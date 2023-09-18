// 二次封装axios 
import axios from 'axios';
// 创建请求实例
const service = axios.create({
  baseURL: 'http://8.130.123.78:7001',
  timeout: 10000
});
// 请求拦截器 
service.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
});
// 响应拦截器 response axios封装的响应 response.data
service.interceptors.response.use(response => {
  if (response.status !== 200) {
    return Promise.reject(response)
  } else {
    return response.data
  }
}, error => {
  return Promise.reject(error)
});
export default service
// 封装get请求
export let get = (url, params) => {
  return service.get(url, {
    params
  })
}

