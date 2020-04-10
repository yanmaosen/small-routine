// components/goods/goods.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    goods:{
      type:Array,
      value:[]
    },
    height:{
      type:Number,
      value:550
    }
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
    goodsItemClick(event) {
      console.log(event);
      
      this.triggerEvent('goodsItemClick',{data:event.detail.data},{})
    }
  }
})
