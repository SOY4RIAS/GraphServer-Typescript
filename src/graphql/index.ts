import { buildSchema } from 'type-graphql';

import { Logger } from '@overnightjs/logger';
import ClienteResolver from './resolvers/ClienteResolver';

export const getSchema = async () => {
    try {
        const schema = await buildSchema({
            resolvers: [ClienteResolver],
            emitSchemaFile: true,
        });

        return schema
    } catch (error) {
        Logger.Warn('error')
        Logger.Err(error)
    }
}
