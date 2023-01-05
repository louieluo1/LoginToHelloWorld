/* eslint-disable indent */
// 编写数据模型，目标是在网页上显示helloworld,
// helloworld是在数据库中存储的，
// model下面是存储helloworld，
// 在根目录下建app.js为了数据库建表
module.exports = app => {
    // 引入数据类型
    const { STRING } = app.Sequelize;
    // 定义一个Hello模型，给表起名字叫hello(在数据库中就会显示hellos)，
    // 定义表的一个字段msg
    const Hello = app.model.define('hello', {
        msg: STRING,
    });
    return Hello;

};