const app = require('./app')
const port = process.env.PORT

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`server is listening on ${port}`);
  });
}

module.exports = {
  app
};