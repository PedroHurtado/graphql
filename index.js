const path = require('path');
const express = require('express');
const app = express();
const graphqlHTTP = require('express-graphql').graphqlHTTP;
const cors = require('cors')

const PORT = process.env.PORT || 8080;


const schema = require('./schema');
const resolvers = require('./schema/resolvers');

app.use(cors());

app.use('/pizzas', graphqlHTTP({
  schema: schema,
  rootValue: resolvers,
  graphiql: true,
  context: { db: {database:"bbdd"} },
}));

app.listen(PORT, error => (
  error
    ? console.error(error)
    : console.info(`Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`)
));
