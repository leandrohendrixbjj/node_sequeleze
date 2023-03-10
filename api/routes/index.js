const bodyParser = require('body-parser');
const pessoas = require('./pessoasRouter');
const niveis = require('./niveisRoute');
const turmas = require('./turmasRoute');

module.exports = app => {
  app.use(
      bodyParser.json(),
      pessoas,
      niveis,
      turmas,
  )
}

