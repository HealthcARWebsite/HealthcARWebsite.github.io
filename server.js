//const express = require('express');
//const path = require('path');
//const app = express();
//app.use(express.static(__dirname + '/dist'));
//app.get('/*', function(req,res) {
//res.sendFile(path.join(__dirname+'/dist/index.html'));});
//app.listen(process.env.PORT || 8080);

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');

function app() {
  const server = express();

  server.use(cookieParser());

  const languages = ['en', 'es', 'mh'];

  languages.forEach((locale) => {
    const appServerModule = require(path.join(__dirname , locale, '/dist'));
    server.use(`/${locale}`, appServerModule.app(locale));
  });

  server.get('/(:locale(en|es|mh)/)?*', (req, res, next) => {
    const { urlLocale } = req.params;
    const userLocale = (req.headers['accept-language'] || '').substring(0, 2);

    if (urlLocale !== userLocale) {
      res.redirect(userLocale + req.url);
    }
  });

  return server;
}

function run() {
  app().listen(4200, () => {
    console.log(`Node Express server listening on http://localhost:4200`);
  });
}

run();