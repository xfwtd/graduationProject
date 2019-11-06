const Router = require('koa-router')
const router = new Router({
    prefix:'/v1/user'
});
const {User} = require('../../models/user')

router.post('/register', async (ctx) => {
    // 省去校验...
    const {nickname, password} = ctx.request.body

    User.create({
        nickname,
        password
    })
})

module.exports = router