// pages/detail/detail.js
import {
  getDetail
} from '../../service/detail'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    iid:'',
    banners:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const eventChannel = this.getOpenerEventChannel();
    eventChannel.on('acceptDataFromOpenerPage', (data) => {
      const iid = data.data;
      this.setData({
        iid:iid
      })
    })
    this._getDetail(this.data.iid)
  },
  _getDetail(iid) {
    getDetail(iid).then(res => {
      console.log(res);
      this.setData({
        banners:res.data.result.itemInfo.topImages
      })
    })
  }

})