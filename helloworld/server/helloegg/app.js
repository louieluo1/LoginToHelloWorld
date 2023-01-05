/* eslint-disable indent */
//  在根目录下建app.js为了在数据库建表
module.exports = app => {
    // beforeStart是egg生命周期函数，启动应用时执行
    app.beforeStart(async function() {
        // 创建数据表的方法，为了创建表，一个空对象
        await app.model.sync({});
    });
};