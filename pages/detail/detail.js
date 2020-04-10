// pages/detail/detail.js
const app = getApp()
import {
  getDetail,
  getRecommends
} from '../../service/detail'
Page({
  data: {
    banners:[],
    title:'',
    price:'',
    oldPrice:'',
    discountDesc:'',
    columns:[],
    services:[],
    sellerInfo:{},
    detailInfo:{},
    size:{},
    params:[],
    rate:[],
    recommends:[],
    iid:''
  },

  onLoad: function (options) {
    this.setData({
      iid:options.iid
    })
      this._getDetail(options.iid);
      this._getRecommends()
  },
  _getDetail(iid) {
    getDetail(iid).then(res => {
      const result = res.data.result;
      this.setData({
        banners:result.itemInfo.topImages,
        title:result.itemInfo.title,
        price:result.itemInfo.price,
        oldPrice:result.itemInfo.oldPrice,
        discountDesc:result.itemInfo.discountDesc,
        columns:result.columns,
        services:result.shopInfo.services,
        sellerInfo:result.shopInfo,
        detailInfo:result.detailInfo,
        size:result.itemParams.rule,
        params:result.itemParams.info.set,
        rate:result.rate.list
      })
    })
  },
  _getRecommends() {
    getRecommends().then(res => {
      let arr = res.data.data.list;
      arr.forEach(item => {
        item.iid = item.item_id
      })
      console.log(arr)
      this.setData({
        recommends:arr
      })
    })
  },
  addCart() {
    let g = this.data.oldPrice || '￥68.8';
    let p = g.substr(1,g.length-1);
    p = parseFloat(p);
    const obj = {};
    obj.iid = this.data.iid;
    obj.image = this.data.banners[0];
    obj.title = this.data.title;
    obj.price = p;
    obj.count = 1;
    obj.checked = true;

    const arr = app.cartData;
    if (arr.length == 0) {
      arr.push(obj)
    }else {
      const arr1 = [];
      for (var i = 0; i<arr.length; i++) {
        if (arr[i].iid == obj.iid) {
          arr[i].count += 1;
          arr1.push(arr[i])
        }
      }
      if (arr1.length == 0) {
        arr.push(obj);
      }

    }
    console.log(arr);
    
    wx.showToast({
      title:'加入购物车成功',
      icon:'success',
      duration:2000
    })
  }
})