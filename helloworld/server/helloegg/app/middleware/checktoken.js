/* eslint-disable indent */
// 用于验证token，checktoken中间件是个函数，返回一个async函数
function checktoken() {
    return async function(ctx, next) {
        try {
            // 如果拦截请求就直接响应，
            // 如果想继续到controller中就用next()
            // 验证token
            let token = ctx.header.token;
            ctx.app.jwt.verify(token, ctx.app.config.secret);
            await next(); //直接跳转到controller
        } catch (error) {
            ctx.body = {
                code: 40000,
                msg: "token验证失败"
                    // msg: error
            }
        }

    }
}
module.exports = checktoken;