const ValleyRouter = require('valley-router');
const router = new ValleyRouter();
const debug = require('debug')('router:data');

router.get('/list', async function(next) {
  debug('path:/list');
  this.context.json({
    code: 0,
    data: {
      countries: [
        'china',
        'usa',
        'japan'
      ],
      author: 'gty'
    }
  });
});

module.exports = router;
