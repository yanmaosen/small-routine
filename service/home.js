import request from './request'
function getMultidata() {
  return request({
    url:'http://152.136.185.210:8000/api/h8/home/multidata'
  })
}
function getGoods(type,page) {
  return request({
    url:'http://152.136.185.210:8000/api/h8/home/data',
    data:{
      type,
      page
    }
  })
}
export {
  getMultidata,
  getGoods
}
