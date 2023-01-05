/* eslint-disable indent */
/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
// 引入nodejs中的核心模块path
const path = require("path")
module.exports = appInfo => {
    /**
     * built-in config
     * @type {Egg.EggAppConfig}
     **/
    const config = exports = {};

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1672655084909_6449';

    // add your middleware config here
    config.middleware = [];
    // CSRF指跨站请求伪造，Egg中对post请求做了一些安全验证
    config.security = {
        csrf: { enable: false },
    };
    // 配置egg-view-nunjucks
    config.view = {
        defaultViewEngine: 'nunjucks',
    };
    // 配置egg-cors插件
    config.cors = {
        origin: '*', // 允许所有跨域访问，注释掉则允许上面白名单访问
        // credentials: true, //允许跨域请求携带cookies
        allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
    };
    // 配置egg-jwt插件
    config.jwt = { secret: 'luoieluo' };
    // 配置egg-sequelize
    config.sequelize = {
        dialect: 'mysql',
        database: 'helloworld',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '123456',
        timezone: '+08:00',
    };
    // add your user config here
    const userConfig = {
        // myAppName: 'egg',
    };
    // 就解决public路径问题，直接将egg的根目录设置为静态文件目录
    config.static = {
        prefix: '/', //访问路径
        dir: path.join(appInfo.baseDir, 'app/public'), //设置静态文件目录
    };

    return {
        ...config,
        ...userConfig,
    };
};