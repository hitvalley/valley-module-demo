const path = require('path');
const fs = require('fs');

const ValleyServer = require('valley-server');
const ValleyRouter = require('valley-router');
const ValleyTpl = require('valley-tpl');
const debug = require('debug')('app');

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

server.use('404', async function(next){
  debug('404');
  this.context.text('404');
});

const port = 8081;
server.listen(port).then(res => console.log(`http:\/\/localhost:${port}`));

