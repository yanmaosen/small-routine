// pages/category/category.js
import {
  getCategory,
  getSubcategory
} from '../../service/category'
Page({
  data: {
    nav: [],
    content:[],
    currentIndex: 0
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     this._getCategory();
     this._getSubcategory();
  },
  _getCategory() {
    getCategory().then(res => {
      this.setData({
        nav: res.data.data.category.list
      })
      console.log(this.data.nav);
    })
  },
  _getSubcategory() {
    setTimeout(() => {
      const maitKey = this.data.nav[this.data.currentIndex].maitKey;
      getSubcategory(maitKey).then(res => {
        this.setData({
          content:res.data.data.list
        })
      })
    }, 200)
  },
  navClick(event) {
    this.setData({
      currentIndex: event.currentTarget.dataset.index
    })
    this._getSubcategory();
  }
})