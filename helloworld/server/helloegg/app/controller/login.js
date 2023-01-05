/* eslint-disable indent */
/* eslint-disable comma-dangle */
const Controller = require("egg").Controller;
class LoginController extends Controller {
    // 创建一个login方法，
    // 即拿到前端登陆的用户名，做一个用户验证，
    // 给前端发token
    async login() {
        try {
            // 给用户响应一个token，根据用户输入的用户名生成的
            // 获取用户的请求的一个字段是username
            let username = this.ctx.request.body.username;
            // 定义一个token,使用jwt有个方法是sign方法，
            // 用sign方法来做签名，签名对象是username
            // jwt的sercet方法是为拿到密钥。生成toen
            let token = this.ctx.app.jwt.sign({
                // username: username,//简写如下
                username
            }, this.ctx.app.config.jwt.secret);
            this.ctx.body = {
                code: 20000,
                // token: token//简写如下
                token
            }
        } catch (error) {
            this.ctx.body = {
                code: 40000,
                msg: "登陆验证失败"
                    // msg: error
            }
        }
    }
}
module.exports = LoginController;