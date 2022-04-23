// Initializes the `graphql` service on path `/graphql`
// const { Graphql } = require('./graphql.class');
// const hooks = require('./graphql.hooks');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs } = require('../../../schema')
const { resolvers } = require('../../../resolvers')

module.exports = async function (app) {
  // const options = {
  //   paginate: app.get('paginate')
  // };

  let apolloServer = null;
  async function startServer() {
    apolloServer = new ApolloServer({
      typeDefs,
      resolvers
    });
    await apolloServer.start();
    apolloServer.applyMiddleware({ app });
  }
  // startServer();

  // Initialize our service with any options it requires
  app.use('/graphql', await startServer);

  // Get our initialized service so that we can register hooks
  // const service = app.service('graphql');

  // service.hooks(hooks);
};
