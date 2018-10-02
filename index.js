const express = require('express');
const graphqlHTTP = require('express-graphql');
const {buildSchema} = require('graphql');
const schema = buildSchema(`type Query {hello: String}`);

const rootResolver = {
    hello: () => 'Hello World!'
};

const app = express();

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: rootResolver,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('Running on port 4000');
});

