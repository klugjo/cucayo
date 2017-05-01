const {graphql} = require('graphql');
const graphqlHTTP = require('express-graphql');
const cucSchema = require('./schema');

require('dotenv').config()

const app = require('express')();

app.use('/graphql', graphqlHTTP({
    schema: cucSchema,
    graphiql: true
}));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Dev environment on http://localhost:${PORT}/graphql`);
});

