const path = require('path');
const fs = require('fs');
const Koa = require('koa');
const kstatic = require('koa-static');

global.APP_PATH = __dirname;
global.join = (...args) => {
  // let args = Array.prototype.slice.apply(arguments);
  args.unshift(APP_PATH);
  return path.join.apply(path, args);
};

const app = new Koa();

const mainRouter = require(join('routers', 'main'));
(function(){
  let list = fs.readdirSync(join('routers'));
  list.forEach(filename => {
    if (!filename.match(/main.js/) && filename.match(/\.js$/)) {
      let router = require(join('routers', filename));
      let keyname = router && router.keyname;
      if (router && keyname) {
        mainRouter.use(keyname, router.routes(), router.allowedMethods());
      }
    }
  });
}());
app.use(mainRouter.routes(), mainRouter.allowedMethods());

app.use(kstatic(join('static')));

const port = 8081;
app.listen(port, err => {
  if (err) {
    console.error(err);
  } else {
    console.log(`http:\/\/localhost:${port}`);
  }
});

