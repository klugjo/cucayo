const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLNonNull,
    GraphQLList
} = require('graphql');

const pgdb = require('../../database/pgdb');
const recipe = require('./recipe');

module.exports = new GraphQLObjectType({
    name: 'UserType',
    fields: {
        id: {type: GraphQLID},
        firstname: {type: GraphQLString},
        lastname: {type: GraphQLString},
        email: {type: new GraphQLNonNull(GraphQLString)},
        createdAt: {type: GraphQLString},
        recipes: {
            type: new GraphQLList(recipe),
            resolve: ({id}, args, {pgPool}) => {
                return pgdb(pgPool).getRecipesByUserId(id);
            }
        }
    }
});