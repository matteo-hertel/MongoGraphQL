const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./graphql/schema");
const mongoose = require("mongoose");

const PORT = 3456;
const app = express();
mongoose.Promise = global.Promise;
mongoose.connect(
  "mongodb+srv://gql:5iCcUoJ6DJdJjXg5@graphql-dopkb.mongodb.net/gql_cars?retryWrites=true"
);
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
