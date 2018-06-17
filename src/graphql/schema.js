const { makeExecutableSchema } = require("graphql-tools");
const resolvers = require("./resolvers");

const typeDefs = `
type Car{
_id: ID,
name: String!,
topSpeed: Int
}
type Query{
allCars: [Car]
}
input CarInput{
name: String!,
topSpeed: Int
}
type Mutation{
createCar(input: CarInput): Car
}
`;
module.exports = makeExecutableSchema({
  typeDefs,
  resolvers
});
