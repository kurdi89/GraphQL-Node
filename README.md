## GraphQL with Node.js : 

requirements : 
- Babel
- Apollo
- npm, Node.js
- yarn *optional*
- MongoDB and Mongoose

to start : 

`npm init -y`




#### References : 
[Build a GraphQL Server with Node.js and MOngoDB](https://www.youtube.com/watch?v=YFkJGEefgU8) on youtube by : Ben Awad

start with `yarn add @babel/preset-env @babel/cli @babel/node @babel/core nodemon`

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
}``` in it _

to run the app `yarn start`