import 'reflect-metadata';
import * as bodyParser from 'body-parser';
import * as controllers from './controllers';
import { ApolloServer } from 'apollo-server-express'
import { Server } from '@overnightjs/core';
import { Logger } from '@overnightjs/logger';
import { getSchema } from './graphql';
import connectDB from './db'



class AppServer extends Server {

    private readonly SERVER_STARTED = 'Example server started on port: ';

    constructor() {
        super(true);
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        connectDB()
        this.setupControllers();
    }

    private setupControllers(): void {
        const ctlrInstances = [];
        for (const name in controllers) {
            if (controllers.hasOwnProperty(name)) {
                const controller = (controllers as any)[name];
                ctlrInstances.push(new controller());
            }
        }
        super.addControllers(ctlrInstances);
    }

    private async setApolloServer() {
        try {
            // tslint:disable-next-line: no-console
            const schema = await getSchema()

            if (!schema) { throw (Error('No Schema given')) }

            const server = new ApolloServer({ schema, playground: true })

            server.applyMiddleware({ app: this.app })

        } catch (error) {
            Logger.Err(error)
        }
    }
    public async start(port: number | string) {
        await this.setApolloServer()

        this.app.get('*', (_, res) => {
            res.send(this.SERVER_STARTED + port);
        });

        this.app.listen(port, () => {
            Logger.Imp(this.SERVER_STARTED + port);
        });
    }
}

export default AppServer
