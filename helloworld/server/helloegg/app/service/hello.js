/* eslint-disable indent */
// 引入egg service的类
const Service = require("egg").Service;
class HelloService extends Service {
    //上数据库(model)，到数据库拿到数据(service)，然后返回给controller
    // 下面定义一个方法来获取数据库的数据
    async getMessage() {
        try {
            return await this.app.model.Hello.findAll();
        } catch (error) {
            return null
        }
    }
}
module.exports = HelloService;