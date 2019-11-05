// pages/location/index.js
const app = getApp();



Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		cityData:[
			{fon: '热门城市', citys: ['上海', '北京', '广州', '深圳', '武汉', '天津', '西安', '南京', '杭州', '成都', '重庆']},
			{fon: 'A', citys: ['阿坝', '阿克苏', '阿拉善盟', '阿勒泰', '安吉', '安康', '安宁', '安平']},
			{fon: 'B', citys: ['白城', '白色', '白山', '保定', '宝鸡', '保山', '包头', '巴中', '北京', '本溪', '滨海']},
			{fon: 'D', citys: ['大理', '大连', '郸城', '丹东', '丹阳', '大庆']},
			{fon: 'E', citys: ['鄂尔多斯', '峨眉山', '恩施', '鄂州']},
			{fon: 'F', citys: ['丰城', '奉化', '凤凰', '凤阳']},
			{fon: 'G', citys: ['阿坝', '阿克苏', '阿拉善盟', '阿勒泰', '安吉', '安康', '安宁', '安平']},
			{fon: 'H', citys: ['白城', '白色', '白山', '保定', '宝鸡', '保山', '包头', '巴中', '北京', '本溪', '滨海']},
			{fon: 'J', citys: ['大理', '大连', '郸城', '丹东', '丹阳', '大庆']},
			{fon: 'K', citys: ['鄂尔多斯', '峨眉山', '恩施', '鄂州']},
			{fon: 'L', citys: ['丰城', '奉化', '凤凰', '凤阳']},
			{fon: 'M', citys: ['阿坝', '阿克苏', '阿拉善盟', '阿勒泰', '安吉', '安康', '安宁', '安平']},
			{fon: 'N', citys: ['白城', '白色', '白山', '保定', '宝鸡', '保山', '包头', '巴中', '北京', '本溪', '滨海']},
			{fon: 'P', citys: ['大理', '大连', '郸城', '丹东', '丹阳', '大庆']},
			{fon: 'Q', citys: ['鄂尔多斯', '峨眉山', '恩施', '鄂州']},
			{fon: 'L', citys: ['丰城', '奉化', '凤凰', '凤阳']},
			{fon: 'S', citys: ['阿坝', '阿克苏', '阿拉善盟', '阿勒泰', '安吉', '安康', '安宁', '安平']},
			{fon: 'T', citys: ['白城', '白色', '白山', '保定', '宝鸡', '保山', '包头', '巴中', '北京', '本溪', '滨海']},
			{fon: 'W', citys: ['大理', '大连', '郸城', '丹东', '丹阳', '大庆']},
			{fon: 'X', citys: ['鄂尔多斯', '峨眉山', '恩施', '鄂州']},
			{fon: 'Y', citys: ['丰城', '奉化', '凤凰', '凤阳']},
			{fon: 'Z', citys: ['阿坝', '阿克苏', '阿拉善盟', '阿勒泰', '安吉', '安康', '安宁', '安平']}
		
		],
		scrollId: ''
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		app.getLocation({
			success: (res) => {
				let city = res.originalData.result.addressComponent.city
				let locationString = city.slice(0,city.length - 1)
				this.setData({
					locationString
				})
			}
		});
		this.setData({
			locating: options.city
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
	scrollTo:function (e) {
		let tar  = e.target.dataset.to;
		
		if(tar) {
			this.setData({
				scrollId: tar
			})
		}
	},
	selcity:function(ev) {
		let city = ev.target.dataset.set;
		if(city) {
			let pages = getCurrentPages(); //获取当前页面js里面的pages里的所有信息。
			let prevPage = pages[ pages.length - 2 ];  
			prevPage.setData({
				locationString:city
			})
			wx.navigateBack({
				delta: 1, // 回退前 delta(默认为1) 页面
			})
		}
	}
})