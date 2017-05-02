const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLInt,
    GraphQLNonNull
} = require('graphql');

const pgdb = require('../database/pgdb');
const MeType = require('./types/me');

const RootQueryType = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        me: {
            type: MeType,
            description: 'Get the current user',
            args: {
                id: {type: new GraphQLNonNull(GraphQLInt)}
            },
            resolve: (obj, {id}, {pgPool}) => {
                console.log(`graphql: requesting user with id: ${id}`);
                return pgdb(pgPool).getUser({id});
            }
        }
    }
});

const cucSchema = new GraphQLSchema({
    query: RootQueryType
});

module.exports = cucSchema;
