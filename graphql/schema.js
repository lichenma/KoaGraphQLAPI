const { buildSchema } = require('graphql');
const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require('graphql');
const gadgetGraphQLType = require('./gadgetType');
const Gadget = require('../models/gadget'); 

const schema = buildSchema(`
    type Query {
        hello: String
    }
`);


module.exports = schema; 