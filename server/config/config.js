module.exports= {
    environment:'dev',
    database: {
        dbName:'graduation',
        host:'localhost',
        port:'3306',
        user:'root',
        password:'leoon'
    },
    security:{
        secretKey:'Gd213@25zs*azw',     //密码复杂度
        expiresIn:60*60*3              //令牌过期时间3小时
    },
    wx: {
        appId:'wxbc2136fc045a47e7',
        appSecret:'973cb832139d2ecf07c3ffac91e5447f',
        loginUrl:'https://api.weixin.qq.com/sns/jscode2session?appid=%s&secret=%s&js_code=%s&grant_type=authorization_code'
    }
}