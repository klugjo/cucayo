const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString
} = require('graphql');

const RootQueryType = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        hello: {
            type: GraphQLString,
            resolve: () => 'world'
        }
    }
});

const cucSchema = new GraphQLSchema({
    query: RootQueryType
});

module.exports = cucSchema;
