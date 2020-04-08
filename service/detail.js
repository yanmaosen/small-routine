import request from './request'
function getDetail(iid) {
  return request({
    url:'http://152.136.185.210:8000/api/h8/detail',
    data:{
      iid
    }
  })
}
export {
  getDetail
}