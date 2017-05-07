const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLInt,
    GraphQLNonNull,
    GraphQLList
} = require('graphql');

const pgdb = require('../../database/pgdb');
const recipe = require('./recipe');

module.exports = new GraphQLObjectType({
    name: 'ShoppingListType',
    fields: {
        id: {type: GraphQLID},
        userId: {type: new GraphQLNonNull(GraphQLInt)},
        remarks: {type: GraphQLString},
        title: {type: GraphQLString},
        createdAt: {type: GraphQLString},
        recipes: {
            type: new GraphQLList(recipe),
            resolve: ({id}, args, {pgPool}) => {
                return pgdb(pgPool).getRecipesByShoppingListId(id);
            }
        }
    }
});