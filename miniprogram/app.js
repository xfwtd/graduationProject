

const menuButtonData = wx.getMenuButtonBoundingClientRect();
var bmap = require('./libs/bmap-wx.min.js');
App({
  onLaunch: function() {
    
  },
  globalData: {
    statusBarHeight:wx.getSystemInfoSync()['statusBarHeight'],
    menuButtonHeight: menuButtonData.height,
    menuButtonTop: menuButtonData.top,
  },
  getLocation: function(parms) {
    let BMap = new bmap.BMapWX({
      ak:"Ya6fWkQO7lSgjIdXQfibZovyMlbCB1vV"
    })
	  wx.getLocation({
		  type:'wgs84',
		  success: function(res) {
			  const latitude = res.latitude
        const longitude = res.longitude
        BMap.regeocoding({
          location:latitude + ',' + longitude,
          success: function (res) {
            parms.success(res)
            
          }
        })
      },

	  })
  }
})