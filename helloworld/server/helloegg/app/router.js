/* eslint-disable indent */
'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const { router, controller } = app;
    router.get('/', controller.home.index);
    router.get('/hello', app.middleware.checktoken(), controller.hello.index);
    router.post('/login', controller.login.login);
};