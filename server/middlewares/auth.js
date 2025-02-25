const basicAuth = require('basic-auth')
const jwt = require('jsonwebtoken')

class Auth {
    constructor(level) { 
        this.level = level || 1
        Auth.USER = 8
        Auth.ADMIN = 16
        Auth.SUPER_ADMIN = 32
    }

    get m () {
        return async (ctx, next) =>{
            //检测token
            const userToken = basicAuth(ctx.req)
            let errMsg = 'token不合法'
            console.log(userToken)
            if (!userToken || !userToken.name) {
                console.log("???")
                throw new global.errs.Forbbiden(errMsg)
            }
            try {
                var decode = jwt.verify(userToken.name, 
                    global.config.security.secretKey)
            } catch (error) {
                console.log(error)
                if (error.name == 'TokenExpiredError'){
                    errMsg = 'token已过期'
                }
                throw new global.errs.Forbbiden(errMsg)
            }

            if(decode.scope < this.level){
                errMsg = '权限不足'
                throw new global.errs.Forbbiden(errMsg)
            }


            ctx.auth = {
                uid:decode.uid,
                scope:decode.scope
            }

            await next()
        }
    }
}

module.exports = {
    Auth
}