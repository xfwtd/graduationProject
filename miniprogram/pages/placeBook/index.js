// pages/placeBook/index.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		TabCur: 0,
		total:0,
		scrollLeft: 0,
		siteData: [
			{
				
				time:"周二",
				siteType:["第一场","第二场","vip场次"],
				seat:[[0,0,0,1,1,1,1],
					 [0,1,1,1,1,1,1],
					 [0,0,1,1,1,1,1],
					 [0,1,0,1,1,1,1],
					 [0,0,1,1,1,1,1],
					 [1,0,0,1,1,1,1],
					 [0,0,1,1,1,1,1],
					 [1,0,1,0,1,1,1],
					 [0,0,1,0,1,1,1],
					 [0,1,1,1,1,1,1],
					 [0,0,1,1,1,1,1]
					 
					]
			},
			{
				
				time:"周二",
				siteType:["第一场","第二场","vip场次"],
				seat:[[0,0,0,1],
					 [0,0,1,1],
					 [0,0,1,1],
					 [0,1,0,1],
					 [1,1,1,1],
					 [1,1,1,1],
					 [1,1,1,1],
					 [1,1,1,1],
					 [1,1,1,1],
					 [1,1,1,1],
					 [1,1,1,1]
					 
					]
			},
			{
				
				time:"周二",
				siteType:["第一场","第二场","vip场次"],
				seat:[[0,0,0,1],
					 [0,1,1,1],
					 [0,0,1,1],
					 [0,1,0,1],
					 [1,1,1,1],
					 [1,0,0,1],
					 [0,0,1,1],
					 [1,0,1,0],
					 [1,1,1,0],
					 [1,1,1,1],
					 [1,1,1,1]
					 
					]
			},
			{
				
				time:"周二",
				siteType:["第一场","第二场","vip场次"],
				seat:[[0,0,0,1],
					 [0,1,1,1],
					 [0,0,1,1],
					 [0,1,0,1],
					 [0,0,1,1],
					 [1,0,0,1],
					 [0,0,1,1],
					 [1,0,1,0],
					 [0,0,1,0],
					 [0,1,1,1],
					 [0,0,1,1]
					 
					]
			}
			
		]
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
	
		
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

	//自定义导航栏高度
	topbar(e) {
		this.setData({
			topbarHeight:e.detail
		})
	},
	// 切换时间
	tabSelect(e) {
		this.setData({
			TabCur: e.currentTarget.dataset.id,
			scrollLeft: (e.currentTarget.dataset.id - 1) * 60
		})
	},
	// 选场地
	selectSite:function(e) {
		let row = e.currentTarget.dataset.row;
		let col = e.currentTarget.dataset.col;
		let day = e.currentTarget.dataset.day;
		let siteData = this.data.siteData;
		siteData[day].seat[row][col]=2;
		this.setData({
			siteData:siteData,
			total:this.data.total+36
		})
	},
	cancelSite:function(e) {
		let row = e.currentTarget.dataset.row;
		let col = e.currentTarget.dataset.col;
		let day = e.currentTarget.dataset.day;
		let siteData = this.data.siteData;
		siteData[day].seat[row][col]=1;
		this.setData({
			siteData:siteData,
			total:this.data.total-36
		})
	}
	
	

	
})
