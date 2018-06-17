const { makeExecutableSchema } = require("graphql-tools");
const resolvers = require("./resolvers");

const typeDefs = `
type Query{
hello(msg: String!):String!
}
`;
module.exports = makeExecutableSchema({
  typeDefs,
  resolvers
});
