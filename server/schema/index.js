const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull
} = require('graphql');

const MeType = require('./types/me');

const RootQueryType = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        me: {
            type: MeType,
            description: 'Get the current user',
            args: {
                key: {type: new GraphQLNonNull(GraphQLString)}
            },
            resolve: () => {
                // get from db
            }
        }
    }
});

const cucSchema = new GraphQLSchema({
    query: RootQueryType
});

module.exports = cucSchema;
