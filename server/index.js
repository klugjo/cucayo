const {graphql} = require('graphql');
const ncSchema = require('./schema');

const query = process.argv[2];

graphql(ncSchema, query).then(result => {
    console.log(result);
});
