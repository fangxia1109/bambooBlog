import Vue from 'vue'
import axios from 'axios'
import router from '@/router'
import qs from 'qs'
import merge from 'lodash/merge'
import { clearLoginInfo } from '@/utils'
import AppConstant from '@/constant/app-constant'
import { getApiMsgByI18nKey } from '@/utils/i18n'
import apiCode from '@/constant/api-code'
import ApiUrl from "@/constant/api-url";
import { error } from '@/utils/message';
import { Message, Loading } from 'element-ui';

const http = axios.create({
  timeout: 1000 * 200, // 单位毫秒
  baseURL: ApiUrl.API_HOST_BASE, // url = base url + request url
  withCredentials: true, // send cookies when cross-domain requests
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  }
})

let options = {
  lock: false,
  text: '加载中……',
  background: 'rgba(255, 255, 255, 0.7)'
}

/**
 * 请求拦截
 */
http.interceptors.request.use(config => {
  // let token = Vue.cookie.get(AppConstant.COOKIE_KEY_TOKEN)
  // if (token) {
  //   // 如果路径是login则不带token
  //   if (config.url.indexOf('/login') === -1) {
  //     config.headers[ApiUrl.API_KEY_TOKEN] = token // 请求头带上token
  //   }
  //   const url = config.baseURL
  //   if (url.indexOf('sso-master-server') !== -1) {// 请求头带上app code
  //     config.headers[ApiUrl.API_KEY_CLIENT_CODE] = ApiUrl.APP_CODE_SSO
  //   } else {
  //     config.headers[ApiUrl.API_KEY_CLIENT_CODE] = ApiUrl.APP_CODE
  //   }
  // }
  // Loading.service(options)
  return config
}, error => {
  return Promise.reject(error)
})

/**
 * 响应拦截
 */
http.interceptors.response.use(response => {
  if (response.data && response.data.code === 401) { // 401, token失效
    clearLoginInfo()
    router.push({ name: 'Login' })
  }
  // Loading.service(options).close()
  return response
}, error => {
  // Loading.service(options).close()
  Message.error(error.response.data.msg)
  return Promise.reject(error)
})

/**
 * 请求地址处理
 * @param {*} actionName action方法名称
 */
http.adornUrl = (actionName) => {
  // 非生产环境 && 开启代理, 接口前缀统一使用[/proxyApi/]前缀做代理拦截!
  return (process.env.NODE_ENV !== 'production' && process.env.OPEN_PROXY ? '/proxyApi/' : '') + actionName
}

/**
 * get请求参数处理
 * @param {*} params 参数对象
 * @param {*} openDefaultParams 是否开启默认参数?
 */
http.adornParams = (params = {}, openDefaultParams = true) => {
  var defaults = {
    't': new Date().getTime()
  }
  return openDefaultParams ? merge(defaults, params) : params
}

/**
 * post请求数据处理
 * @param {*} data 数据对象 默认添加时间戳参数 contentType默认为json
 * @param {*} openDefaultData 是否开启默认数据?
 * @param {*} contentType 数据格式
 *  json: 'application/json;charset=utf-8'
 *  dto: 'application/x-www-dto-urlencoded;charset=utf-8'
 *  form-data: 'multipart/form-data;charset=utf-8'
 */
http.adornData = (data = {}, openDefaultData = true, contentType = 'json') => {
  let defaults = {
    't': new Date().getTime()
  }
  data = openDefaultData ? merge(defaults, data) : data
  switch (contentType) {
    case 'json': {
      return JSON.stringify(data)
    }
    case 'dto': {
      return qs.stringify(data)
    }
    case 'form-data': {
      return data
    }
    default: {
      return JSON.stringify(data)
    }
  }
}

/**
 * rest接口请求是否成功，一般情况所有请求都需要调用此方式判断成功失败
 * @param responseOrData
 */
http.isResponseSuccess = (responseOrData) => {
  try {
    let data = responseOrData
    try {
      // 尝试data格式
      if (data && data.code === ApiUrl.API_SUCCESS_CODE) {
        return true
      }
      // 未成功或者格式不是data
    } catch (ex) {
    }
    // 尝试response格式
    data = responseOrData.data
    if (data && data.code === ApiUrl.API_SUCCESS_CODE) {
      return true
    }
  } catch (ex) {
  }
  return false
}

/**
 * 是否无效token
 * @param responseOrData
 * @returns {boolean}
 */
http.isInvalidToken = (responseOrData) => {
  try {
    let data = responseOrData
    try {
      // 尝试data格式
      if (data && data.code === ApiUrl.API_INVALID_TOKEN_CODE) {
        return true
      }
      // token有效或者格式不是data
    } catch (ex) {
    }
    // 尝试response格式
    data = responseOrData.data
    if (data && data.code === ApiUrl.API_INVALID_TOKEN_CODE) {
      return true
    }
  } catch (ex) {
  }
  return false
}

/**
 * 是否超时
 * @param response
 * @returns {boolean}
 */
http.isTimeout = (response) => {
  try {
    if (response.code === 'ECONNABORTED' && response.message.indexOf('timeout') !== -1) {
      return true
    }
  } catch (ex) {
  }
  return false
}

/**
 * 是否网络连接异常
 * @param response
 * @returns {boolean}
 */
http.isNetworkError = (response) => {
  try {
    if (response.message.indexOf('Network Error') !== -1) {
      return true
    }
  } catch (ex) {
  }
  return false
}

/**
 * rest接口返回code，默认500
 * @param data
 * @returns {*}
 */
http.responseCode = (data) => {
  let code = '500'
  try {
    // this.$message({
    //     message: '服务器异常',
    //     type: 'error'
    //   })
    error("server error")
    return code
  } catch (ex) {
    return code
  }
}

/**
 * rest接口返回code对应信息
 * 正常返回错误格式数据传入data，异常时传入response
 * @param responseOrData
 * @returns {*}
 */
http.responseCodeMsg = (responseOrData) => {
  if (typeof responseOrData !== 'object') {
    responseOrData = {}
  }
  let code = http.responseCode(responseOrData)
  // 是否api格式code
  let hasApiCode = apiCode.hasOwnProperty(code)
  if (http.isTimeout(responseOrData)) {
    return getApiMsgByI18nKey('apiCodeMsg.TIMEOUT')
  } else if (http.isNetworkError(responseOrData)) {
    return getApiMsgByI18nKey('apiCodeMsg.NETWORK_ERROR')
  }
  return getApiMsgByI18nKey(hasApiCode ? apiCode[code] : '')
}

export default http
