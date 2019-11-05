// components/place/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    placeData: {
      type:Object,
      observer: function(newVal, oldVal){
        // console.log(this.properties.placeData.pid);

            this.setData({
              pid: newVal.pid,
              placeName: newVal.placeName,
              placeImg: newVal.placeImg,
              distance: newVal.distance,
              grade: newVal.grade,
              price: newVal.price
            })
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    pid:1,
    placeName: "店名",
    placeImg: "../images/place1.jpg",
    distance: 1.7,
    grade: 9.0,
    price: 100
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
