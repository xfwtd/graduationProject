// components/topbar/index.js
const app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    placeName: {
      type:String,
      value:""
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    statusBarHeight: app.globalData.statusBarHeight,
    topbarHeight: app.globalData.menuButtonHeight+(app.globalData.menuButtonTop-app.globalData.statusBarHeight)*2
  },

  /**
   * 组件的方法列表
   */
  methods: {
    back: function(){
      wx.navigateBack({
        delta: 1
      });
  }
},
  lifetimes: {
    ready: function(){
      this.triggerEvent('topbarHeight',parseInt(this.data.statusBarHeight)+parseInt(this.data.topbarHeight))
    }
  }

})
