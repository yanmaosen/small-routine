// pages/home/recommends/recommends.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    recommends:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    flag:true
  },

  /**
   * 组件的方法列表
   */
  methods: {
    imageLoad() {
      if (this.data.flag) {
        this.triggerEvent('imageLoad',{},{})
        this.data.flag = false;
      }
    }
  }
})
