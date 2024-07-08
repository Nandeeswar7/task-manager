import  express = require('express');
import { useExpressServer } from 'routing-controllers';
import { TaskController } from './controllers/task-controller';



const expressInstance = express();
const app = useExpressServer(expressInstance, {
    cors: true,
    controllers: [TaskController],
});

export { app };
