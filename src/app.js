require("dotenv").config();
const express = require("express");
const graphqlHTTP = require("express-graphql");
const mongoose = require("mongoose");

const schema = require("./graphql/schema");

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URI);

app.set("trust proxy", true);

app.get("/", (req, res) => res.send("Hello GraphQL 🎉"));

app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
    schema
  })
);

app.listen(process.env.PORT, () => {
  console.log(`App listening on port ${process.env.PORT}`);
});
