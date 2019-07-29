import { ApolloServer, gql } from "apollo-server-express";
// import { typeDefs, resolvers } from "./schema";
import express from 'express';
// importing mongoose:
import mongoose from 'mongoose';

// importing resolvers and typeDefs:
import { resolvers } from './resolvers';
import { typeDefs } from './typeDefs';



const startApolloServer = async ()=>{
    // init epress app :
    const app = express();

    // create new apollo server :
    const server = new ApolloServer({
        // These will be defined for both new or existing servers
        typeDefs,
        resolvers,
    });
    
    server.applyMiddleware({ app }); // app is from an existing express app

    // connect to the db, wait for the connection before listening to the apollo server to be up
    await mongoose.connect('mongodb://localhost:27017/cats', {useNewUrlParser: true});
    var db = mongoose.connection;
    await db.on('error', console.error.bind(console, 'connection error:'));
    await db.once('open', function(err, resp){
      console.log(resp);
      console.log('db connected')
    });


    app.listen({ port: 4000 }, () =>
        console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
    )
}

startApolloServer();

console.log('hello')