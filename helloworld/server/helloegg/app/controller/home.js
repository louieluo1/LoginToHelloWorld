'use strict';

const { Controller } = require('egg');

class HomeController extends Controller {
    async index() {
        const { ctx } = this;
        ctx.body = `
      <h1>HELLO WORLD</h1>
      <h1>HELLO WORLD</h1>
      `;
    }
}

module.exports = HomeController;