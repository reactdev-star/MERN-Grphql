import resolvers from './resolvers';
import { importSchema } from 'graphql-import';
import { makeExecutableSchema } from 'graphql-tools';

async function schema() {
    const typeDefs = await importSchema('src/data/schema.graphql');
    const schema = makeExecutableSchema({typeDefs, resolvers});
    return schema;

}

export default schema;