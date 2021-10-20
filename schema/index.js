const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Query {
    fetchPizas(city: String): [Pizza],
    fetchPiza(id: ID, name: String): Pizza,
  }
  type Pizza {
    name:String,
    description:String,
    image:String,
    price:Float
  }
  type Mutation {
    createPiza(input: PizzaInput!): Pizza,
    updatePiza(input: PizzaInput!): Pizza,
    # destroyPiza(id: ID!): Pizza,
  }
  input PizzaInput {
    id: ID,
    name: String,
    description: String,
    image: String,
    price: Float,
  }
`);

module.exports = schema;