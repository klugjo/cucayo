const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLInt,
    GraphQLNonNull
} = require('graphql');

module.exports = new GraphQLObjectType({
    name: 'ShoppingListType',
    fields: {
        id: {type: GraphQLID},
        userId: {type: new GraphQLNonNull(GraphQLInt)},
        remarks: {type: GraphQLString},
        title: {type: GraphQLString},
        createdAt: {type: GraphQLString}
    }
});