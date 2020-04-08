// components/back/back.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    backClick() {
      wx.pageScrollTo({
        scrollTop: 0,
        duration: 600
      })
    }
  }
})
