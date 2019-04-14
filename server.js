const Koa = require('koa');

const app = new Koa(); 

app.listen(9000);

app.on('error', err => {
    log.error('server error', err)
}); 