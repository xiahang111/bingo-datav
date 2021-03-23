import request from '@/utils/request-local'


export function getOrderTypePie(query) {

  return request({
    url: process.env.ADMIN_API + '/report/getOrderTypePie',
    method: 'post',
    data: query
  })
}

export function getDvOrderNum(query) {

  return request({
    url: process.env.ADMIN_API + '/report/getDvOrderNum',
    method: 'post',
    data: query
  })
}

export function storeAllPriceTop(query) {

  return request({
    url: process.env.ADMIN_API + '/report/storeAllPriceTop',
    method: 'post',
    data: query
  })
}

export function getIndexOrderInfo(query) {
  return request({
    url: process.env.ADMIN_API + '/index/getIndexOrderInfo',
    method: 'get',
    param: query
  })
}

export function getDvOrderCenter(query) {

  return request({
    url: process.env.ADMIN_API + '/report/getDvOrderCenter',
    method: 'post',
    data: query
  })
}

export function getCustomerList(query) {

  return request({
    url: process.env.ADMIN_API + '/report/getCustomerList',
    method: 'post',
    data: query
  })
}

export function getDvSalesmanByGroup(query) {

  return request({
    url: process.env.ADMIN_API + '/report/getDvSalesmanByGroup',
    method: 'post',
    data: query
  })
}








