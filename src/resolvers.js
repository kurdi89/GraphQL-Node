import { Cat } from "./models/Cat";

export const resolvers = {
    // Queries : 
    Query: {
        hello: ()=> "Hello from graphql",
        cats: ()=> Cat.find(),
        // catByName: (name)=> Cat.find({name:name}),
    },
    // Mutations
    Mutation: {
        // we won't care about hte first argument, we will deconstruct the passed variables
        createCat: async (_, {name}) => {
            const kitty = new Cat({name: name});
            await kitty.save().then(() => console.log('meow'));
            return kitty;
        }
    }
};