const Router = require('koa-router')
const { LoginType } = require('../../lib/enum')
const { User } = require('../../models/user')
const { generateToken } = require('../../../core/util')
const { Auth } = require('../../../middlewares/auth')
const { WXManager } = require('../../services/wx')
const router = new Router({
    prefix: '/v1/token'
});
let token
router.post('/', async (ctx) => {
    const { type, account, password } = ctx.request.body
    switch (type) {
        case LoginType.USER_MOBILE:
            token = await phoneLogin(account, password, ctx)
            break;
        case LoginType.USER_MINI_PROGRAM:
            token = await WXManager.codeToToken(account)
            break;
        default:
            throw new global.errs.ParameterException("无对应处理函数");
    }
    ctx.body = {
        token
    }
})

async function phoneLogin(account, secret, ctx) {
    const user = await User.verifyPhonePassword(account, secret)
    return token = generateToken(user.id, Auth.USER)
}

module.exports = router 