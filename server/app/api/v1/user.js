const Router = require('koa-router')
const success = require('../../lib/helper')
const router = new Router({
    prefix:'/v1/user'   
});
const {User} = require('../../models/user')

router.post('/register', async (ctx) => {
    // 省去校验...
    const {nickname, password,phonenum} = ctx.request.body 
    await User.create({
        phonenum,
        nickname,
        password
    })
    success();  
    
})

module.exports = router 