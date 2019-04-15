const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require('graphql');
const gadgetGraphQLType = require('./gadgetType');
const Gadget = require('../models/gadget'); 

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        gadget: {
            type: gadgetGraphQLType, 
            args: { id: { type: GraphQLString }},
            resolve(parent, args) {
                return Gadget.findById(<a href="http://args.id" class="link link-url" target="_blank" rel="external nofollow noopener noreferrer">args.id</a>)
            }
        }
    }
})


module.exports = new schema; 