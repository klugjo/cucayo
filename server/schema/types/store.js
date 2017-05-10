const {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLNonNull,
    GraphQLList
} = require('graphql');

const pgdb = require('../../database/pgdb');
const UserType = require('./user');
const ShoppingList = require('./shoppingList');

module.exports = new GraphQLObjectType({
    name: 'StoreType',
    fields: {
        user: {
            type: UserType,
            description: 'Get the current user',
            args: {
                id: {type: new GraphQLNonNull(GraphQLInt)}
            },
            resolve: (obj, {id}, {pgPool}) => {
                console.log(`graphql: requesting user with id: ${id}`);
                return pgdb(pgPool).getUser({id});
            }
        },
        shoppingList: {
            type: new GraphQLList(ShoppingList),
            description: 'Get the shopping lists',
            args: {
                userId: {type: new GraphQLNonNull(GraphQLInt)}
            },
            resolve: (obj, {userId}, {pgPool}) => {
                console.log(`graphql: requesting shopping lists for user_id: ${userId}`);
                return pgdb(pgPool).getShoppingListsByUserId({userId});
            }
        }
    }
});
