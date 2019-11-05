// pages/placeDetail/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pid: 1,
    placeData:{
		pid:"2",
		placeName:"店名",
		grade:"9.6",
    address:"这是一个地址",
    placeTime:"8:00-20:00 周一到周日",
		price:"100",
    distance:"1.7",
    phoneNum:"13415638574"
  },
	commentData: [
		{
			cid:1,
			headURL: "../images/head1.jpeg",
			username: "Leoon",
			time: "6小时前",
			rate: 4,
			content: "飒飒的 打撒打的阿萨德阿萨德啊的的 打撒打的阿萨德阿萨德啊的的 打撒打的阿萨德阿萨德啊的"
		},
		{
			cid: 2,
			headURL: "../images/head1.jpeg",
			username: "Leoon",
			time: "6小时前",
			rate: 4,
			content: "飒飒的 打撒打的阿萨德阿萨德啊的的 打撒打的阿萨德阿萨德啊的的 打撒打的阿萨德阿萨德啊的"
		}
  ],
  itemName: [ {
    sessionName:"乒乓球",
    sessionTime: [{
      day:"周二",
      time: "10-14",
    },{
      day:"周一",
      time: "10-14",
    },{
      day:"周一",
      time: "10-14",
    },{
      day:"周一",
      time: "10-14",
    }],
  },{
    sessionName:"蓝球",
    sessionTime: [{
      day:"周一",
      time: "10-14",
    }]
  }, {
    sessionName:"毛羽球",
    sessionTime: [{
      day:"周三",
      time: "10-14",
    }]
  } ],
  itemNum: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      placeName: options.placeName
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  phone(){
    wx.makePhoneCall({
      phoneNumber: this.data.placeData.phoneNum,
    })
  },

  itemChange(e) {
    let itemNum = e.detail;
    this.setData({
      itemNum:itemNum
    })
  }
})