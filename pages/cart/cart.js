// pages/cart/cart.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cartData: [],
    allCheck: true,
    allPrice:0,
    allNum:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      cartData: app.cartData
    })
    this.isSel()
    this.count()
  },
  onShow: function () {
    this.setData({
      cartData: app.cartData
    })
    this.isSel()
    this.count()
  },
  allCheckClick(e) {
    this.setData({
      allCheck:!this.data.allCheck
    })
    const arr = this.data.cartData;
    if (this.data.allCheck) {
      for (var i = 0;i < arr.length;i++){
        arr[i].checked = this.data.allCheck;
      }
      this.setData({
        cartData: arr
      })
    }else {
      for (var i = 0;i < arr.length;i++){
        arr[i].checked = this.data.allCheck;
      }
      this.setData({
        cartData: arr
      })
    }
    this.count()
  },
  checkClick(event) {
    const arr = this.data.cartData;
    const index = event.currentTarget.dataset.index;
    arr[index].checked = !arr[index].checked;
    this.setData({
      cartData:arr
    })
    const arr1 = []
    for (var i = 0;i < arr.length;i++) {
      if (arr[i].checked == false) {
        arr1.push(arr[i])
      }
    }
    if (arr1.length != 0) {
      this.setData({
        allCheck:false
      })
    }else {
      this.setData({
        allCheck:true
      })
    }
    this.count()
  },
  isSel() {
    const arr = this.data.cartData;
    const arr1 = []
    for (var i = 0;i < arr.length;i++) {
      if (arr[i].checked == false) {
        arr1.push(arr[i])
      }
    }
    if (arr1.length != 0) {
      this.setData({
        allCheck:false
      })
    }else {
      this.setData({
        allCheck:true
      })
    }
    if (this.data.cartData.length == 0) {
      this.setData({
        allCheck:false
      })
    }
  },
  count() {
    const arr = this.data.cartData;
    const arr1 = [];
    for (var i = 0;i < arr.length;i++) {
      if (arr[i].checked == true) {
        arr1.push(arr[i])
      }
    }

    let sum = 0;
    let num = 0;
    for (var j = 0;j <arr1.length;j++) {
      sum += arr1[j].price * arr1[j].count;
      num += arr1[j].count;
    }
    sum = sum.toFixed(2)
    this.setData({
      allNum:num,
      allPrice:sum
    })
  }
})