const Router = require('koa-router')
const router = new Router();

const {ParameterException} = require('../../../core/http-exception')
router.post('/v1/:id/book/latest', (ctx, next) => {
    const path = ctx.params;
    const query = ctx.request.query;
    const headers = ctx.request.header
    const body = ctx.request.body
     
    if(!query) {
        // const error = new ParameterException()
        // // error.requestUrl = `${ctx.method} ${ctx.path}`
        // throw error
    }
    ctx.body = {
        key:'book'
    }
})

module.exports= router