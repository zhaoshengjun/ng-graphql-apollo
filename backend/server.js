import express from "express";
import bodyParser from "body-parser";
import { graphqlExpress, graphiqlExpress } from "apollo-server-express";
import schema from "./schema";

const app = express();

app.use(
  "/graphiql",
  graphiqlExpress({
    endpointURL: "/graphql"
  })
);

app.use("/graphql", bodyParser.json(), graphqlExpress({ schema }));

app.listen(4000, () => {
  console.log("Server running on port 4000");
});
