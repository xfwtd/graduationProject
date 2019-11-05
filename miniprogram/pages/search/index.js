// pages/search/index.js
import {HistoryModel} from '../../models/history.js'
const historyModel = new HistoryModel()
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		searching:false,
		inputValue:"",
		his:[],
		placeData: [
			{
			pid: 1,
			placeName: "这是第一家店",
			placeImg: "../../images/place1.jpg",
			distance: 1.7,
			grade: 9.1,
			price: 100
		  },
		  {
			pid: 2,
			placeName: "这是第二家店",
			placeImg: "../../images/place1.jpg",
			distance: 2.7,
			grade: 7.1,
			price: 200
		  },
		],
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		this.setData({
			his: historyModel.getHistory()
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
	cancel:function (param) { 
		console.log(this.data.his)
		this.setData({
			searching:false,
			inputValue:""
		})
	 },
	 search:function (e) {
		console.log(this.data.his)

		 let word = e.detail.value;
		 historyModel.addHistory(word);
		 let his = this.data.his;
		 his.unshift(word)
		 this.setData({
			 searching:true,
			 his
		 })
	   },
	back:function () { 
		wx.navigateBack({
			delta: 1
		});
	}
})
