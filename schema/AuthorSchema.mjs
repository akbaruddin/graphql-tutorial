import mongoose from 'mongoose';
import authorModel from "../models/authors.mjs";
export const AuthorDefs = `
  type Author {
    id: String
    age: Int
    name: String
    books: [String]
  }

  type Query {
    authors: [Author]
  }

  type Mutation {
    addAuthor(name: String, age: Int, books: [String]): Author
  }
`;

export const AuthorResolver = {
  Query: {
    authors: () => {
      return [
        {
          name: "Test 1",
          age: 20,
          books: ["Sample 1", "Sample 2"]
        }
      ];
    }
  },
  Mutation: {
    addAuthor: (root, { name, age, books }) => {
      const author = new authorModel({ name, age, books });
      return author.save();
    }
  }
}