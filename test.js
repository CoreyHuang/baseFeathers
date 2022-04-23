const { ApolloServer } = require('apollo-server-express');
const express = require('express');

const { typeDefs } = require('./schema')
const { resolvers } = require('./resolvers')

const app = express()

let apolloServer = null;
async function startServer() {
  apolloServer = new ApolloServer({
    typeDefs,
    resolvers
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
}
startServer();

app.listen({ port: 3003 }, () => {
  console.log("enable in 3003")
})