const ValleyRouter = require('valley-router');
const debug = require('debug')('router:main');

const router = new ValleyRouter();
router.get('/', async function(next) {
  let tpl = '<div>author: {{name}}</div>';
  tpl += '\
<ul>\
  <li>\
    <a href="./demo1.html">demo1: ValleyModule demo</a>\
  </li>\
  <li>\
    <a href="./demo2.html">demo1: ValleyModule demo with ValleyTpl</a>\
  </li>\
</ul>';
  let data = { name: 'valley' };
  let html = this.context.render(tpl, data);
  debug('path:/');
  this.context.text(html);
});

module.exports = router;
