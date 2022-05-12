var express = require('express');
const { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');


var schema = buildSchema(`
    type Persoana {
        id: Int
        name: String
        age: Int
    }
`);
var root = {
    id: () => 1,
    name: () => 'Robert',
    age: () => 22,


};
var app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));
app.listen(4000, () => console.log('localhost:4000/graphql'));