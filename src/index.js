/* eslint-disable no-console */
const logger = require('./logger');
const app = require('./app');
const port = app.get('port');


// const { ApolloServer } = require('apollo-server-express');
// const { typeDefs } = require('../schema')
// const { resolvers } = require('../resolvers')

// let apolloServer = null;
// async function startServer() {
//   apolloServer = new ApolloServer({
//     typeDefs,
//     resolvers
//   });
//   await apolloServer.start();
//   apolloServer.applyMiddleware({ app });
// }
// startServer();


const server = app.listen(port);
process.on('unhandledRejection', (reason, p) =>
  logger.error('Unhandled Rejection at: Promise ', p, reason)
);

server.on('listening', () =>
  logger.info('Feathers application started on http://%s:%d', app.get('host'), port)
);
