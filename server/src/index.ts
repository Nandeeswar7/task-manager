import 'reflect-metadata';
import {app} from './app';

const PORT: string | number = 4000;
app.listen(PORT,(): void=>{
    console.log(`Server is listening on port ${PORT.toString()}`);
});
