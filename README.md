## GraphQL with Node.js : 

requirements : 
- Babel
- Apollo
- npm, Node.js
- yarn *optional*
- MongoDB and Mongoose

to start : 

`npm init -y`


start with `yarn add -D @babel/preset-env @babel/cli @babel/node @babel/core nodemon` as devDependencies

_create `.gitignore` file and add `node_modules/` in it_

setup nodemon :
add the start script to scripts : 
```
"scripts": {
    "start":"nodemon --exec babel-node -- src/index.js"
  }
```

create `src\index.js` file and add `console.log('hi')` to check your app is running

_you may wanna create `.babelrc` file and add ```{
  "presets": ["@babel/preset-env"]
}``` in it_

to run the app `yarn start`

## installing main dependincies : 
`yarn add apollo-server-express express graphql`


edit index.js to : 

```
import { ApolloServer, gql } from "apollo-server-express";
import { typeDefs, resolvers } from "./schema";

const server = new ApolloServer({
  // These will be defined for both new or existing servers
  typeDefs,
  resolvers,
});

server.applyMiddleware({ app }); // app is from an existing express app

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
)

console.log('hello')
```

#### References : 
[Build a GraphQL Server with Node.js and MOngoDB](https://www.youtube.com/watch?v=YFkJGEefgU8) on youtube by : Ben Awad