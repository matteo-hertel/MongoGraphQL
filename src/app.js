const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./graphql/schema");
const PORT = 3456;
const app = express();

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
