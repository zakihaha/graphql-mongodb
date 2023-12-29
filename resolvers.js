const BookModel = require('./models/Book');

module.exports = {
    Query: {
        books: async () => {
            return await BookModel.find();
        },
        book: async (_, { id }) => {
            return await BookModel.findById(id);
        }
    },

    Mutation: {
        addBook: async (_, { title, author, description, release_year, genre }) => {
            const book = new BookModel({ title, author, description, release_year, genre });
            await book.save();
            return book;
        },
        updateBook: async (_, { id, title, author, description, release_year, genre }) => {
            const book = await BookModel.findByIdAndUpdate(id, { title, author, description, release_year, genre }, { new: true });
            return book;
        },
        deleteBook: async (_, { id }) => {
            const book = await BookModel.findByIdAndDelete(id);
            return book;
        },
    },
}