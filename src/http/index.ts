import { AxiosRequestConfig } from 'axios'
import service from './service'

export function get(url:string, config?:AxiosRequestConfig) {
  if (config) {
    config.url = url
    config.method = 'get'
    return service(config)
  } else {
    const config:AxiosRequestConfig = {
      url: url,
      method:'get'
    }
    return service(config)
  }
}

export function post(url:string, params?:any, config?:AxiosRequestConfig) {
  if (config) {
    config.url = url
    config.method = 'post'
    if (params) {
      config.params = params
    }
    return service(config)
  } else {
    const config:AxiosRequestConfig = {
      url: url,
      method: 'post'
    }
    if (params) {
      config.params = params
    }
    return service(config)
  }
}

export function put(url:string, params?: any, config?:AxiosRequestConfig) {
  if (config) {
    config.url = url
    config.method = 'put'
    if (params) {
      config.params = params
    }
    return service(config)
  } else {
    const config:AxiosRequestConfig = {
      url: url,
      method: 'put',
    }
    if (params) {
      config.params = params
    }
    return service(config)
  }
}

export function _delete(url:string, params?: any, config?:AxiosRequestConfig) {
  if (config) {
    config.url = url
    config.method = 'delete'
    if (params) {
      config.params = params
    }
    return service(config)
  } else {
    const config:AxiosRequestConfig = {
      url: url,
      method: 'delete',
    }
    if (params) {
      config.params = params
    }
    return service(config)
  }
}