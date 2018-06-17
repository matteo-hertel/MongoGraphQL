const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./graphql/schema");
const mongoose = require("mongoose");

const app = express();
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URI || "mongodb://localhost/gql_cars");
app.set("trust proxy", true);
app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
    schema
  })
);
app.listen(process.env.PORT || 3456, () => {
  console.log(`App listening on port ${process.env.PORT}`);
});
