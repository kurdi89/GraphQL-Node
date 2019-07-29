import { gql } from "apollo-server-express";

export const typeDefs = gql`
    # Queries : 
    type Query {
        hello: String!
        cats: [Cat!]!
        # catByName:{
        #     name: String!
        #     [Cat!]!
        # } 
    }
    # Models :
    type Cat {
        id: ID!
        name: String!
    }
    # Mutatios :
    type Mutation {
        createCat(name: String!): Cat!
    }
`;

