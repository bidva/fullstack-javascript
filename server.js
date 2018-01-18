import config from './config.js';
import apiRouter from './api';
import sassMideleware from 'node-sass-middleware';
import path from 'path';

import express from 'express';
const server = express();

server.use(sassMideleware({
  src:path.join(__dirname,'sass'),
  dest:path.join(__dirname,'public'),
}));

server.set('view engine', 'ejs');

import serverRender from './serverRender';

server.get('/',(req, res) => {
  serverRender()
    .then(({initialMarkup,initialData}) => {
      res.render('index',{
        initialMarkup,
        initialData
      });
    })
    .catch(console.error);
});

server.use('/api',apiRouter);

server.use(express.static('public'));

server.listen(config.port,config.host, ()=>{
  console.info('Express listening on port ',config.port);
});
