const { ApolloServer, gql } = require("apollo-server");

// books example
const books = [
  {
    title: "arry potta",
    author: "jk rowling"
  },
  {
    title: "jurassic park",
    author: "michael crichton"
  }
];

const typeDefs = gql`
  # book
  type Book {
    title: String
    author: String
  }

  # the 'query' type which serves as the root for all graphql queries.
  # (A "mutation" type will be covered later on)
  type Query {
    books: [Book]
  }
`;

// Resolver define technique for fetching types in schema.
const resolvers = {
  Query: {
    books: () => books
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`server is ready at ${url}`);
});
