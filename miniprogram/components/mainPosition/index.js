// components/position/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    posImg:{
      type:String,
      value:"/components/images/position.png"
    },
    location: {
      type:String,
      value:'北京'
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

  },

   externalClasses: ['pos-class'],

  options: {
    styleIsolation: 'isolated'
  }
})
