const ValleyRouter = require('valley-router');
const router = new ValleyRouter();

router.get('/list', async function(next) {
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
