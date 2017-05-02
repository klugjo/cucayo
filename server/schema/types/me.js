const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLNonNull
} = require('graphql');

module.exports = new GraphQLObjectType({
    name: 'MeType',
    fields: {
        id: {type: GraphQLID},
        firstname: {type: GraphQLString},
        lastname: {type: GraphQLString},
        email: {type: new GraphQLNonNull(GraphQLString)},
        createdAt: {type: GraphQLString}
    }
});