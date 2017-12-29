const path = require('path');
const fs = require('fs');

const ValleyServer = require('valley-server');
const ValleyRouter = require('valley-router');
const ValleyTpl = require('valley-tpl');

// const Koa = require('koa');
// const kstatic = require('koa-static');

global.APP_PATH = __dirname;
global.join = (...args) => {
  args.unshift(APP_PATH);
  return path.join.apply(path, args);
};

const server = new ValleyServer();

server.use('prepare-tpl', ValleyTpl);
server.staticPath(path.join(__dirname, 'static'));

const mainRouter = require(join('routers', 'main'));
const dataRouter = require(join('routers', 'data'));
mainRouter.add('/data', dataRouter);
server.use('mainRouter', mainRouter);
// (function(){
  // let list = fs.readdirSync(join('routers'));
  // list.forEach(filename => {
    // if (!filename.match(/main.js/) && filename.match(/\.js$/)) {
      // let router = require(join('routers', filename));
      // let keyname = router && router.keyname;
      // if (router && keyname) {
        // mainRouter.use(keyname, router.routes(), router.allowedMethods());
      // }
    // }
  // });
// }());
// app.use(mainRouter.routes(), mainRouter.allowedMethods());
// app.use(kstatic(join('static')));

const port = 8081;
server.listen(port).then(res => console.log(`http:\/\/localhost:${port}/index.html`));

