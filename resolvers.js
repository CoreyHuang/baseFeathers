// module.exports = function Resolvers() {
//   // let app = this;?

//   // const Tacos = app.service('tacos');
//   // const Good = app.service('good');

//   return {
//     RootQuery: {
//       Good(root, args, context) {
//         return 'test'
//       }
//     }

//   }
// }
const {users} = require('./data')

const resolvers = {
  Query: {
    getAllusers() {
      return users
    }
  },
}

module.exports = { resolvers}