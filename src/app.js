const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./graphql/schema");
const mongoose = require("mongoose");

const PORT = 3456;
const app = express();
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URI || "mongodb://localhost/gql_cars");
app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
    schema
  })
);
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
