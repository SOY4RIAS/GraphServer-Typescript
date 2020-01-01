import { buildSchema } from 'type-graphql';
import ProjectResolver from './resolvers/ProjectResolver';
import TaskResolver from './resolvers/TaskResolver';
import { Logger } from '@overnightjs/logger';
import ClienteResolver from './resolvers/ClienteResolver';


export const getSchema = async () => {
    try {
        const schema = await buildSchema({
            resolvers: [ProjectResolver, TaskResolver, ClienteResolver],
            emitSchemaFile: true,
        });

        return schema
    } catch (error) {
        Logger.Warn('error')
        Logger.Err(error)
    }
}
