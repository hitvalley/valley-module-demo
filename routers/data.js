const router = require('koa-router')();

router.get('/', async ctx => {
  ctx.body = {
    code: 0,
    data: {
      countries: [
        'china',
        'usa',
        'japan'
      ],
      author: 'gty'
    }
  };
});

module.exports = router;
module.exports.keyname = '/data';
