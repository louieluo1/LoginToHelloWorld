'use strict';

/** @type Egg.EggPlugin */
module.exports = {
    // had enabled by egg
    // static: {
    //   enable: true,
    // }
    // 配置egg-view-nunjucks
    nunjucks: {
        enable: true,
        package: 'egg-view-nunjucks',
    },
    // 配置egg-cors插件
    cors: {
        enable: true,
        package: 'egg-cors',
    },
    // 配置egg-jwt插件
    jwt: {
        enable: true,
        package: 'egg-jwt',
    },
    // 配置egg-sequelize
    sequelize: {
        enable: true,
        package: 'egg-sequelize',
    },
};