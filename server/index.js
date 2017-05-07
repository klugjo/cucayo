const {graphql} = require('graphql');
const graphqlHTTP = require('express-graphql');

const cucSchema = require('./schema');
const generateSchemaJson = require('./utils/generateSchemaJson');

const nodeEnv = process.env.TYPE || 'development';

require('dotenv').config();

const pg = require('pg');
const pgConfig = require('./config/pg')[nodeEnv];
const pgPool = new pg.Pool(pgConfig);

const app = require('express')();

if (nodeEnv === 'development') {
    generateSchemaJson();
}

app.use('/graphql', graphqlHTTP({
    schema: cucSchema,
    graphiql: true,
    context: {
        pgPool
    }
}));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Dev environment on http://localhost:${PORT}/graphql`);
});

