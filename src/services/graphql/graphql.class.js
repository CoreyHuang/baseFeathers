const { Service } = require('feathers-mongodb');

exports.Graphql = class Graphql extends Service {
  constructor(options, app) {
    super(options);
    
    app.get('mongoClient').then(db => {
      this.Model = db.collection('graphql');
    });
  }
};
