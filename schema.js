const { gql } = require('apollo-server');

const typeDefs = gql`
    type Book {
        id: ID!
        title: String!
        author: String!
        description: String
        release_year: Int
        genre: String
    }

    type Query {
        books: [Book]
        book(id: ID!): Book
    }

    type Mutation {
        addBook(
            title: String!,
            author: String!,
            description: String,
            release_year: Int,
            genre: String
        ): Book!
        updateBook(
            id: ID!,
            title: String!,
            author: String!,
            description: String,
            release_year: Int,
            genre: String
        ): Book
        deleteBook(id: ID!): Book
    }
`;

module.exports = typeDefs;