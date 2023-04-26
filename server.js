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

console.log("First flag");

function app() {
  const server = express();

  server.use(cookieParser());

  const languages = ['en', 'es', 'mh'];

  console.log("Second flag flag");

  languages.forEach((locale) => {
    const appServerModule = require(path.join(__dirname + locale + '/dist'));
    server.use(`/${locale}`, appServerModule.app(locale));
  });

  console.log("Third flag");

  server.get('/(:locale(en|es|mh)/)?*', (req, res, next) => {
    const { urlLocale } = req.params;
    const userLocale = (req.headers['accept-language'] || '').substring(0, 2);
    
    console.log("Fourth flag");

    if (urlLocale !== userLocale) {
      res.redirect(userLocale + req.url);
    }
  });

  console.log("Fifth flag");

  return server;
}

console.log("Sixth flag");

function run() {
  app().listen(4200, () => {
    console.log(`Node Express server listening on http://localhost:4200`);
  });
}

console.log("Seventh flag");

run();

console.log("Eigth Flag")