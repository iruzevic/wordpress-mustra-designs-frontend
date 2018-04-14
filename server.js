const fs = require('fs');
const {createServer} = require('http');
const {parse} = require('url');
const next = require('next');
const pathMatch = require('path-match');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();
const route = pathMatch();
const match = route('*');

app.prepare()
  .then(() => {
    createServer((req, res) => {
      const {pathname, query} = parse(req.url, true);
      const params = match(pathname);
      if (dev && pathname.indexOf('/api/') === 0) {
        const file = `./mock/${pathname.slice(5)}.json`;
        return fs.readFile(file, 'utf8', (err, data) => {
          if (err) {
            return handle(req, res);
          }
          res.write(data);
          return res.end();
        });
      } else if (params === false) {
        return handle(req, res);
      }
      app.render(req, res, '/', Object.assign(params, query));
    })
      .listen(port, (err) => {
        if (err) {
          throw err;
        }
        console.log(`> Ready on http://localhost:${port}`);
      });
  });
