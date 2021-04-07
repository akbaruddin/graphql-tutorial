import express from "express";
import { gql, ApolloServer } from "apollo-server-express";
import mongoose from "mongoose";
import { mainSchema, mainResolvers } from './schema/mainSchema.mjs';

const app = express();
const PORT = 4000;

mongoose.connect("mongodb://localhost/graphqlTutorial", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("connection to database was successful");
})

const typeDefs = gql`
  ${mainSchema}
`;

// Provide resolver functions for your schema fields
const resolvers = {
  ...mainResolvers
};

/**
 * Path: /graphql
 */
const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });

app.listen(PORT, () => {
  console.log(`Listening on port 4000`);
})