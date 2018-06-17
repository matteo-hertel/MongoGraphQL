const { makeExecutableSchema } = require("graphql-tools");
const resolvers = require("./resolvers");

const typeDefs = `
type Car{
_id: ID,
name: String!,
topSpeed: Int
}
type Query{
allCars: [Car],
getCar(_id: ID!): Car
}
input CarInput{
name: String!,
topSpeed: Int
}
type Mutation{
createCar(input: CarInput): Car
updateCar(_id: ID!, input: CarInput): Car
deleteCar(_id: ID!): Boolean
}
`;
module.exports = makeExecutableSchema({
  typeDefs,
  resolvers
});
