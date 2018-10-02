const {makeExecutableSchema} = require('graphql-tools');
const resolvers = require('./resolvers');
const typeDefs = `
type Author {
	id: ID!
	info: Person
}
type Person {
	name: String!
	age: Int
	gender: String
}
type Query {
  getAuthors: [Author]
  retrieveAuthor(id: ID!): Author
}
type DeleteMessage {
  id: ID!,
  message: String
}
type Mutation {
  createAuthor(name: String!, gender: String!) : Author
  updateAuthor(id: ID!, name: String, gender: String, age: Int): Author
  deleteAuthor(id:ID!): DeleteMessage
}
`;

// Put together a schema
const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

module.exports = schema;