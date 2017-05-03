const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLInt,
    GraphQLNonNull
} = require('graphql');

module.exports = new GraphQLObjectType({
    name: 'RecipeType',
    fields: {
        id: {type: GraphQLID},
        userId: {type: new GraphQLNonNull(GraphQLInt)},
        name: {type: new GraphQLNonNull(GraphQLString)},
        status: {type: new GraphQLNonNull(GraphQLInt)},
        cooked: {type: new GraphQLNonNull(GraphQLInt)},
        instructions: {type: GraphQLString},
        link: {type: GraphQLString},
        createdAt: {type: GraphQLString}
    }
});