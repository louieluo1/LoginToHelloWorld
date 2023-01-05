/* eslint-disable indent */
const Controller = require("egg").Controller;
class HelloController extends Controller {
    async index() {
        // 拿到在service 的hello中返回从数据库中获得的数据
        // 然后再postman中测试一下http://127.0.0.1:7001/hello看能不能获取到数据。
        // 现在只是实现了获取数据功能，
        // 但是我们希望是实现用户登陆之后然后通过token才能拿到数据
        // 所以还需完善登陆验证功能和token验证功能（在controller和service中实现）
        let result = await this.ctx.service.hello.getMessage();
        if (result) {
            this.ctx.body = {
                code: 20000,
                data: result
            }
        } else {
            this.ctx.body = {
                code: 50000,
                data: "数据获取失败，请与管理员联系"
            }
        }
    }
}
module.exports = HelloController;