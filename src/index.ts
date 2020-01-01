import dotenv from 'dotenv'

dotenv.config()

import AppServer from './Server';

const appServer: AppServer = new AppServer()

appServer.start(process.env?.PORT ?? 3000)
