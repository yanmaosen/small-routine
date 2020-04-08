import request from './request'
function getCategory() {
  return request({
    url:'http://152.136.185.210:8000/api/h8/category'
  })
}
function getSubcategory(maitKey) {
  return request({
    url:'http://152.136.185.210:8000/api/h8/subcategory',
    data:{
      maitKey
    }
  })
}
export {
  getCategory,
  getSubcategory
}