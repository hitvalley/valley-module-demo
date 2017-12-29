const ValleyRouter = require('valley-router');

const router = new ValleyRouter();
router.get('/', async function(next) {
  this.context.text('test');
});

module.exports = router;
