// The resolvers

const authors = require('./author');

const resolvers = {
    Query: {
        getAuthors: () => authors ,
        retrieveAuthor: (obj, { id }) => authors.find(author => author.id === id)
    },
    Mutation: {
        createAuthor: (obj, args) => {
            const id = String(authors.length+1);
            const { name, gender} = args;
            const newAuthor = {
                id,
                info: {
                    name,
                    gender
                }
            }
            authors.push(newAuthor);
            return newAuthor;
        },
        updateAuthor: (obj, { id, name, gender, age}) => {
            const author = authors.find(author => author.id === id);
            if(author) {
                const authorIndex = authors.indexOf(author);
                if(name) author.name = name;
                if(gender) author.gender = gender;
                if(age) author.age = age;
                authors[authorIndex] = { id, info: author }; // Update author using index
                return { id, info: author };
            } else {
                throw new Error('Author ID not found');
            }
        },
        deleteAuthor: (obj, { id, name, gender, age}) => {
            const author = authors.find(author => author.id === id);
            if(author) {
                const authorIndex = authors.indexOf(author);
                authors.splice(authorIndex, 1);
                return { id, message: `Author with Id ${id} deleted successfully` }
            } else {
                throw new Error('Author ID not found');
            }
        }
    }
};

module.exports = resolvers;