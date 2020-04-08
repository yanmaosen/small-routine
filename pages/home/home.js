// pages/home/home.js
import {
  getMultidata,
  getGoods
} from '../../service/home'
Page({
  data: {
    banners: [],
    recommends: [],
    goods: {
      new: {
        page: 0,
        list: []
      },
      pop: {
        page: 0,
        list: []
      },
      sell: {
        page: 0,
        list: []
      }
    },
    currentGoods: 'pop',
    currentIndex:0,
    isShow: false,
    isTabShow: true,
    tabHeight:0
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._getMultidata();
    this._getGoods('new');
    this._getGoods('pop');
    this._getGoods('sell');
  },
  _getMultidata() {
    getMultidata().then(res => {
      const banners = res.data.data.banner.list;
      const recommends = res.data.data.recommend.list;
      this.setData({
        banners: banners,
        recommends: recommends
      })
    })
  },
  _getGoods(type) {
    const page = this.data.goods[type].page + 1;
    getGoods(type, page).then(res => {
      const list = res.data.data.list;
      const typeKey = `goods.${type}.list`;
      const pageKey = `goods.${type}.page`;
      const oldList = this.data.goods[type].list;
      oldList.push(...list);
      this.setData({
        [typeKey]: oldList,
        [pageKey]: page
      })
    })
  },
  tabClick(event) {
    this.setData({
      currentIndex:event.detail.tabIndex
    })
    switch (event.detail.tabIndex) {
      case 0:
        this.setData({
          currentGoods: 'pop'
        })
        break;
      case 1:
        this.setData({
          currentGoods: 'new'
        })
        break;
      case 2:
        this.setData({
          currentGoods: 'sell'
        })
        break;
    }
    var tab2= this.selectComponent('#tab2');
    tab2.setData({
      currentIndex:event.detail.tabIndex
    })
  },
  onReachBottom() {
    this._getGoods(this.data.currentGoods)
  },
  onPageScroll(options) {
    let flag1 = options.scrollTop >= 1000;
    if (flag1 != this.data.isShow) {
      this.setData({
        isShow: true
      })
    }

    let flag2 = options.scrollTop < 1000;
    if (flag2 == this.data.isShow) {
      this.setData({
        isShow: false
      })
    }

    let flag3 = options.scrollTop >= this.data.tabHeight;
    if (flag3 == this.data.isTabShow) {
      this.setData({
        isTabShow:false
      })
    }

    let flag4 = options.scrollTop < this.data.tabHeight;
    if (flag4 != this.data.isTabShow) {
      this.setData({
        isTabShow:true
      })
    }
    
  },
  imageLoad() {
    const query1 = wx.createSelectorQuery();
    query1.select('#tab2').boundingClientRect();
    query1.selectViewport().scrollOffset();
    query1.exec(res => {
      this.setData({
        tabHeight:res[0].top
      })
    })
  },
  goodsItemClick(event) {
    wx.navigateTo({
      url:'/pages/detail/detail',
      event:{
        someEvent: function(data) {
        }
      },
      success:function(res) {
        res.eventChannel.emit('acceptDataFromOpenerPage', { data: event.detail.data })
      }
    })
  }
})
// iid:event.currentTarget.dataset.iid