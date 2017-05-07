const fs = require('fs');
const path = require('path');
const {graphql} = require('graphql');
const {introspectionQuery, printSchema} = require('graphql/utilities');

const schema = require('../schema');

const yourSchemaPath = path.join(__dirname, '../../data/schema');

module.exports = () => {
    // Save JSON of full schema introspection for Babel Relay Plugin to use
    graphql(schema, introspectionQuery).then(result => {
        fs.writeFileSync(
            `${yourSchemaPath}.json`,
            JSON.stringify(result, null, 2)
        );
    });

    // Save user readable type system shorthand of schema
    fs.writeFileSync(
        `${yourSchemaPath}.graphql`,
        printSchema(schema)
    );
};