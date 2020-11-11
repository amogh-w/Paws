require("dotenv").config();

const express = require("express");
var bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
//app.use(express.json());

app.use(bodyParser.json({ limit: "300mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "300mb",
    extended: true,
    parameterLimit: 1000000,
  })
);

const { graphqlHTTP } = require("express-graphql");
const mongoose = require("mongoose");

const schema = require("./schema/schema");

app.listen(4000, () => {
  console.log(`Running at 4000`);
});

app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
    schema,
  })
);

mongoose.connect(
  `mongodb+srv://amogh123:amogh123@amogh-first-cluster.vdru3.mongodb.net/paws?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

mongoose.connection.once("open", () => {
  console.log("Connected to Database");
});
