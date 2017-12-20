const router = require('koa-router')();

router.get('/', async ctx => {
  ctx.body = 'test';
});

module.exports = router;
