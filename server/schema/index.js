const {
    GraphQLSchema,
    GraphQLObjectType
} = require('graphql');

const storeType = require('./types/store');

let store = {};

const RootQueryType = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        store: {
            type: storeType,
            description: 'Root level query',
            resolve: () => store
        }
    }
});

const cucSchema = new GraphQLSchema({
    query: RootQueryType
});

module.exports = cucSchema;
